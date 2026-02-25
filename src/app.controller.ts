import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // GET /api
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // GET /api/test
  @Get('test')
  getTest() {
    return {
      status: 'success',
      message: 'Backend is working correctly!',
    };
  }
}
