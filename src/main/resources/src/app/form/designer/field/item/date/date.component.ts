import { Component, OnInit, Input } from '@angular/core';
import { FieldInfo } from '../../../../../../shared/entity/form';

@Component({
    selector: 'app-project-task-field-date',
    templateUrl: './date.component.html'
})
export class TaskFieldDateComponent implements OnInit {

    @Input() field: FieldInfo;

    date: any;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
