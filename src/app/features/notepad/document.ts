import { JotBot } from './../../lib/jotbot';

export class Document extends JotBot {

    constructor(name: string,
                description: string,
                public body: string) {
                    super(name, description);
                }
}
