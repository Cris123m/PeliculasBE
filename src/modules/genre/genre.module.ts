import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { GenreRepository } from './genre.repository';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';

@Module({
  imports: [TypeOrmModule.forFeature([GenreRepository]), SharedModule],
  providers: [GenreService],
  controllers: [GenreController],
})
export class GenreModule {}
