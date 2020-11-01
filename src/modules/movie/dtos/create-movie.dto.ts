import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Actor } from '../../actor/actor.entity';
import { Genre } from '../../genre/genre.entity';

export class CreateMovieDto {
  @IsString()
  @MaxLength(100, { message: 'this name is not valid' })
  readonly name: string;

  @IsNumber()
  readonly duration: number;

  @IsString()
  readonly synopsis: string;

  @IsNotEmpty()
  readonly genre: Genre;

  @IsNotEmpty()
  readonly actors: Actor[];
}
