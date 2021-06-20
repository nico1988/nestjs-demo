import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  path: '/api',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/nico')
  getNico(): string {
    return this.appService.getHello();
  }

  @Get('/cats')
  getCats(): string {
    return this.appService.getHello();
  }
}
