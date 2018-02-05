import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hear',
  templateUrl: './hear.component.html',
  styleUrls: ['./hear.component.sass'],
})
export class HearComponent implements OnInit {
  results;
  id: any;
  constructor(private http: HttpClient,
              private router: Router) {}
  ngOnInit(): void {
    this.http.get('http://localhost:3000/audio').subscribe(
      data => {
        // console.log(data);
        this.results = data;
      }
    );
  }
  onSelect ( audio ) {
    this.router.navigate(['/audio', audio.id]);
  }
}


