import { SortObjArrByPipe } from './../../shared/sortObjArrBy.pipe';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from './../../lib/base-component';
import { LocalStorageUnitOfWork } from './../../services/unit-of-work.service';
import { Task } from './task';
import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})
export class TasksComponent extends BaseComponent<Task>  {

    constructor(uow: LocalStorageUnitOfWork) {
        super(uow, 'tasks', 'Tasks');
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.getSorted('dueDate');
    }

    getSorted(sortBy): void {
        this.dbSet = this.uow[this.tableName].getAll();

        let sort = new SortObjArrByPipe();
        sort.transform(this.dbSet, 'dueDate');
    }

    save(form: FormGroup, event: Event): void {
        super.save(form, event);

        this.getSorted('dueDate');
    }

    onEdit(model: Task): void {
        this.edit(model, null);
    }

    onDelete(model: Task): void {
        this.delete(model, null);
    }

}
