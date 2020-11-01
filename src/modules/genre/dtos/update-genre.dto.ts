import { IsString, MaxLength } from 'class-validator';

//Dto de los datos al actualizar Género
export class UpdateGenreDto {
  @IsString()
  @MaxLength(45, { message: 'this name is not valid' })
  readonly nameGenre: string;
}
