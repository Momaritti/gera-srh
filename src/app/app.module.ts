import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HearComponent } from './hear/hear.component';
import { WatchComponent } from './watch/watch.component';
import { ReadComponent } from './read/read.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';

// router configuration = navigation
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'watch', component: WatchComponent},
  { path: 'user', children: [
      { path: 'list', component: UserListComponent, children: [
          { path: 'detail/:name', component: UserComponent }
        ]}
    ]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HearComponent,
    WatchComponent,
    ReadComponent,
    UserListComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    // PouchDBService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
