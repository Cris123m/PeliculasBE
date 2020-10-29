import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateActorDto, ReadActorDto, UpdateActorDto } from './dtos';
import { Actor } from './actor.entity';
import { ActorRepository } from './actor.repository';

//return plainToClass();
@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(ActorRepository)
    private readonly _actorRepository: ActorRepository,
  ) {}

  async get(id: number): Promise<ReadActorDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const actor = await this._actorRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!actor) {
      throw new NotFoundException();
    }

    return plainToClass(ReadActorDto, actor);
  }

  async getAll(): Promise<ReadActorDto[]> {
    const actors: Actor[] = await this._actorRepository.find({
      where: { status: 'ACTIVE' },
    });

    return actors.map((actor: Actor) => plainToClass(ReadActorDto, actor));
  }

  async create(actor: Partial<CreateActorDto>): Promise<ReadActorDto> {
    const savedActor: Actor = await this._actorRepository.save(actor);
    return plainToClass(ReadActorDto, savedActor);
  }

  async update(
    actorId: number,
    actor: Partial<UpdateActorDto>,
  ): Promise<ReadActorDto> {
    const foundActor: Actor = await this._actorRepository.findOne(actorId, {
      where: { status: 'ACTIVE' },
    });
    if (!foundActor) {
      throw new NotFoundException('This actor does not exist');
    }

    foundActor.names = actor.names;
    foundActor.age = actor.age;
    foundActor.photoURL = actor.photoURL;

    const updateActor: Actor = await this._actorRepository.save(foundActor);

    return plainToClass(ReadActorDto, updateActor);
  }

  async delete(id: number): Promise<void> {
    const actorExist = await this._actorRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!actorExist) {
      throw new NotFoundException();
    }

    await this._actorRepository.update(id, { status: 'INACTIVE' });
  }
}
