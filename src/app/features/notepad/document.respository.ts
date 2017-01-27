import { Document } from './document';
import { Injectable } from '@angular/core';
import { Repository } from './../../lib/repository-pattern';

@Injectable()
export class DocumentRepository extends Repository<Document> { }
