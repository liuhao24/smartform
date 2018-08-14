import { Component, OnInit, Input } from '@angular/core';
import { FieldInfo } from '../../../../../../../shared/entity/form';

@Component({
    selector: 'form-field-input-design',
    templateUrl: './input.component.html'
})
export class FormFieldInputDesignComponent implements OnInit {

    @Input() field: FieldInfo;
    
    constructor(
    ) {
    }

    ngOnInit() {
    }
}
