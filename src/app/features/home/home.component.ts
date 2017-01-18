import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <h1>{{sectionTitle}}</h1>
    `
})
export class HomeComponent extends OnInit {
    sectionTitle: string;

    ngOnInit(): void {
        this.sectionTitle = 'Jot Bots';
    }
}
