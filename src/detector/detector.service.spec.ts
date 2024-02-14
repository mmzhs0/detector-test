import { Test, TestingModule } from '@nestjs/testing';
import { DetectorService } from './detector.service';

describe('DetectorService', () => {
  let service: DetectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetectorService],
    }).compile();

    service = module.get<DetectorService>(DetectorService);
  });

  describe('compare results', () => {
    it('it should compare two Date strings', async () => {
      const result = service.compareResults(
        '2024-02-13T17:19:19.085692+01:00',
        '2024-02-13T17:19:19.085692+01:00',
      );
      expect(result).toBe(true);
    });

    it('it should compare two Date strings, one of them if empty', async () => {
      const result = service.compareResults(
        '2024-02-13T17:19:19.085692+01:00',
        '2024-02-13T08:19:19.085692+01:00',
      );
      expect(result).toBe(false);
    });
  });

  describe('check', () => {
    it('zz', async () => {
      const result = await service.checkRequest({
        location: 'Europe/Minsk',
        time: '2024-02-13T17:19:19.085692+01:00',
      });
      expect(result.is_vpn).toBe(true);
    });
  });
});
