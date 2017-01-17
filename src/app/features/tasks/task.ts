import { JotBot } from './../../shared/jotbot';
export class Task extends JotBot {

    constructor(name: string,
        description: string,
        public dueDate: Date) {
            super(name, description);
        }
}
