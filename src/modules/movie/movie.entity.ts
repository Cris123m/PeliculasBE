import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Actor } from '../actor/actor.entity';
import { Genre } from '../genre/genre.entity';

//Entidad en la que se define los tipos de datos de los atributos
//en cada objeto, y las relaciones entre ellos, usado tanto
//para las migraciones para como los datos a ser expuestos
@Entity('movies')
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 100, nullable: false })
  name: string;

  @Column({ type: 'int', unique: false, nullable: false })
  duration: number;

  @Column({ type: 'text', unique: true, nullable: false })
  synopsis: string;

  @ManyToOne(
    type => Genre,
    genre => genre.movies,
    { eager: true },
  )
  @JoinColumn({ name: 'genre_id' })
  genre: Genre;

  @ManyToMany(
    type => Actor,
    actor => actor.movies,
    { eager: true },
  )
  @JoinTable({ name: 'movie_actors' })
  actors: Actor[];

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
