import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { DetectorService } from './detector.service';
import { ApiOkResponse, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

export interface IQueryParams {
  time: string;
  location: string;
}

@ApiTags('Detection')
@Controller('detector')
export class DetectorController {
  constructor(private readonly detectorService: DetectorService) {}

  @Get()
  @ApiOkResponse({
    status: 200,
    description: 'The request has been successfully investigated',
    schema: {
      type: 'object',
      example: {
        is_vpn: false,
      },
    },
  })
  @ApiResponse({ status: 500, description: 'Server error.' })
  @ApiQuery({ name: 'time' })
  @ApiQuery({ name: 'location' })
  @HttpCode(200)
  async checkRequest(@Query() params: IQueryParams) {
    return this.detectorService.checkRequest(params);
  }
}
