import { Component, OnInit, HostBinding, Input, ViewChild, ElementRef } from '@angular/core';
import { FieldInfo, FormInfo } from '../../project/entity/form-info';
import { SortablejsOptions } from 'angular-sortablejs/dist';
import { FormDesignerService } from './form-designer.service';
import { fields } from './field.constant';
import { FormFieldSettingComponent } from './field/field-setting.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-form-designer',
  templateUrl: './form-designer.component.html'
})
export class FormDesignerComponent implements OnInit {


  @HostBinding('class.form-designer-element') layoutClass = true;

  @Input() entity: FormInfo;

  @ViewChild(FormFieldSettingComponent) fieldSetting: FormFieldSettingComponent; //子组件实例引用

  public fields = [];

  public properties: FieldInfo[] = [];

  public selectedValue: any;

  public radioValue: any;

  public date: any;

  public fieldSortOptions: SortablejsOptions = {
    group: 'designer'
  };

  public propertySortOptions: SortablejsOptions = {
    group: 'designer'
  };

  public form: FormInfo = {
    sid: '',
    name: '',
    description: '',
    fields: []
  };

  public isForm = true;
  
  constructor(
    private formDesignerService: FormDesignerService
  ) {
  }

  cloneFieldItem = (item) => {
    return item;
  }

  ngOnInit() {
    this.fields = fields;
    if (this.entity) {
      this.form = this.entity;
      this.properties = this.entity.fields;
    }
  }


  selectForm() {
    this.isForm = true;
  }


  changeField(event) {
    // const _index = this.properties.findIndex(((n)=>{
    //   return n.id = event.id;
    // }));
    // this.properties.splice(_index,1,event);
  }
  saveForm() {
    this.properties.forEach((n, index) => {
      n.orderNo = index + 1;
    });
    this.form.fields = this.properties;
    const _back = {};
    Object.assign(_back, this.form);
    this.clear();
    return _back;
  }

  clear() {
    this.form = {
      sid: '',
      name: '',
      description: '',
      fields: []
    }
  }
}
