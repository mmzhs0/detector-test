import { Controller, Get, Query } from '@nestjs/common';
import { DetectorService } from './detector.service';

export interface IQueryParams {
  time: string;
  location: string;
}

@Controller('detector')
export class DetectorController {
  constructor(private readonly detectorService: DetectorService) {}

  @Get()
  async checkRequest(@Query() params: IQueryParams) {
    //console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
    return this.detectorService.checkRequest(params);
  }
}
