import { JotBot } from './../../shared/jotbot';

export class QuickNote extends JotBot {

    constructor(
        public name: string,
        public note: string
    ) {
        super(name, note);
    }
}
