import { IsString, MaxLength } from 'class-validator';

export class UpdateGenreDto {
  @IsString()
  @MaxLength(45, { message: 'this name is not valid' })
  readonly nameGenre: string;
}
