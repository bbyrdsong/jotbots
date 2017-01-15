export class BaseModel {
    id: number;
    name: string;
    createdDate: Date;
    modifiedDate: Date;
}

export interface IRepository<T extends BaseModel> {
    getAll(): T[];
    get(id: number): T;
    insert(model: T): void;
    update(model: T): void;
    delete(id: number): void;
}

export interface IContext<T> {
    set(): T[];
    saveChanges(): void;
}

export class Repository<T extends BaseModel> implements IRepository<T> {
    private UNDEFINED_ERROR: string = 'model is undefined';
    private context: IContext<T>;
    private dbSet: T[];

    constructor(context: IContext<T>) {
        this.context = context;
        this.dbSet = context.set();
    }

    getAll(): T[] {
        return this.dbSet;
    }

    get(id: number): T {
        return this.dbSet.find(model => model.id === id);
    }

    insert(model: T): void {
        if (!model) {
            throw new Error(this.UNDEFINED_ERROR);
        }
        this.dbSet.push(model);
        this.context.saveChanges();
    }

    update(model: T): void {
        if (!model) {
            throw new Error(this.UNDEFINED_ERROR);
        }
        let storedModel = this.dbSet.find(i => i.id === model.id);

        if (storedModel) { // update
            for (let prop in model) {
                if (storedModel.hasOwnProperty(prop)) {
                    storedModel[prop] = model[prop];
                }
            }
            storedModel.modifiedDate = new Date();
            this.context.saveChanges();
        }
    }

    delete(id: number): void {
        let idx = this.dbSet.findIndex(model => model.id === id);
        if (idx === -1) {
            throw new Error(this.UNDEFINED_ERROR);
        }
        this.dbSet.splice(idx, 1);
        this.context.saveChanges();
    }
}
