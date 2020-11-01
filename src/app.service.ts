import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API Películas: Para consumir la API en cada uno de los servicios aumente el la URL /api/nombreDeMódulo';
  }
}
