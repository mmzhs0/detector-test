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
  @ApiQuery({
    name: 'time',
    required: true,
    type: 'string',
    example: '2024-02-13T08:19:19.085692+01:00',
  })
  @ApiQuery({
    name: 'location',
    required: true,
    type: 'string',
    example: 'Europe/Moscow',
  })
  @HttpCode(200)
  async checkRequest(@Query() params: IQueryParams) {
    return this.detectorService.checkRequest(params);
  }
}
