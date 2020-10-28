import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { GenreRepository } from './genre.repository';
import { GenreService } from './genre.service';

@Module({
  imports: [TypeOrmModule.forFeature([GenreRepository]), SharedModule],
  providers: [GenreService],
})
export class GenreModule {}
