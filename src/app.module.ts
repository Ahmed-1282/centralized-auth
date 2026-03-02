import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Guards
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';

// Feature Modules
import { AuditModule } from './modules/audit/audit.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { PartnersModule } from './modules/partners/partners.module';
import { RolesModule } from './modules/roles/roles.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { AgentsModule } from './modules/agents/agents.module';
import { ApiKeysModule } from './modules/api-keys/api-keys.module';
import { TestReportsModule } from './modules/test-reports/test-reports.module';

// Entities needed by global guards
import { TypeOrmModule as TypeOrmFeature } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { UserPermission } from './entities/user-permission.entity';
import { UserRole } from './entities/user-role.entity';
import { PartnerFeatureToggle } from './entities/partner-feature-toggle.entity';
import { Permission } from './entities/permission.entity';
import { PartnerDashboard } from './entities/partner-dashboard.entity';
import { Dashboard } from './entities/dashboard.entity';

@Module({
  imports: [
    // Global Configuration Module
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV || 'local'}`],
    }),

    // PRIMARY CONNECTION (GIS_v2 Database)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASS'),
        database: config.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: false, // Keep false for existing legacy DBs!
      }),
    }),

    // Entities required by guards at the app-module level
    TypeOrmFeature.forFeature([
      Role,
      UserPermission,
      UserRole,
      PartnerFeatureToggle,
      Permission,
      PartnerDashboard,
      Dashboard,
    ]),

    // Feature Modules
    AuditModule,
    AuthModule,
    UsersModule,
    PartnersModule,
    RolesModule,
    PermissionsModule,
    AgentsModule,
    ApiKeysModule,
    TestReportsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // Global JWT Guard - all routes require auth unless @Public()
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    // Global Roles Guard - checks @Roles() decorator
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
