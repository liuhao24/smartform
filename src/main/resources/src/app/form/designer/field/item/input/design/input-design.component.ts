import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FieldInfo } from '../../../../../../../shared/entity/form';

@Component({
    selector: 'form-field-input-design',
    templateUrl: './input-design.component.html'
})
export class FormFieldInputDesignComponent implements OnInit, OnChanges {

    @Input() field: FieldInfo;

    constructor(
    ) {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    ngOnInit() {
        
    }
}
