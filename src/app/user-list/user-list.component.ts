import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
  users = [
    { name: 'Henry'},
    { name: 'Anna'},
    { name: 'Admin'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
