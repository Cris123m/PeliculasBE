import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Función principal de la api
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();

  await app.listen(AppModule.port);
}
bootstrap();
