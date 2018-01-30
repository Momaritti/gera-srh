import {Injectable, OnInit} from '@angular/core';
// import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class JsonService implements OnInit {
  results;
  private title = new BehaviorSubject<string>('testisweorking');
  private path = new BehaviorSubject<string>('../assets/bird.mp4');
  cast = this.title.asObservable();
  cast2 = this.path.asObservable();
    constructor(private http: HttpClient) { }
    ngOnInit(): void {
      this.http.get('http://localhost:3000/').subscribe(
        data => {
          this.results = data;
          console.log(data);
        }
      );
    }
}

