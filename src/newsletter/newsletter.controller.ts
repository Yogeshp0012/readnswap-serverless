import { Body, Controller, Post } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';

@Controller('newsletter')
export class NewsletterController {

    constructor(private readonly newsletter: NewsletterService,
    ) { }

    @Post("/subscribe")
    async getHello(@Body("email") email: string, @Body("payload") payload: string): Promise<{}> {
            return await this.newsletter.createContact(email);
    }
}
