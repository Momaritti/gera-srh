import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PouchDBService } from './pouchdb.service';
import { RouterModule, Routes } from '@angular/router';

import { HearComponent } from './hear/hear.component';
import { WatchComponent } from './watch/watch.component';
import { ReadComponent } from './read/read.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// router
const appRoutes: Routes = [
  { path: 'hear', component: HearComponent },
  { path: 'watch/:id',      component: WatchComponent },
  {
    path: 'read',
    component: ReadComponent,
    data: { title: 'Informationen' }
  }, /*
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }, */
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HearComponent,
    WatchComponent,
    ReadComponent,
    PageNotFoundComponent
  ],
  imports: [,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PouchDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
