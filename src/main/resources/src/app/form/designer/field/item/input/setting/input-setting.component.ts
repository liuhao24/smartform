import { Component, OnInit, Input } from '@angular/core';
import { FieldInfo } from '../../../../../../../shared/entity/form';

@Component({
    selector: 'form-field-input-setting',
    templateUrl: './input-setting.component.html'
})
export class FormFieldInputSettingComponent implements OnInit {

    @Input() field: FieldInfo;

    @Input() changeValue: Function;

    constructor(
    ) {
    }

    modalChange(event) {
        this.changeValue(this.field);
    }
    ngOnInit() {
    }
}
