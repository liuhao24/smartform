import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, Input} from '@angular/core';
import { FieldInfo } from '../../../../shared/entity/form';
import { fieldItemsComponentMap } from './field-map';

@Component({
  selector: 'form-field-design',
  templateUrl: './field-design.component.html'
})
export class FormFieldDesignComponent implements OnInit{

  @Input() field: FieldInfo;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
    this.viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(fieldItemsComponentMap[this.field.type]['design']);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as any).field = this.field;
  }

}
