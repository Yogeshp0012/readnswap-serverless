import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NewsletterController } from './newsletter/newsletter.controller';
import { NewsletterService } from './newsletter/newsletter.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [],
  controllers: [NewsletterController, AuthController],
  providers: [NewsletterService, AuthService],
})
export class AppModule {}
