import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, Input, Output, EventEmitter, OnChanges, forwardRef, SimpleChanges } from '@angular/core';
import { FieldInfo } from '../../../../shared/entity/form';
import { fieldItemsComponentMap } from './field-map';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'form-field-detail',
  templateUrl: './field-detail.component.html',
  providers: [
  ]
})
export class FormFieldDetailComponent implements OnInit {


  @Input() field: FieldInfo;

  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.field.key].valid; }

  // public field: FieldInfo;

  // @Output() changeField = new EventEmitter();

  @Output() changeField: EventEmitter<any> = new EventEmitter<any>();

  private componentRef: any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  emitValueChange(value: any) {
    this.field = value;
    this.changeField.emit(value);
  }

  getFieldValue() {
    return this.field;
  }

  ngOnInit() {
    this.viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(fieldItemsComponentMap[this.field.type]['detail']);
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    (this.componentRef.instance as any).field = this.field;
    (this.componentRef.instance as any).form = this.form;
    (this.componentRef.instance as any).changeValue = this.emitValueChange.bind(this);
  }
}
