import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto, ReadGenreDto, UpdateGenreDto } from './dtos';

@Controller('Genres')
export class GenreController {
  constructor(private readonly _GenreService: GenreService) {}

  @Get(':genreId')
  getGenre(
    @Param('genreId', ParseIntPipe) genreId: number,
  ): Promise<ReadGenreDto> {
    return this._GenreService.get(genreId);
  }

  @Get()
  getGenres(): Promise<ReadGenreDto[]> {
    return this._GenreService.getAll();
  }

  @Post()
  createGenre(@Body() genre: Partial<CreateGenreDto>): Promise<ReadGenreDto> {
    return this._GenreService.create(genre);
  }

  @Patch(':genreId')
  updateGenre(
    @Param('genreId', ParseIntPipe) genreId: number,
    @Body() genre: Partial<UpdateGenreDto>,
  ) {
    return this._GenreService.update(genreId, genre);
  }

  @Delete(':genreId')
  deleteGenre(@Param('genreId', ParseIntPipe) genreId: number) {
    return this._GenreService.delete(genreId);
  }
}
