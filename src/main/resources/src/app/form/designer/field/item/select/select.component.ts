import { Component, OnInit, Input } from '@angular/core';
import { FieldInfo } from '../../../../../../shared/entity/form';

@Component({
    selector: 'app-project-task-field-select',
    templateUrl: './select.component.html'
})
export class TaskFieldSelectComponent implements OnInit {

    @Input() field: FieldInfo;

    selectedValue: any;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
