import { Component, OnInit, Input } from '@angular/core';
import { FieldInfo } from '../../../../../../shared/entity/form';

@Component({
    selector: 'app-project-task-field-textarea',
    templateUrl: './textarea.component.html'
})
export class TaskFieldTextareaComponent implements OnInit {

    @Input() field: FieldInfo;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
