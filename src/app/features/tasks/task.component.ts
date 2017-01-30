import { Task } from './task';
import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'jb-task',
    template: `
    <div [class]="expired ? 'expired' : ''">
        <h3>{{task.name}}</h3>
        <p>Due date: {{task.dueDate | date: 'MM/dd/yyyy HH:mm'}}</p>
        <p>Description: {{task.description}}</p>
        <p>{{report}}</p>
        <p>
            <a href="#" (click)="edit(task, $event)">edit</a> |
            <a href="#" (click)="delete(task, $event)">delete</a>
        </p>
    </div>
    `,
    styles: [
        'div { border: 1px solid black; width:350px; margin-top:10px;padding:10px;}',
        'h3 { margin-top: 0; border-bottom: 1px solid gray; }',
        '.expired {border: 1px solid red; background-color:pink;}'
    ]
})
export class TaskComponent implements OnInit, OnDestroy {
    @Input() task: Task;
    @Output() onEdit = new EventEmitter<Task>();
    @Output() onDelete = new EventEmitter<Task>();

    ticks: number = 0;
    report: string;
    private timer;
    private period: number = 1000;
    private sub: Subscription;
    private timeDiff: number;
    expired: boolean = false;

    ngOnInit(): void {
        let dt1 = new Date(this.task.dueDate),
            dt2 = new Date();
        this.timeDiff = dt1.getTime() - dt2.getTime();

        this.timer = Observable.timer(0, this.period);
        this.sub = this.timer.subscribe(tick => this.report = this.convertToCountdown(this.timeDiff - (tick * 1000)));
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    private convertToCountdown(ms: number): string {
        if (ms < 0) {
            this.expired = true;
            return 'due in: time expired';
        }

        this.expired = false;
        let seconds = Math.floor((ms / 1000) % 60),
            minutes = Math.floor((ms / 1000 / 60) % 60),
            hours = Math.floor((ms / (1000 * 60 * 60)) % 24),
            days = Math.floor(ms / (1000 * 60 * 60 * 24));

        return 'due in: ' + days.toString() + ' days: ' +
            hours.toString() + ' hours: ' +
            minutes.toString() + ' minutes: ' +
            seconds.toString() + ' seconds';
    }

    edit(model: Task, e: Event): void {
        e.preventDefault();
        this.onEdit.emit(model);
        console.log('child', model);
    }

    delete(model: Task, e: Event): void {
        e.preventDefault();
        this.onDelete.emit(model);
        console.log('child', model);
    }
}
