import { Test, TestingModule } from '@nestjs/testing';
import { GenreController } from './genre.controller';

//Controlador para pruebas unitarias
describe('GenreController', () => {
  let controller: GenreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenreController],
    }).compile();

    controller = module.get<GenreController>(GenreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
