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
import { MovieService } from './movie.service';
import { CreateMovieDto, ReadMovieDto, UpdateMovieDto } from './dtos';

//Controlador en la que configura los parámetros de conexión al Backend
//por los diferentes métodos GET,POST,PATCH
@Controller('movies')
export class MovieController {
  constructor(private readonly _movieService: MovieService) {}

  @Get(':movieId')
  getMovie(
    @Param('movieId', ParseIntPipe) movieId: number,
  ): Promise<ReadMovieDto> {
    return this._movieService.get(movieId);
  }

  @Get()
  getMovies(): Promise<ReadMovieDto[]> {
    return this._movieService.getAll();
  }

  @Post()
  createMovie(@Body() movie: Partial<CreateMovieDto>): Promise<ReadMovieDto> {
    return this._movieService.create(movie);
  }

  @Patch(':movieId')
  updateMovie(
    @Param('movieId', ParseIntPipe) movieId: number,
    @Body() movie: Partial<UpdateMovieDto>,
  ) {
    return this._movieService.update(movieId, movie);
  }

  @Delete(':movieId')
  deleteMovie(@Param('movieId', ParseIntPipe) movieId: number): Promise<void> {
    return this._movieService.delete(movieId);
  }

  @Post('setActor/:movieId/:actorId')
  setActorToUser(
    @Param('movieId', ParseIntPipe) movieId: number,
    @Param('actorId', ParseIntPipe) actorId: number,
  ): Promise<boolean> {
    return this._movieService.setActorToMovie(movieId, actorId);
  }

  @Post('unsetActor/:movieId/:actorId')
  unsetActorToUser(
    @Param('movieId', ParseIntPipe) movieId: number,
    @Param('actorId', ParseIntPipe) actorId: number,
  ): Promise<boolean> {
    return this._movieService.unsetActorToMovie(movieId, actorId);
  }
}
