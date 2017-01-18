import { Task } from './task';
import { Injectable } from '@angular/core';
import { Repository } from './../../lib/repository-pattern';

@Injectable()
export class TaskRepository extends Repository<Task> { }
