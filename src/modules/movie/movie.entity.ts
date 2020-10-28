import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Actor } from '../actor/actor.entity';

@Entity('movies')
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 100, nullable: false })
  name: string;

  @Column({ type: 'int', unique: false, nullable: false })
  duration: number;

  @Column({ type: 'text', unique: true, nullable: false })
  sysnopsis: string;

  @ManyToMany(
    type => Actor,
    actor => actor.movies,
  )
  @JoinTable({ name: 'movie_actors' })
  actors: Actor[];

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
