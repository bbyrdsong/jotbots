import { LocalDbService } from './../../services/local-db.service';
import { QuickNote } from './quick-note';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'quick-notes',
    templateUrl: './quick-notes.component.html',
    styleUrls: ['./quick-notes.component.css']
})
export class QuickNotesComponent implements OnInit {
    tableUrl: string = 'quicknotes';
    sectionTitle: string = 'Quick Notes';
    quicknotes: QuickNote[];
    model: QuickNote;
    showForm: boolean = false;

    constructor(private _db: LocalDbService) {
        _db.setTable(this.tableUrl);
    }

    ngOnInit() {
        this.get();
    }

    get(): void {
        this.quicknotes = this._db.get();
    }

    save(form: FormGroup, event: Event): void {
        event.preventDefault();
        let quicknote = form.value;
        this.model.description = quicknote.description;

        this._db.save(this.model);

        this.get();
        this.showForm = false;
    }

    add(): void {
        this.model = new QuickNote('', '');
        this.showForm = true;
    }

    edit(quicknote: QuickNote, event: Event): void {
        event.preventDefault();
        this.model = quicknote;
        this.showForm = true;
    }

    delete(quicknote: QuickNote, event: Event): void {
        event.preventDefault();
        this._db.delete(quicknote.id);
        this.get();
    }
}
