export class FormInfo {
    id?: string;
    sid?:string;
    name?: string;
    description?: string;
    status?:string;
    fields?: FieldInfo[];
}

export class FieldInfo {
    id?:string;
    orderNo?: number;
    type?: string;
    required?: boolean;
    label?: string;
    placeholder?: string;
    helptext?: string;
    inputsize?: string;
    options?: [{
        id: string,
        text: string,
        value: string
    }];
}

