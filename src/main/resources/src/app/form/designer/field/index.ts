import { FormFieldDesignComponent } from './field-design.component';
import { FormFieldDetailComponent } from './field-detail.component';
import { FormFieldSettingComponent } from './field-setting.component';

import { FormFieldInputDesignComponent } from './item/input/design/input-design.component';
import { FormFieldInputSettingComponent } from './item/input/setting/input-setting.component';
import { FormFieldInputDetailComponent } from './item/input/detail/input-detail.component';

import { TaskFieldTextareaComponent } from './item/textarea/textarea.component';
import { TaskFieldNumberComponent } from './item/number/number.component';
import { TaskFieldDateComponent } from './item/date/date.component';
import { TaskFieldDateRangeComponent } from './item/date-range/date-range.component';
import { TaskFieldSelectComponent } from './item/select/select.component';
import { TaskFieldRadioComponent } from './item/radio/radio.component';
import { TaskFieldMemberComponent } from './item/member/member.component';
import { TaskFieldMembersComponent } from './item/members/members.component';


import { FieldFormComponent }         from './entity/field-form.component';



import { FieldSizePipe } from './field.pipe';


export const TASK_FIELD_COMPONENTS = [
    FormFieldDesignComponent,
    FormFieldSettingComponent,
    FormFieldDetailComponent,

    FormFieldInputDesignComponent,
    FormFieldInputSettingComponent,
    FormFieldInputDetailComponent,

    TaskFieldTextareaComponent,
    TaskFieldNumberComponent,
    TaskFieldDateComponent,
    TaskFieldDateRangeComponent,
    TaskFieldSelectComponent,
    TaskFieldRadioComponent,
    TaskFieldMemberComponent,
    TaskFieldMembersComponent,
    FieldFormComponent
];


export const TASK_FIELD_ENTITY_COMPONENTS = [
    FormFieldDesignComponent,
    FormFieldSettingComponent,
    FormFieldDetailComponent,

    FormFieldInputDesignComponent,
    FormFieldInputSettingComponent,
    FormFieldInputDetailComponent,

    TaskFieldTextareaComponent,
    TaskFieldNumberComponent,
    TaskFieldDateComponent,
    TaskFieldDateRangeComponent,
    TaskFieldSelectComponent,
    TaskFieldRadioComponent,
    TaskFieldMemberComponent,
    TaskFieldMembersComponent
];

export const FIELD_PIPES = [
    FieldSizePipe
];