import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Controlador global, al entrar a la web
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
