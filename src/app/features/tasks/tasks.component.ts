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

    onEdit(model: Task): void {
        this.edit(model, null);
    }

    onDelete(model: Task): void {
        this.delete(model, null);
    }

}
