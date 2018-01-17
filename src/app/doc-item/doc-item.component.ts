import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-doc-item',
  templateUrl: './doc-item.component.html',
  styleUrls: ['./doc-item.component.sass']
})
export class DocItemComponent implements OnInit {
  title: any;
  text: any;
  sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.title = params['title'];
      this.text = params['text'];
    });
    this.text = 'Lorem Ipsum Dolorem sin amnet...'; // hardcoded for now
  }

}
