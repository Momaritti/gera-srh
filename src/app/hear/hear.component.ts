import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hear',
  templateUrl: './hear.component.html',
  styleUrls: ['./hear.component.sass']
})
export class HearComponent implements OnInit {
audios = [
    { title: 'Podcast: Das Herz und unser Blut', path: '../../assets/herz.mp3' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
