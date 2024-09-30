import { Module } from '@nestjs/common';
import { AccessGroupsModule } from './access-groups/access-groups.module';
import { CardsModule } from './cards/cards.module';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [AccessGroupsModule, CardsModule],
})
export class DomainModule {}
