import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Movie } from '../movie/movie.entity';

//Entidad en la que se define los tipos de datos de los atributos
//en cada objeto, y las relaciones entre ellos, usado tanto
//para las migraciones para como los datos a ser expuestos
@Entity('genres')
export class Genre extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  nameGenre: string;

  @OneToMany(
    type => Movie,
    movie => movie.genre,
  )
  @JoinColumn()
  movies: Movie[];

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
