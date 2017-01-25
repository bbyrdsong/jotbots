import { BaseComponent } from './../../lib/base-component';
import { LocalStorageUnitOfWork } from './../../services/unit-of-work.service';
import { Directory } from './directory';
import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'directory',
    templateUrl: './directory.component.html'
})
export class DirectoryComponent extends BaseComponent<Directory>  {

    constructor(uow: LocalStorageUnitOfWork) {
        super(uow, 'directory', 'Directory');
    }

}
