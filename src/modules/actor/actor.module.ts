import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { ActorRepository } from './actor.repository';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ActorRepository]), SharedModule],
  providers: [ActorService],
  controllers: [ActorController],
})
export class ActorModule {}
