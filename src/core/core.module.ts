import { Module } from '@nestjs/common';
import { RosslareHttpService } from './core.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [RosslareHttpService],
  exports: [RosslareHttpService],
})
export class RosslareHttpModule {}
