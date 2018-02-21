import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HearComponent } from './hear/hear.component';
import { WatchComponent } from './watch/watch.component';
import { ReadComponent } from './read/read.component';
//import { UserListComponent } from './user-list/user-list.component';
//import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { VideoItemComponent } from './video-item/video-item.component';
import { DocItemComponent } from './doc-item/doc-item.component';
import { AudioItemComponent } from './audio-item/audio-item.component';

// router configuration = navigation
    // depth ist für die routing animations
const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'home', depth: 1 }},
    { path: 'video', component: WatchComponent, data: {depth: 3}},
    { path: 'video/:id', component: VideoItemComponent },
    { path: 'audio', component: HearComponent, data: {depth: 2}},
    { path: 'audio/:id', component: AudioItemComponent },
    { path: 'text', component: ReadComponent, data: {depth: 4}},
    { path: 'text/:id', component: DocItemComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full', data: { title: 'start', depth: 0 }},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HearComponent,
    WatchComponent,
    ReadComponent,
      // UserListComponent,
    HomeComponent,
      // UserComponent,
    VideoItemComponent,
    DocItemComponent,
    AudioItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
    bootstrap: [AppComponent]
})
export class AppModule {}
export const routingComponents = [VideoItemComponent, WatchComponent];
