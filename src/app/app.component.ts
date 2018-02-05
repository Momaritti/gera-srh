import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
// import {Input, Input} from '@angular/compiler/src/core';

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
      ]),
      transition('1 => 4', [
        style({ height: '!'}), // setze höhe auf höhe beim ende der animaiton
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0%'}))])
        ])
      ]),
      transition('4 => 1', [
        style({ height: '!'}), // setze höhe auf höhe beim ende der animaiton
        query(':enter', style( { transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0%'}))])
        ])
      ]),
      transition('4 => 2', [
        style({ height: '!'}), // setze höhe auf höhe beim ende der animaiton
        query(':enter', style( { transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0%'}))])
        ])
      ]),
      transition('2 => 4', [
        style({ height: '!'}), // setze höhe auf höhe beim ende der animaiton
        query(':enter', style( { transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0%'}))])
        ])
      ]),
      transition('4 => 3', [
        style({ height: '!'}), // setze höhe auf höhe beim ende der animaiton
        query(':enter', style( { transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0%'}))])
        ])
      ]),
      transition('3 => 4', [
        style({ height: '!'}), // setze höhe auf höhe beim ende der animaiton
        query(':enter', style( { transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0%'}))])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  // data;
  // results;
  // results: any[] = this.results;
  // tiefenerkennung für router animations
  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

  // constructor(private http: HttpClient) {
  // }

  // public ngOnInit() {}
  /*ngOnInit(): void {
    this.http.get('http://localhost:3000/items').subscribe(
      data => {
        // console.log(data);
         this.results = data;
      }
    );
  }*/
  // @Input() name: string;
  public insert() {
  }
}
