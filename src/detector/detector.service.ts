import { Injectable } from '@nestjs/common';
import { IQueryParams } from './detector.controller';
import axios from 'axios';

@Injectable()
export class DetectorService {
  async checkRequest(params: IQueryParams) {
    const { time, location } = params;
    const datetime = (await this.getCountryTime(location)).datetime;
    return {
      is_vpn: !this.compareResults(time, datetime),
    };
  }

  async getCountryTime(location: string) {
    const { data } = await axios.get(`${process.env.API_URL}/${location}`);
    return data;
  }

  compareResults(timeFromRequest: string, datetime: string) {
    const hoursFromRequest = timeFromRequest.split('T')[1].split(':')[0];
    const hoursFromDatetime = datetime.split('T')[1].split(':')[0];
    return hoursFromRequest === hoursFromDatetime;
  }
}
