import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  @HostBinding('class.app-main') layoutClass = true;

  ngOnInit() {
    this.router.navigate(['form','list']);
  }

}
