import { IsNumber, IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadActorDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly names: string;

  @Expose()
  @IsNumber()
  readonly age: number;

  @Expose()
  @IsString()
  readonly photoURL: string;
}
