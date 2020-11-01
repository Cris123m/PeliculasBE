import { IsNumber, IsString, MaxLength } from 'class-validator';

//Dto de los datos al actualizar Actor
export class UpdateActorDto {
  @IsString()
  @MaxLength(100, { message: 'this name is not valid' })
  readonly names: string;

  @IsNumber()
  readonly age: number;

  @IsString()
  readonly photoURL: string;
}
