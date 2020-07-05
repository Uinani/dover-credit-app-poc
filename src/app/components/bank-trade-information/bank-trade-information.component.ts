import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bank-trade-information',
  templateUrl: './bank-trade-information.component.html',
  styleUrls: ['./bank-trade-information.component.scss']
})
export class BankTradeInformationComponent implements OnInit {

  @Input()
  formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
