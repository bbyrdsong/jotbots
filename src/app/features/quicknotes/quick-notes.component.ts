import { BaseComponent } from './../../lib/base-component';
import { LocalStorageUnitOfWork } from './../../services/unit-of-work.service';
import { QuickNote } from './quick-note';
import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'quick-notes',
    templateUrl: './quick-notes.component.html',
    styleUrls: ['./quick-notes.component.css']
})
export class QuickNotesComponent extends BaseComponent<QuickNote>  {

    constructor(uow: LocalStorageUnitOfWork) {
        super(uow, 'quicknotes', 'Quick Notes');
    }

}
