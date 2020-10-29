import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { ActorRepository } from '../actor/actor.repository';
import { CreateMovieDto, ReadMovieDto, UpdateMovieDto } from './dtos';
import { Movie } from './movie.entity';
import { MovieRepository } from './movie.repository';
import { status } from '../../shared/entity-status.num';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieRepository)
    private readonly _movieRepository: MovieRepository,
    @InjectRepository(ActorRepository)
    private readonly _actorRepository: ActorRepository,
  ) {}

  async get(id: number): Promise<ReadMovieDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const movie = await this._movieRepository.findOne(id, {
      where: { status: status.ACTIVE },
    });

    if (!movie) {
      throw new NotFoundException();
    }

    return plainToClass(ReadMovieDto, movie);
  }

  async getAll(): Promise<ReadMovieDto[]> {
    const movies: Movie[] = await this._movieRepository.find({
      where: { status: status.ACTIVE },
    });

    return movies.map((movie: Movie) => plainToClass(ReadMovieDto, movie));
  }

  async create(movie: Partial<CreateMovieDto>): Promise<ReadMovieDto> {
    const savedMovie: Movie = await this._movieRepository.save(movie);
    return plainToClass(ReadMovieDto, savedMovie);
  }

  async update(
    movieId: number,
    movie: Partial<UpdateMovieDto>,
  ): Promise<ReadMovieDto> {
    const foundMovie: Movie = await this._movieRepository.findOne(movieId, {
      where: { status: status.ACTIVE },
    });
    if (!foundMovie) {
      throw new NotFoundException('This movie does not exist');
    }

    foundMovie.name = movie.name;
    foundMovie.duration = movie.duration;
    foundMovie.synopsis = movie.synopsis;
    foundMovie.genre = movie.genre;
    //foundMovie.genre = movie.genre;

    const updateMovie: Movie = await this._movieRepository.save(foundMovie);

    return plainToClass(ReadMovieDto, updateMovie);
  }

  async delete(id: number): Promise<void> {
    const movieExist = await this._movieRepository.findOne(id, {
      where: { status: status.ACTIVE },
    });

    if (!movieExist) {
      throw new NotFoundException();
    }

    await this._movieRepository.update(id, { status: status.INACTIVE });
  }

  async setActorToMovie(movieId: number, actorId: number): Promise<boolean> {
    const movieExist = await this._movieRepository.findOne(movieId, {
      where: { status: status.ACTIVE },
    });

    if (!movieExist) {
      throw new NotFoundException();
    }

    const actorExist = await this._actorRepository.findOne(actorId, {
      where: { status: status.ACTIVE },
    });

    if (!actorExist) {
      throw new NotFoundException('Actor does not exist');
    }

    movieExist.actors.push(actorExist);
    await this._movieRepository.save(movieExist);

    return true;
  }

  async unsetActorToMovie(movieId: number, actorId: number): Promise<boolean> {
    const movieExist = await this._movieRepository.findOne(movieId, {
      where: { status: status.ACTIVE },
    });

    if (!movieExist) {
      throw new NotFoundException();
    }

    const actorExist = await this._actorRepository.findOne(actorId, {
      where: { status: status.ACTIVE },
    });

    if (!actorExist) {
      throw new NotFoundException('Actor does not exist');
    }

    movieExist.actors = movieExist.actors.filter(function(actor) {
      return actor.id != actorExist.id;
    });

    await this._movieRepository.save(movieExist);

    return true;
  }
}
