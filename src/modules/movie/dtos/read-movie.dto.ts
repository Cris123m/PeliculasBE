import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { Genre } from '../../genre/genre.entity';
import { Actor } from 'src/modules/actor/actor.entity';

@Exclude()
export class ReadMovieDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly name: string;

  @Expose()
  @IsNumber()
  readonly duration: number;

  @Expose()
  @IsString()
  readonly synopsis: string;

  @Expose()
  @IsNotEmpty()
  readonly genre: Genre;

  @Expose()
  @IsNotEmpty()
  readonly actors: Actor[];
}
