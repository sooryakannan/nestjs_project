import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';

@Module({
  imports: [],
  controllers: [AppController,CatsController],
  providers: [AppService,CatsService],
})
export class AppModule {}
