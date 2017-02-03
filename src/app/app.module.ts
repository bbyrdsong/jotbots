import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { JotBotLocalStorageDb } from './services/local-db-context.service';
import { LocalStorageUnitOfWork } from './services/unit-of-work.service';
import { FilterPipe } from './shared/filter.pipe';
import { SortObjArrByPipe } from './shared/sortObjArrBy.pipe';

import { AppComponent } from './app.component';
import { QuickNotesComponent } from './features/quicknotes/quick-notes.component';
import { TaskComponent } from './features/tasks/task.component';
import { HomeComponent } from './features/home/home.component';
import { TasksComponent } from './features/tasks/tasks.component';
import { DirectoryComponent } from './features/directory/directory.component';
import { DocumentComponent } from './features/notepad/document.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'quicknotes', component: QuickNotesComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'directory', component: DirectoryComponent },
      { path: 'notepad', component: DocumentComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    QuickNotesComponent,
    TasksComponent,
    TaskComponent,
    HomeComponent,
    DirectoryComponent,
    DocumentComponent,
    FilterPipe,
    SortObjArrByPipe
  ],
  providers: [
    JotBotLocalStorageDb,
    LocalStorageUnitOfWork
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
