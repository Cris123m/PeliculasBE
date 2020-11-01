import { EntityRepository, Repository } from 'typeorm';
import { Actor } from './actor.entity';

@EntityRepository(Actor)
export class ActorRepository extends Repository<Actor> {}
//Repositorio que vincula al actor
