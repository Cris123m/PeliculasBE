import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { MovieRepository } from './movie.repository';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { ActorRepository } from '../actor/actor.repository';

//Módulo para la gestión de Películas
@Module({
  imports: [
    TypeOrmModule.forFeature([MovieRepository, ActorRepository]),
    SharedModule,
  ],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}
