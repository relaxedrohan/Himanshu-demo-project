import { Controller, Get, HttpStatus, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccessGroupsService } from './access-groups.service';

@Controller('access-groups')
export class AccessGroupsController {
  constructor(private readonly service: AccessGroupsService) {}

  @Get()
  @ApiTags('Access Groups')
  @ApiOperation({ summary: 'Get all the access groups' })
  @ApiResponse({ status: HttpStatus.OK, type: String })
  async findAll(): Promise<string> {
    const accessGroups = await this.service.getAccessGroups();
    return accessGroups;
  }

  @Post()
  @ApiTags('Access Groups')
  @ApiOperation({ summary: 'Add Access Group' })
  @ApiResponse({ status: HttpStatus.OK })
  createAccessGroup() {
    return 'abc';
  }

  @Put('')
  @ApiTags('Access Groups')
  @ApiOperation({ summary: 'Update Access Group' })
  @ApiResponse({ status: HttpStatus.OK, type: String })
  update() {
    return 'ac';
  }
}
