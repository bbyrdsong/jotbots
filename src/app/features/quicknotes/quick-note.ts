import { JotBot } from './../../lib/jotbot';

export class QuickNote extends JotBot {

    constructor(
        public name: string,
        private note: string
    ) {
        super(name, note);
    }
}
