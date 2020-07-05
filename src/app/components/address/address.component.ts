import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { States } from '../../common/states.constants';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  States = States;
  
  @Input()
  formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
