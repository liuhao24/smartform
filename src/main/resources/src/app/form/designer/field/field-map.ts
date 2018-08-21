import { FormFieldInputDesignComponent } from "./item/input/design/input-design.component";
import { FormFieldInputSettingComponent } from "./item/input/setting/input-setting.component";
import { fieldTypes } from "../field.constant";
import { FormFieldInputDetailComponent } from "./item/input/detail/input-detail.component";
import { FieldTextInput } from "./entity/field-textinput";

export const fieldItemsComponentMap = {
    [fieldTypes.textinput.type]: {
        design: FormFieldInputDesignComponent,
        setting: FormFieldInputSettingComponent,
        detail:FormFieldInputDetailComponent,
        entity:FieldTextInput
    },
};