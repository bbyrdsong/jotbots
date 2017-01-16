import { Injectable } from '@angular/core';
import { Repository } from './../../shared/repository-pattern';
import { QuickNote } from './quick-note';
import { QuickNotesContext } from './quick-notes.context';

@Injectable()
export class QuickNoteRepository extends Repository<QuickNote> {

    /*constructor(private context: QuickNotesContext) {
        super(context);
    }*/
}
