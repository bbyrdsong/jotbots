import { BaseModel } from './repository-pattern';

export class JotBot extends BaseModel {
    name: string;
    description: string;

    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
    }
}
