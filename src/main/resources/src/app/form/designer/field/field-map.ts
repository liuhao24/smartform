import { FormFieldInputDesignComponent } from "./item/input/design/input.component";
import { FormFieldInputSettingComponent } from "./item/input/setting/input-setting.component";
import { fieldTypes } from "../field.constant";

export const fieldItemsComponentMap = {
    [fieldTypes.textinput.type]: {
        design: FormFieldInputDesignComponent,
        setting: FormFieldInputSettingComponent
    },
};