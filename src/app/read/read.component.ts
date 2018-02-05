import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.sass']
})
export class ReadComponent implements OnInit {
  results;
  id: any;
  constructor(private http: HttpClient,
              private router: Router ) { }
  ngOnInit(): void {
    this.http.get('http://localhost:3000/document').subscribe(
      data => {
        this.results = data;
      }
    );
  }
  onSelect ( text ) {
    this.router.navigate(['/text', text.id]);
  }
}
