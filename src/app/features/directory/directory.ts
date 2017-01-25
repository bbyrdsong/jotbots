import { JotBot } from './../../lib/jotbot';

export class Directory extends JotBot {

    constructor(name: string,
                description: string,
                public email: string,
                public phone: string,
                public url: string,
                public group: string) {
                    super(name, description);
                }
}
