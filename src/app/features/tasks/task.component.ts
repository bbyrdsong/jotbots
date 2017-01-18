import { Task } from './task';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'jb-task',
    template: `
    <div>
        <h3>{{task.name}}</h3>
        <p>Due date: {{task.dueDate | date: 'MM/dd/yyyy HH:mm'}}</p>
        <p>Description: {{task.description}}</p>
        <p>{{report}}</p>
    </div>
    `
})
export class TaskComponent implements OnInit, OnDestroy {
    @Input() task: Task;
    ticks: number = 0;
    report: string;
    private timer;
    private period: number = 1000;
    private sub: Subscription;
    private startingTime: number;
    private timeDiff: number;

    ngOnInit(): void {
        let dt1 = new Date(this.task.dueDate);
        let dt2 = new Date();
        let utc1 = Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate());
        let utc2 = Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate());

        this.timeDiff = utc1 - utc2;
        this.startingTime = new Date(this.task.dueDate).getTime() / 1000;
        this.timer = Observable.timer(0, this.period);
        this.sub = this.timer.subscribe(tick => this.report = this.convertToCountdown(this.timeDiff - (tick * 1000)));
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    convertToCountdown(ms: number): string {
        let baseDay = 24 * 60 * 60 * 1000, // 24hours * 60minutes * 60seconds * 1000milliseconds
            baseHour = 60 * 60 * 1000, // 60minutes * 60seconds * 1000milliseconds
            days = Math.floor(ms / baseDay),
            hours = Math.round((ms - days * baseDay) / baseHour),
            minutes = Math.round((ms - days * baseDay - hours * baseHour) / 60000);

        return [days, hours, minutes].join(':');
    }
}
