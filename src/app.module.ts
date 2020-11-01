import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { MovieModule } from './modules/movie/movie.module';
import { ActorModule } from './modules/actor/actor.module';
import { GenreModule } from './modules/genre/genre.module';

//Módulo global en que se determina todos los módulos usados en la API
@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    MovieModule,
    ActorModule,
    GenreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
