import { Component, OnInit, Input } from '@angular/core';
import { FieldInfo } from '../../../../../../shared/entity/form';

@Component({
    selector: 'app-project-task-field-date-range',
    templateUrl: './date-range.component.html'
})
export class TaskFieldDateRangeComponent implements OnInit {

    @Input() field: FieldInfo;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
