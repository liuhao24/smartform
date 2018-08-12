import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  constructor() { }

  @HostBinding('class.app-main') layoutClass = true;

  ngOnInit() {
  }

}
