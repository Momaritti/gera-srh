import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
// import { URLSearchParams } from '@angular/http';

@Component({
  // selector: 'app-video-item' // braucht man gar nich ?,
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.sass']
})
export class VideoItemComponent implements OnInit {
  public apiHost = './assets/data/video.json';
  results;
  public itemId;
  constructor ( private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.itemId = id;
    this.http.get(this.apiHost).subscribe(
      /*data => {
        this.results = data;
      }*/
      data => {
      this.results = data[id];
    });
  }
}

/*
export class VideoItemComponent implements OnInit {
  public ItemId;
  // results;
  item;
  id: string;
  // title: any;
  // path: any;
  // sub: any;
  // item = data[0];
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit() {
    this.http.get('http://localhost:3000/video').subscribe(
      data => {
        // this.results = data;
        this.item = data[this.id];
      }
    );
    let id = this.route.snapshot.params['id'];
    this.ItemId = id;
    // this.jsonService.cast.subscribe(title => this.title = title);
    // this.jsonService.cast2.subscribe(path => this.path = path);
  }

}
*/
