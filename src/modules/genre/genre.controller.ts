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

@Controller('genres')
export class GenreController {
  constructor(private readonly _genreService: GenreService) {}

  @Get(':genreId')
  getGenre(
    @Param('genreId', ParseIntPipe) genreId: number,
  ): Promise<ReadGenreDto> {
    return this._genreService.get(genreId);
  }

  @Get()
  getGenres(): Promise<ReadGenreDto[]> {
    return this._genreService.getAll();
  }

  @Post()
  createGenre(@Body() genre: Partial<CreateGenreDto>): Promise<ReadGenreDto> {
    return this._genreService.create(genre);
  }

  @Patch(':genreId')
  updateGenre(
    @Param('genreId', ParseIntPipe) genreId: number,
    @Body() genre: Partial<UpdateGenreDto>,
  ) {
    return this._genreService.update(genreId, genre);
  }

  @Delete(':genreId')
  deleteGenre(@Param('genreId', ParseIntPipe) genreId: number) {
    return this._genreService.delete(genreId);
  }
}
