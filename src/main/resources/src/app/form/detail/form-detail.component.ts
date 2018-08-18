import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { FieldBase } from '../designer/field/entity/field-base';
import { FieldTextInput } from '../designer/field/entity/field-textinput';

@Component({
    selector: 'app-form-detail',
    templateUrl: './form-detail.component.html'
})
export class FormDetailComponent implements OnInit {

    @HostBinding('class.detail-element') layoutClass = true;

    @Input() cancelAction: Function;

    @Input() saveAction: Function;

    public form: any;

    public fields:any;

    constructor(
    ) {

    }


    ngOnInit() {
        this.form = {
            name: "用户信息",
            description: "用户信息收集",
            fields: [{
                className: "anticon anticon-bars",
                helpText: "这个是帮助信息",
                label: "姓名",
                orderNo: 1,
                placeHolder: "请输入姓名",
                required: true,
                selected: true,
                type: "textinput"
            }]
        }
        let fields: FieldBase<any>[] = [
            new FieldTextInput({
              key: 'firstName',
              label: 'First name',
              value: 'Bombasto',
              required: true,
              order: 1
            })
          ];
      
          this.fields = fields.sort((a, b) => a.order - b.order);
    }

    closeDetail() {
        this.cancelAction();
    }

    saveDetail(){
        this.saveAction();
    }
}
