import { Body, Controller, Post } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { AuthService } from 'src/auth/auth.service';

@Controller('newsletter')
export class NewsletterController {

    constructor(private readonly newsletter: NewsletterService,
        private readonly auth: AuthService
    ) { }

    @Post("/subscribe")
    async getHello(@Body("email") email: string, @Body("payload") payload: string): Promise<{}> {
        try {
            if (!this.auth.verifyToken(payload)) {
                return { error: 'Invalid token' };
            }
            return await this.newsletter.createContact(email);
        }
        catch (err) {
            return err;
        }
    }
}
