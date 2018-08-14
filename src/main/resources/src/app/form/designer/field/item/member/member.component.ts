import { Component, OnInit, Input } from '@angular/core';
import { FieldInfo } from '../../../../../../shared/entity/form';

@Component({
    selector: 'app-project-task-field-member',
    templateUrl: './member.component.html'
})
export class TaskFieldMemberComponent implements OnInit {

    @Input() field: FieldInfo;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
