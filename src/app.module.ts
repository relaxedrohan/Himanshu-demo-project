import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DomainModule } from './domain/domain.module';
import { RosslareHttpModule } from './core/core.module';
//import { RosslareHttpModule } from './http/rosslare-http/rosslare-http.module';

//TODO: use NODE_ENV for loading seperate configs
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available throughout your application
      envFilePath: '.env',
    }),
    DomainModule,
    RosslareHttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
