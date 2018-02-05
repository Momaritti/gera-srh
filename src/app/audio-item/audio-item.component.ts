import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  // selector: 'app-audio-item',
  templateUrl: './audio-item.component.html',
  styleUrls: ['./audio-item.component.sass']
})
export class AudioItemComponent implements OnInit {
  results;
  public itemId;
  constructor( private route: ActivatedRoute,
               private http: HttpClient ) {}
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.itemId = id;
    this.http.get('http://localhost:3000/audio/' + id ).subscribe(
      data => {
        this.results = data;
      }
    );
  }
}
