import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
  users = [
    { name: 'Henry', alter: '22' },
    { name: 'Anna', alter: '11' },
    { name: 'Admin', alter: '999' }
  ];

  // constructor(private route: ActivatedRoute) { }
constructor() { }
  ngOnInit() {
  }

}
