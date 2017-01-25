import { Injectable } from '@angular/core';
import { Repository } from './../../lib/repository-pattern';
import { Directory } from './directory';

@Injectable()
export class DirectoryRepository extends Repository<Directory> { }
