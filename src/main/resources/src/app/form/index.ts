
import { FormComponent } from './form.component';
import { FormTocComponent } from './toc/toc.component';
import { FormListComponent } from './list/list.component';
import { FormService } from './services/form.service';
import { FormDesignerComponent } from './designer/form-designer.component';
import { FormDesignerService } from './designer/form-designer.service';

export {
    FormComponent,
    FormTocComponent,
    FormListComponent,
    FormDesignerComponent
};


export const COMPONENTS = [
    FormComponent,
    FormTocComponent,
    FormListComponent,
    FormDesignerComponent
];


export const ENTITY_COMPONENTS = [
    FormDesignerComponent
];

export const PROVIDERS = [
    FormService,
    FormDesignerService
];
