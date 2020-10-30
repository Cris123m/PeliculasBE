import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Genre } from '../../genre/genre.entity';

export class UpdateMovieDto {
  @IsString()
  @MaxLength(100, { message: 'this name is not valid' })
  readonly name: string;

  @IsNumber()
  readonly duration: number;

  @IsString()
  readonly synopsis: string;

  @IsNotEmpty()
  readonly genre: Genre;
}
