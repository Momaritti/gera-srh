import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  // user = 'Anna';
  results;
  public userId;
  constructor( private route: ActivatedRoute,
               private http: HttpClient ) {}
  ngOnInit() {
    let id = 1; // this.route.snapshot.params['id'];
    this.userId = id;
    this.http.get('http://localhost:3000/user/' + id ).subscribe(
      data => {
        this.results = data;
      }
    );
  }

}
