import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-accounts-payable-contact',
  templateUrl: './accounts-payable-contact.component.html',
  styleUrls: ['./accounts-payable-contact.component.scss']
})
export class AccountsPayableContactComponent implements OnInit {

  @Input()
  formGroup: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
