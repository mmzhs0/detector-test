import { Test, TestingModule } from '@nestjs/testing';
import { DetectorController } from './detector.controller';

describe('DetectorController', () => {
  let controller: DetectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetectorController],
    }).compile();

    controller = module.get<DetectorController>(DetectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
