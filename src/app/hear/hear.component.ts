import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hear',
  templateUrl: './hear.component.html',
  styleUrls: ['./hear.component.sass'],
})
export class HearComponent implements OnInit {
  results;
  audios = [
    {title: 'Podcast: Das Herz und unser Blut', path: '../../assets/herz.mp3'},
  ];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/audio').subscribe(
      data => {
        // console.log(data);
        this.results = data;
      }
    );
  }
}


