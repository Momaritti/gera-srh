import { Http } from '@angular/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';

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
  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
  public insert() {
  }
}
