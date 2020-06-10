import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-principal-owners',
  templateUrl: './principal-owners.component.html',
  styleUrls: ['./principal-owners.component.scss']
})
export class PrincipalOwnersComponent implements OnInit {

  @Input()
  formGroup: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
