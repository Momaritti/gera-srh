import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.sass']
})
export class WatchComponent implements OnInit {
  public apiHost = './assets/data/video.json';
  results;
  id: any; // um id der child component über den router mit zu geben
  constructor (private http: HttpClient,
               private router: Router) {}
  ngOnInit(): void {
      //    this.http.get('http://localhost:3000/video').subscribe(
          this.http.get(this.apiHost).subscribe(
      data => {
        this.results = data;
      }
    );
  }
  onSelect ( video ) {
    this.router.navigate(['/video', video.id]);
  }
}
