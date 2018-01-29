import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.sass']
})
export class ReadComponent implements OnInit {
  results;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('http://localhost:3000/document').subscribe(
      data => {
        this.results = data;
      }
    );
  }

}
