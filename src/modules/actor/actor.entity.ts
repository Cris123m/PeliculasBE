import { type } from 'os';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Movie } from '../movie/movie.entity';

@Entity('actors')
export class Actor extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 100, nullable: false })
  names: string;

  @Column({ type: 'int', unique: false, nullable: false })
  age: number;

  @Column({ type: 'text', unique: true, nullable: false })
  photoURL: string;

  @ManyToMany(
    type => Movie,
    movie => movie.actors,
  )
  @JoinColumn()
  movies: Movie[];

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
