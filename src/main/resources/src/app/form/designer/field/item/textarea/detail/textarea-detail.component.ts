import { Component, OnInit, Input } from '@angular/core';
import { FieldInfo } from '../../../../../../../shared/entity/form';

@Component({
    selector: 'form-field-textarea-detail',
    templateUrl: './textarea-detail.component.html'
})
export class FieldTextareaDetailComponent implements OnInit {

    @Input() field: FieldInfo;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
