import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.sass']
})
export class ReadComponent implements OnInit {
docs = [
    { title: 'Infos zum SRH WKKH Gera', text: 'Lorem Ipsum.' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
