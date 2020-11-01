import { IsString, MaxLength } from 'class-validator';

//Dto para la creación de género
export class CreateGenreDto {
  @IsString()
  @MaxLength(45, { message: 'this name is not valid' })
  readonly nameGenre: string;
}
