import { Component, OnInit, Input } from '@angular/core';
import { FieldInfo } from '../../../../../../shared/entity/form';

@Component({
    selector: 'app-project-task-field-members',
    templateUrl: './members.component.html'
})
export class TaskFieldMembersComponent implements OnInit {

    @Input() field: FieldInfo;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
