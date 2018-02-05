import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute} from '@angular/router';
// import {JsonService} from '../services/json.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.sass']
})
export class VideoItemComponent implements OnInit {
  // results;
  item;

  // title: any;
  // path: any;
  // sub: any;
  // item = data[0];
  constructor (private http: HttpClient ) {}
  // constructor(private route: ActivatedRoute) { }
  // constructor(private jsonService: JsonService) { }
  ngOnInit(): void {
    // TODO change id
    this.http.get('http://localhost:3000/video').subscribe(
      data => {
        // this.results = data;
        this.item = data[0];
      }
    );
    // this.jsonService.cast.subscribe(title => this.title = title);
    // this.jsonService.cast2.subscribe(path => this.path = path);
  }

}
