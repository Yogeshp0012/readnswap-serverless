import { Module } from '@nestjs/common';
import { NewsletterController } from './newsletter/newsletter.controller';
import { NewsletterService } from './newsletter/newsletter.service';

@Module({
  imports: [],
  controllers: [NewsletterController],
  providers: [NewsletterService],
})
export class AppModule {}
