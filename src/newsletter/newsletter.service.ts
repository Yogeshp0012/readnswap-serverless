import { Injectable } from '@nestjs/common';
import { LoopsClient } from 'loops';

@Injectable()
export class NewsletterService {
    loops: LoopsClient;

    constructor() {
        this.loops = new LoopsClient(process.env.LOOPS_KEY ?? "");
    }

    async createContact(email: string): Promise<{}> {
        return await this.loops.createContact(email);
    }
}
