import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
    getHello(): string {

        return 'Hello World!';
    }

    getGoodbye(): string {
        return 'good bye';
    }

    postHello(): string {
        return 'Hello World!';
    }
}
