import { FormFieldInputDesignComponent } from './item/input/design/input-design.component';
import { FormFieldInputSettingComponent } from './item/input/setting/input-setting.component';
import { fieldTypes } from '../field.constant';
import { FormFieldInputDetailComponent } from './item/input/detail/input-detail.component';
import { FieldTextInput } from './entity/field-textinput';
import { FieldTextareaDesignComponent } from './item/textarea/design/textarea-design.component';
import { FieldTextareaSettingComponent } from './item/textarea/setting/textarea-setting.component';
import { FieldTextareaDetailComponent } from './item/textarea/detail/textarea-detail.component';
import { FieldTextArea } from './entity/field-textarea';

export const fieldItemsComponentMap = {
    [fieldTypes.textinput.type]: {
        design: FormFieldInputDesignComponent,
        setting: FormFieldInputSettingComponent,
        detail: FormFieldInputDetailComponent,
        entity: FieldTextInput
    },
    [fieldTypes.textarea.type]: {
        design: FieldTextareaDesignComponent,
        setting: FieldTextareaSettingComponent,
        detail: FieldTextareaDetailComponent,
        entity: FieldTextArea
    }
};

