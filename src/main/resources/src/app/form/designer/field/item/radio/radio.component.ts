import { Component, OnInit, Input } from '@angular/core';
import { FieldInfo } from '../../../../../../shared/entity/form';

@Component({
    selector: 'app-project-task-field-radio',
    templateUrl: './radio.component.html'
})
export class TaskFieldRadioComponent implements OnInit {

    @Input() field: FieldInfo;

    radioValue: any;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
