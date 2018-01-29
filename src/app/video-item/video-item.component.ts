import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {JsonService} from '../services/json.service';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.sass']
})
export class VideoItemComponent implements OnInit {
  // title;
  title: any;
  path: any;
  // sub: any;

  // constructor(private route: ActivatedRoute) { }
  constructor(private jsonService: JsonService) { }
  ngOnInit() {
    this.jsonService.cast.subscribe(title => this.title = title);
    this.jsonService.cast2.subscribe(path => this.path = path);

  }

}
