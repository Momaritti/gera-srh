import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-audio-item',
  templateUrl: './audio-item.component.html',
  styleUrls: ['./audio-item.component.sass']
})
export class AudioItemComponent implements OnInit {
  title: any;
  path: any;
  sub: any;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.title = params['title'];
      this.path = params['path'];
    });
    this.path = '../../assets/herz.mp3'; // hardcoded for now
  }

}
