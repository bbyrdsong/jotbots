import { QuickNote } from './../features/quicknotes/quick-note';
import { IContext, IRepository } from './repository-pattern';
import { Injectable } from '@angular/core';

export class BaseModel {
    id: number;
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

export interface IContext {
    set(tableName: string): any[];
    saveChanges(): void;
}

export interface IUnitOfWork {
    context: IContext;
    quicknotes: IRepository<QuickNote>;
}

export class Repository<T extends BaseModel> implements IRepository<T> {
    private UNDEFINED_ERROR: string = 'model is undefined';
    private context: IContext;
    private dbSet: T[];

    constructor(context: IContext, tableName: string) {
        this.context = context;
        this.dbSet = context.set(tableName);
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
        model.createdDate = new Date();
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
