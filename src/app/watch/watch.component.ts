import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.sass']
})
export class WatchComponent implements OnInit {
videos = [
    { title: 'Der Specht', path: '../../assets/bird.mp4' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
