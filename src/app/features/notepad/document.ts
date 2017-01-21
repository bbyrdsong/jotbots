import { JotBot } from './../../lib/jotbot';

export class Document extends JotBot {

    constructor(name: string,
                description: string,
                body: string) {
                    super(name, description);
                }
}