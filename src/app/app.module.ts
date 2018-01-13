import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PouchDBService } from './pouchdb.service';

import { HearComponent } from './hear/hear.component';
import { WatchComponent } from './watch/watch.component';
import { ReadComponent } from './read/read.component';
import { SchwummerComponent } from './schwummer/schwummer.component';


@NgModule({
  declarations: [
    AppComponent,
    HearComponent,
    WatchComponent,
    ReadComponent,
    SchwummerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    schwummer
  ],
  providers: [PouchDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
