import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { FieldInfo, FormInfo } from '../../project/entity/form-info';
import { SortablejsOptions } from '../../../../node_modules/angular-sortablejs/dist';
import { FormDesignerService } from './form-designer.service';

@Component({
  selector: 'app-form-designer',
  templateUrl: './form-designer.component.html'
})
export class FormDesignerComponent implements OnInit {


  @HostBinding('class.form-designer-element') layoutClass = true;

  @Input() entity: FormInfo;

  public fields: FieldInfo[] = [];

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
    this.formDesignerService.getAllFields().subscribe();
    this.formDesignerService.fields$.subscribe((fields) => {
      this.fields = fields;
    });

    debugger
    if(this.entity){
      this.form = this.entity;
      this.properties = this.entity.fields;
    }
    
  }

  selectForm() {
    this.isForm = true;
  }

  saveForm() {
    this.properties.forEach((n, index) => {
      n.orderNo = index + 1;
    });
    this.form.fields = this.properties;
    // this.formDesignerService.saveForm(this.form).subscribe((data:any)=>{
    //   alert('ok');
    // });
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
