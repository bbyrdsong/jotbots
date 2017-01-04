import {JotBot} from '../../shared/jotbot';

export class QuickNote extends JotBot {
    note: string;

    constructor(id: number, note: string) {
        super(id, 'quick-note');

        this.note = note;
    }
}
