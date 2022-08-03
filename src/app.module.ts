import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostGraphileController } from './post-graphile/post-graphile.controller';

@Module({
  imports: [],
  controllers: [AppController, PostGraphileController],
  providers: [AppService],
})
export class AppModule {}
