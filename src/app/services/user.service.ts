import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  data: any = {}; // create empty variable data for later

  constructor(private http: HttpClient) { }

  listUsers() {
    const apiUrl = 'http://localhost:8888/api/cockpit/';
    const  apiKey = '?token.....';
    // get JSON from API
    return this.http.get(`${apiUrl}listUsers${apiKey}`)
    .toPromise();
  }

}
