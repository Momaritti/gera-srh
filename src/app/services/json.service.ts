import { Injectable} from '@angular/core';
import { URLSearchParams} from '@angular/http';
import {Http} from '@angular/http';
import { AnimalTestComponent } from '../animal-test/animal-test.component';

@Injectable()
export class JsonService {

  data;

  //constructor(private http: Http) { }

  constructor(private http:Http) {
    this.http.get('http://localhost:3000/items')
      .subscribe(res => this.data = res.json());
  }
  getItems (item: string, location: string) {
    this.http.get('http://localhost:3000/items').subscribe(
      data => {
        console.log(data);
        return this.data;
      }
    );
  }

}

/*
import { Injectable } from '@angular/core';
// import { Jsonp, URLSearchParams } from '@angular/http';
import { AnimalTestComponent } from '../animal-test/animal-test.component';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonService {
  constructor(private jsonp: Jsonp) { }

  private dbUrl = 'http://localhost:3000/items';

  getItems(item : string,  location: string) {
    const endPoint = 'end'; // was machts?
    let params = new URLSearchParams();
    // params.set('key', '555f8155d42d5c9be4705beaf4cce089');
    params.set('location', location);
    params.set('item', item);
    params.set('format', 'json');
    // params.set('callback', 'JSONP_CALLBACK');
     params.set('callback', 'JSONP_CALLBACK');
    // Returns response
    return this.jsonp
      // .get(this.dbUrl + endPoint, { search: params })
      .get(this.dbUrl)
      // .map(response => <AnimalTestComponent[]> response.json().itemfinder.items.item);
      .map(response => <AnimalTestComponent[]> response.json().items.item);
  }
}
*/