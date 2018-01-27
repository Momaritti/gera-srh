import { Component, OnInit, NgZone } from '@angular/core';
// import { PouchDBService } from './pouchdb.service';
// import { PouchDb } from 'pouchdb'; // not here
// import { RouterModule, Routes } from '@angular/router';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
// hier dann service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2', [
        style({ height: '!'}), // setze höhe auf höhe beim ende der animaiton
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0'}))])
        ])
      ]),
      transition('2 => 1', [
        style({ height: '!'}), // setze höhe auf höhe beim ende der animaiton
        query(':enter', style( { transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0%'}))])
        ])
      ]),
      transition('1 => 3', [
        style({ height: '!'}), // setze höhe auf höhe beim ende der animaiton
        query(':enter', style( { transform: 'translateY(100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(-100%'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(0%'}))])
        ])
      ]),
      transition('3 => 1', [
        style({ height: '!'}), // setze höhe auf höhe beim ende der animaiton
        query(':enter', style( { transform: 'translateY(-100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(100%'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(0%'}))])
        ])
      ]),
      transition('2 => 3', [
        style({ height: '!'}), // setze höhe auf höhe beim ende der animaiton
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(100%'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(0%'}))])
        ])
      ]),
      transition('3 => 2', [
        style({ height: '!'}), // setze höhe auf höhe beim ende der animaiton
        query(':enter', style( { transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(-100%'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(0%'}))])
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit {


  // tiefenerkennung für router animations
  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
  public ngOnInit() {
  }

  public insert() {
  }

}
