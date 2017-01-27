import { Document } from './document';
import { BaseComponent } from './../../lib/base-component';
import { LocalStorageUnitOfWork } from './../../services/unit-of-work.service';
import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'document',
    templateUrl: './document.component.html'
})
export class DocumentComponent extends BaseComponent<Document>  {

    constructor(uow: LocalStorageUnitOfWork) {
        super(uow, 'notepad', 'Notepad');
    }

}
