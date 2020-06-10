import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trade-reference',
  templateUrl: './trade-reference.component.html',
  styleUrls: ['./trade-reference.component.scss']
})
export class TradeReferenceComponent implements OnInit {

  @Input()
  formGroup: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
