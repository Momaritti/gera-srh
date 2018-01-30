import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonService } from '../services/json.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass'],
  template: `
    <strong>Test Items</strong>
    <p>List of items</p>
      <ul>
      <li *ngFor="let item of items | async">
        <span>
            {{item.title.$t}}
        </span>
      </li>
    </ul>
    `
})
export class TestComponent {
  data;
  results = '';
  constructor(private http: HttpClient) {
    /*
    this.http.get('localhost:3000/items')
      .subscribe(res => this.data = res.json());
    */
  }
  ngOnInit(): void {
    this.http.get('http://localhost:3000/items').subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
/*
export class TestComponent implements OnInit {
  items: Observable<AnimalTestComponent[]>;
  constructor(private jsonService: JsonService) {}
  ngOnInit() {
    this.items = this.jsonService.getItems('item', 'test');
  }

}
*/
