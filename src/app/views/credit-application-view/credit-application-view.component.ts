import { Component, OnInit } from '@angular/core';

import { creditApplicationFormGroup } from '../../common/credit-application.form';

@Component({
  selector: 'app-credit-application-view',
  templateUrl: './credit-application-view.component.html',
  styleUrls: ['./credit-application-view.component.scss']
})
export class CreditApplicationViewComponent implements OnInit {

  formGroup = creditApplicationFormGroup;
  isLinear = false;

  constructor() { }

  ngOnInit(): void {
  }

}
