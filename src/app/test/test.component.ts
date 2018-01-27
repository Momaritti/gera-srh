import { Component, OnInit } from '@angular/core';
import { JsonService } from '../services/json.service';
import { Observable } from 'rxjs/Observable';

import { AnimalTestComponent } from '../animal-test/animal-test.component';

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
export class TestComponent implements OnInit {
  items: Observable<AnimalTestComponent[]>;
  constructor(private jsonService: JsonService) {}
  ngOnInit() {
    this.items = this.jsonService.getItems('item', 'test');
  }

}
