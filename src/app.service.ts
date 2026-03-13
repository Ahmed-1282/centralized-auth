import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger = new Logger(AppService.name);

  constructor(@InjectDataSource() private dataSource: DataSource) {}

  onModuleInit() {
    if (this.dataSource.isInitialized) {
      const dbName = String(this.dataSource.options.database || 'centralized_auth');
      this.logger.log(`✅  SUCCESS: Connected to ${dbName} Database!`);
    } else {
      this.logger.error('❌  ERROR: Database connection failed!');
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
