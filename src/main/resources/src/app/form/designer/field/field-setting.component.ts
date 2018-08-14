import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, Input, Output, EventEmitter, OnChanges, forwardRef } from '@angular/core';
import { FieldInfo } from '../../../../shared/entity/form';
import { fieldItemsComponentMap } from './field-map';



@Component({
  selector: 'form-field-setting',
  templateUrl: './field-setting.component.html',
  providers: [
  ]
})
export class FormFieldSettingComponent implements OnInit {


  @Input() field: FieldInfo;

  // public field: FieldInfo;

  // @Output() changeField = new EventEmitter();

  @Output() changeField: EventEmitter<any> = new EventEmitter<any>();

  private componentRef: any;

  private _innerValue: any = '';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  emitValueChange(value: any) {
    this.field = value;
    this.changeField.emit(value);
  }

  getFieldValue(){
    return this.field;
  }

  ngOnInit() {
    this.viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(fieldItemsComponentMap[this.field.type]['setting']);
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    (this.componentRef.instance as any).field = this.field;
    (this.componentRef.instance as any).changeValue = this.emitValueChange.bind(this);
  }
}
