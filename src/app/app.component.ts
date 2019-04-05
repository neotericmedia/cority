import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cority';
  hidden = false;

  data = [
    { status: 'new', icon: 'icon', text: 'asdfasdfasdf' },
    { status: 'not', icon: 'icon', text: 'asdfasdfasdf' },
    { status: 'not', icon: 'icon', text: 'asdfasdfasdfasdf' }
  ];

  ngOnInit() {
    this.hidden = true;
  }

  collapse() {
    // hidden ? true : false
    console.log('collapse');
  }

  downloadListItem() {
    console.log('download');
  }

  deleteListItem() {
    console.log('delete');
  }
}
