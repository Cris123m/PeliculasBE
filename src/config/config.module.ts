import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

//Módulo del servicio de configuración
@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
