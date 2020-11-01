import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { ActorRepository } from './actor.repository';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';

//Módulo para la gestión de Actor
@Module({
  imports: [TypeOrmModule.forFeature([ActorRepository]), SharedModule],
  providers: [ActorService],
  controllers: [ActorController],
})
export class ActorModule {}
