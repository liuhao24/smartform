import { Component, OnInit, HostBinding, Input, ViewChild, ElementRef } from '@angular/core';
import { FieldInfo, FormInfo } from '../../project/entity/form-info';
import { SortablejsOptions } from 'angular-sortablejs/dist';
import { FormDesignerService } from './form-designer.service';
import { fields } from './field.constant';
import { FormFieldSettingComponent } from './field/field-setting.component';
import * as _ from 'lodash';
import { FieldBase } from './field/entity/field-base';
import { FieldTextInput } from './field/entity/field-textinput';
import { fieldItemsComponentMap } from './field/field-map';

@Component({
  selector: 'app-form-designer',
  templateUrl: './form-designer.component.html',
})
export class FormDesignerComponent implements OnInit {


  @HostBinding('class.form-designer-element') layoutClass = true;

  @Input() entity: FormInfo;
  @Input() saveAction: Function;
  @Input() cancelAction: Function;

  // public saveAction: Function;

  @ViewChild(FormFieldSettingComponent) fieldSetting: FormFieldSettingComponent; //子组件实例引用

  public fields = [];

  public properties: FieldInfo[] = [];

  public selectedValue: any;

  public radioValue: any;

  public date: any;

  public fieldSortOptions: SortablejsOptions = {
    group: {
      name: 'desiginer',
      pull: 'clone',
      put: false,
    },
    sort: false,
    onEnd: (event) => {
      // debugger
    }
  };

  public propertySortOptions: SortablejsOptions = {
    group: 'desiginer',
    onEnd: (event) => {
      // debugger
    }
  }

  public form: FormInfo = {
    sid: '',
    name: '表单名称',
    description: '',
    fields: []
  };

  public isForm = true;

  public questions: any;

  constructor(
    private formDesignerService: FormDesignerService,
  ) {
  }

  getIdPrex(n) {
    var rnd = "";
    for (var i = 0; i < n; i++) rnd += Math.floor(Math.random() * 10);
    return rnd;
  }

  cloneFieldItem = (item) => {
    const _entity = new fieldItemsComponentMap[item.type]['entity']({
      key: this.getIdPrex(10) + '',
      label: item.label,
      value: '',
      required: false,
      orderNo: 1,
      className: item.className,
      helpText: '',
      placeHolder: ''
    });
    const _item = _.find(this.properties, (n: any) => {
      return n.selected;
    });
    if (!_item) {
      this.isForm = false;
      _entity.selected = true;
    }
    return _entity;
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
    this.clearPropertySelected();
  }

  clearPropertySelected() {
    this.properties.forEach((n: any) => {
      n.selected = false;
    });
  }

  selectProperty(property) {
    this.isForm = false;
    this.clearPropertySelected();
    property.selected = true;
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
    this.saveAction(_back);
  }

  cancelForm() {
    this.cancelAction();
  }

  saveForm1() {
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
