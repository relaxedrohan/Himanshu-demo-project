import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class RosslareHttpService {
  constructor(private readonly httpService: HttpService) {}

  // Example: GET request to a third-party API
  async getExternalData(url: string): Promise<any> {
    try {
      const response: AxiosResponse = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Third-party API error',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
