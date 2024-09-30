import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RosslareHttpService } from 'src/core/core.service';

@Injectable()
export class AccessGroupsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly rosslareHttpService: RosslareHttpService,
  ) {}
  async getAccessGroups() {
    const url = this.configService.get(accessGroupsApiUrl);
    const response = await this.rosslareHttpService.getExternalData(url);
    return response;
    // Now you can use `url` to make HTTP requests to the third-party API
  }
}
