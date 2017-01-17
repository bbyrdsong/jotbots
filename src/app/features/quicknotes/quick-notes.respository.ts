import { Injectable } from '@angular/core';
import { Repository } from './../../shared/repository-pattern';
import { QuickNote } from './quick-note';

@Injectable()
export class QuickNoteRepository extends Repository<QuickNote> { }
