import { Injectable } from '@angular/core';
import { Repository } from './../../lib/repository-pattern';
import { QuickNote } from './quick-note';

@Injectable()
export class QuickNoteRepository extends Repository<QuickNote> { }
