import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  name: any;
  alter: any;
  sub: any;
  results;
  constructor (private http: HttpClient) { }
  // constructor(private route: ActivatedRoute) {}
/*
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
      this.alter = params['alter'];
    });
  }*/

  ngOnInit(): void {
    this.http.get('http://localhost:3000/userdb').subscribe(
      data => {
        this.results = data;
      }
    );
  }
}
