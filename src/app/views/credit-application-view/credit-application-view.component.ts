import { Component, OnInit } from '@angular/core';

import { creditApplicationFormGroup } from '../../common/credit-application.form';
import { CreditApplicationService } from 'src/app/services/credit-application.service';

@Component({
  selector: 'app-credit-application-view',
  templateUrl: './credit-application-view.component.html',
  styleUrls: ['./credit-application-view.component.scss']
})
export class CreditApplicationViewComponent implements OnInit {

  formGroup = creditApplicationFormGroup;
  isLinear = false;

  constructor(private service: CreditApplicationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const data = this.formGroup.getRawValue();
    this.service.postCreditApplication(data).subscribe();
  }

}
