import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CompanyTypes, TaxTypes } from '../../common/credit-application.form';

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.scss']
})
export class CompanyInformationComponent implements OnInit {

  CompanyTypes = CompanyTypes;
  TaxTypes = TaxTypes;

  @Input()
  formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
