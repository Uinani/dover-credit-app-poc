import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

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
  showOverrideEmail = false;

  constructor(private service: CreditApplicationService) { }

  ngOnInit(): void {
  }

  onOverrideEmail($event: MatCheckboxChange): void {
    this.showOverrideEmail = $event.checked;
    if (!this.showOverrideEmail) {
      this.formGroup.get('overrideEmail').setValue('');
    }
  }

  onSubmit(): void {
    const data = this.formGroup.getRawValue();
    this.service.postCreditApplication(data).subscribe();
  }

}
