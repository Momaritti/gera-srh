import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
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
      data => {
          this.results = data[id]; // item mit der richtigen id aus json laden
    });
  }
}

