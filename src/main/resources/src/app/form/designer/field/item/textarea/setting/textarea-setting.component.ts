import { Component, OnInit, Input } from '@angular/core';
import { FieldInfo } from '../../../../../../../shared/entity/form';

@Component({
    selector: 'form-field-textarea-setting',
    templateUrl: './textarea-setting.component.html'
})
export class FieldTextareaSettingComponent implements OnInit {

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
