export class FormInfo {
    id?: string;
    sid?: string;
    name?: string;
    description?: string;
    status?: string;
    fields?: FieldInfo[];
}

export class FieldInfo {
    id?: string;
    key?: string;
    orderNo?: number;
    type?: string;
    required?: boolean;
    label?: string;
    placeHolder?: string;
    helpText?: string;
    size?: string;
    controlType?: string;
    repeat?: boolean;
    default?: string;
    value?: string;
    disabled?: boolean;
    minLength?: number;
    maxLength?: number;
    security?: string;
    options?: [{
        id: string,
        text: string,
        value: string
    }];
}

