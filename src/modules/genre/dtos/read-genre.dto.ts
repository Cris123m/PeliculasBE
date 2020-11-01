import { IsNumber, IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

//Dto de los datos a ser expuestos al leer Género
@Exclude()
export class ReadGenreDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly nameGenre: string;
}
