import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto, ReadActorDto, UpdateActorDto } from './dtos';

@Controller('actors')
export class ActorController {
  constructor(private readonly _actorService: ActorService) {}

  @Get(':actorId')
  getActor(
    @Param('actorId', ParseIntPipe) actorId: number,
  ): Promise<ReadActorDto> {
    return this._actorService.get(actorId);
  }

  @Get()
  getActors(): Promise<ReadActorDto[]> {
    return this._actorService.getAll();
  }

  @Post()
  createActor(@Body() actor: Partial<CreateActorDto>): Promise<ReadActorDto> {
    return this._actorService.create(actor);
  }

  @Patch(':actorId')
  updateActor(
    @Param('actorId', ParseIntPipe) actorId: number,
    @Body() actor: Partial<UpdateActorDto>,
  ) {
    return this._actorService.update(actorId, actor);
  }

  @Delete(':actorId')
  deleteActor(@Param('actorId', ParseIntPipe) actorId: number) {
    return this._actorService.delete(actorId);
  }
}
