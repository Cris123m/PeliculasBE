import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateGenreDto, ReadGenreDto, UpdateGenreDto } from './dtos';
import { Genre } from './genre.entity';
import { GenreRepository } from './genre.repository';

//Servicios de Género
//Donde se encuentran las acciones a realizar por cada petición
//a cada uno de los métodos para el CRUD
@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(GenreRepository)
    private readonly _genreRepository: GenreRepository,
  ) {}

  async get(id: number): Promise<ReadGenreDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const genre = await this._genreRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!genre) {
      throw new NotFoundException();
    }

    return plainToClass(ReadGenreDto, genre);
  }

  async getAll(): Promise<ReadGenreDto[]> {
    const genres: Genre[] = await this._genreRepository.find({
      where: { status: 'ACTIVE' },
    });

    return genres.map((genre: Genre) => plainToClass(ReadGenreDto, genre));
  }

  async create(genre: Partial<CreateGenreDto>): Promise<ReadGenreDto> {
    const savedGenre: Genre = await this._genreRepository.save(genre);
    return plainToClass(ReadGenreDto, savedGenre);
  }

  async update(
    genreId: number,
    genre: Partial<UpdateGenreDto>,
  ): Promise<ReadGenreDto> {
    const foundGenre: Genre = await this._genreRepository.findOne(genreId, {
      where: { status: 'ACTIVE' },
    });
    if (!foundGenre) {
      throw new NotFoundException('This genre does not exist');
    }

    foundGenre.nameGenre = genre.nameGenre;

    const updateGenre: Genre = await this._genreRepository.save(foundGenre);

    return plainToClass(ReadGenreDto, updateGenre);
  }

  async delete(id: number): Promise<void> {
    const genreExist = await this._genreRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!genreExist) {
      throw new NotFoundException();
    }

    await this._genreRepository.update(id, { status: 'INACTIVE' });
  }
}
