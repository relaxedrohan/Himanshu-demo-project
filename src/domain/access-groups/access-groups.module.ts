import { Module } from '@nestjs/common';
import { AccessGroupsController } from './access-groups.controller';
import { AccessGroupsService } from './access-groups.service';
import { RosslareHttpModule } from 'src/core/core.module';

@Module({
  imports: [RosslareHttpModule],
  controllers: [AccessGroupsController],
  providers: [AccessGroupsService],
})
export class AccessGroupsModule {}
