import { Component, OnInit, Input } from '@angular/core';
import { FieldInfo } from '../../../../../../../shared/entity/form';

@Component({
    selector: 'form-field-textarea-design',
    templateUrl: './textarea-design.component.html'
})
export class FieldTextareaDesignComponent implements OnInit {

    @Input() field: FieldInfo;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
