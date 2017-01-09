import { LocalDbService } from './../../services/local-db.service';
import { QuickNote } from './quick-note';
import { IDataService } from './../../shared/idataservice';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'quick-notes',
    templateUrl: './quick-notes.component.html'
})
export class QuickNotesComponent implements OnInit {
    tableUrl: string = 'quicknotes';
    sectionTitle: string = 'Quick Notes';
    quicknotes: QuickNote[];
    selectedQuickNote: QuickNote;
    showForm: boolean = false;

    constructor(private _db: LocalDbService) { }

    ngOnInit() {
        this.get();
    }

    get(): void {
        this.quicknotes = this._db.get(this.tableUrl);
    }

    save(form: FormGroup): void {
        let quicknote = form.value;
        this.selectedQuickNote.note = quicknote.note;

        console.log(form);

        this._db.save(this.tableUrl, this.selectedQuickNote);

        this.get();
    }

    add(): void {
        this.selectedQuickNote = new QuickNote('');
        this.showForm = true;
    }

    edit(quicknote: QuickNote): void {
        this.selectedQuickNote = quicknote;
    }
}
