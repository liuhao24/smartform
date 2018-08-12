import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html'
  // styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {

  constructor() { }

  @HostBinding('class.app-nav') layoutClass = true;

  ngOnInit() {
  }

}
