import { FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  @Input() checked: boolean = true;
  @Input() inputFormControlName: FormControl = new FormControl(true, Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: any) {
    console.log('🚀 ~ ToggleComponent ~ onInput ~ value', value.checked);
  }

}
