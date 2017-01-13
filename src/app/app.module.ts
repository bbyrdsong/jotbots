import { FilterPipe } from './shared/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { LocalDbService } from './services/local-db.service';

import { AppComponent } from './app.component';
import { QuickNotesComponent } from './features/quicknotes/quick-notes.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'quicknotes',
        component: QuickNotesComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    QuickNotesComponent,
    FilterPipe
  ],
  providers: [
    LocalDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
