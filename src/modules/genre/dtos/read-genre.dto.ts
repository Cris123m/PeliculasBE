import { IsNumber, IsString, MaxLength } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadGenreDto {
  @Expose({ name: 'identificador' })
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  @MaxLength(45, { message: 'this name is not valid' })
  readonly nameGenre: string;
}
