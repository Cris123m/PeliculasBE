import {
  IsArray,
  IsNumber,
  IsObject,
  IsString,
  MaxLength,
} from 'class-validator';
import { ReadActorDto } from '../../actor/dtos';
import { ReadGenreDto } from '../../genre/dtos';

export class UpdateMovieDto {
  @IsString()
  @MaxLength(100, { message: 'this name is not valid' })
  readonly name: string;

  @IsNumber()
  readonly duration: number;

  @IsString()
  readonly synopsis: string;

  @IsNumber()
  readonly genre_id: number;
}
