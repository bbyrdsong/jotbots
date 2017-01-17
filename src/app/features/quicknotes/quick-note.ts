import { JotBot } from './../../shared/jotbot';

export class QuickNote extends JotBot {

    constructor(
        public name: string,
        private note: string
    ) {
        super(name, note);
    }
}
