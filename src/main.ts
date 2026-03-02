import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TransformResponseInterceptor } from './common/interceptors/transform-response.interceptor';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { networkInterfaces } from 'os';

function getLocalIPAddress(): string {
  const interfaces = networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    const iface = interfaces[name];
    if (iface) {
      for (const addr of iface) {
        if (addr.family === 'IPv4' && !addr.internal) {
          return addr.address;
        }
      }
    }
  }
  return '127.0.0.1';
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for cross-dashboard SSO
  app.enableCors();

  // Global prefix for all routes
  app.setGlobalPrefix('api');

  // Global Pipes (Data Validation & Transformation)
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // Global Interceptor (Response Transformation)
  const reflector = app.get(Reflector);
  app.useGlobalInterceptors(new TransformResponseInterceptor(reflector));

  // Global Exception Filter (Error Handling)
  app.useGlobalFilters(new AllExceptionsFilter());

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('GIS Auth API')
    .setDescription(
      'Centralized Authentication & Authorization API for the Agriculture Monitoring Platform. ' +
        'Manages users, partners, roles, permissions, and API keys across 6 interconnected dashboards.',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Start Server
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  const localUrl = await app.getUrl();
  const networkUrl = `http://${getLocalIPAddress()}:${port}`;

  console.log(`\n✅ Application is running on: ${localUrl}`);
  console.log(`📡 Network URL (share with partners): ${networkUrl}/api/docs`);
  console.log(`📚 Swagger Docs: ${localUrl}/api/docs`);
  console.log(`📊 Test Reports: ${localUrl}/api/test-reports/latest/html\n`);
}

void bootstrap();
