import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  templateUrl: './doc-item.component.html',
  styleUrls: ['./doc-item.component.sass']
})
export class DocItemComponent implements OnInit {
  public apiHost = './assets/data/document.json';
  results;
  public itemId;
  constructor(private route: ActivatedRoute,
              private  http: HttpClient ) {}
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.itemId = id;
    this.http.get(this.apiHost).subscribe(
    data => {
      this.results = data[id];
    }
    );
  }
}
