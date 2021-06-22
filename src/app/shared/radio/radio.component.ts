import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms'//interface que promove a cominicação com diretivas de formulário, ngModel e ReactForms.

import {RadioOption} from './radio-option.model'

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value: any

  onChange: any


  constructor() {}

  ngOnInit() {}


  setValue(value: any){
    this.value = value
    this.onChange(this.value)
  }

  /** metoods de -> ControlValueAccessor
   * Write a new value to the element.
   * Este metodo é chamado pelas diretivas qdo elas querem passar um valor <-!!
   */
  writeValue(obj: any): void {
    this.value = obj
  }

  /**
   * Set the function to be called when the control receives a change event.
   * É passada uma função e esta deve ser chamada sempre que o valor interno mudar!!!!!
   */
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: any): void {}
  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void {}

}
