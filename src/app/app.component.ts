import { Component, OnInit, NgZone } from '@angular/core';
// import { PouchDBService } from './pouchdb.service';
// import { PouchDb } from 'pouchdb'; // not here
// import { DataService } from './data.service'; // TODO
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
    <p [@myAwesomeAnimation]='state' (click)="animateMe()">I will grow</p>
  `,
  styles: [`
    p { color: black; width: 200px; background: lightblue; margin: 100px auto; text-align: center; padding: 20px; font-size: 1.5rem;}
  `],
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.sass'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms ease-in')),
    ]),
  ]
})

export class AppComponent {
  state: string = 'small';
  // public people: Array<any>;
  // public form: any;
  constructor() {

  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
  /*public constructor(private database: PouchDBService, private zone: NgZone) {
    this.people = [];
    this.form = {
      'username': '',
      'firstname': '',
      'lastname': ''
    };
  }*/

  /*
  public ngOnInit() {
    this.database.sync('http://localhost:3333/db');
    this.database.getChangeListener().subscribe(data => {
      for (let i = 0; i < data.change.docs.length; i++) {
        this.zone.run(() => {
          this.people.push(data.change.docs[i]);
        });
      }
    });
    this.database.fetch().then(result => {
      this.people = [];
      for (let i = 0; i < result.rows.length; i++) {
        this.people.push(result.rows[i].doc);
      }
    }, error => {
      console.error(error);
    });
  }

  public insert() {
    if (this.form.username && this.form.firstname && this.form.lastname) {
      this.database.put(this.form.username, this.form);
      this.form = {
        'username': '',
        'firstname': '',
        'lastname': ''
      };
    }
  }
*/
