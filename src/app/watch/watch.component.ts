import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.sass']
})
export class WatchComponent implements OnInit {
  results;
videos = [
    { title: 'Der Specht', path: '../../assets/bird.mp4' },
  ];
  constructor (private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/video').subscribe(
      data => {
        this.results = data;
      }
    );
  }

}
