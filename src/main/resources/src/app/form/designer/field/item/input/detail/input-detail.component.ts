import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FieldInfo } from '../../../../../../../shared/entity/form';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-field-input-detail',
    templateUrl: './input-detail.component.html'
})
export class FormFieldInputDetailComponent implements OnInit, OnChanges {

    @Input() field: FieldInfo;

    @Input() form: FormGroup;

    get isValid() { return this.form.controls[this.field.key].valid; }

    constructor(
    ) {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    ngOnInit() {
        
    }
}
