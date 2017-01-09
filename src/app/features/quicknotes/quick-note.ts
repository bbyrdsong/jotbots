import {JotBot} from '../../shared/jotbot';

export class QuickNote extends JotBot {
    note: string;

    constructor(note: string) {
        super('quick-note');

        this.note = note;
    }
}
