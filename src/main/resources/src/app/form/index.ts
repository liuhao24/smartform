
import { FormComponent } from './form.component';
import { FormTocComponent } from './toc/toc.component';
import { FormListComponent } from './list/list.component';
import { FormService } from './services/form.service';
import { FormDesignerComponent } from './designer/form-designer.component';
import { FormDesignerService } from './designer/form-designer.service';
import { TASK_FIELD_COMPONENTS, TASK_FIELD_ENTITY_COMPONENTS, FIELD_PIPES } from './designer/field';
import { FormDetailComponent } from './detail/form-detail.component';

export {
    FormComponent,
    FormTocComponent,
    FormListComponent,
    FormDetailComponent,
    FormDesignerComponent
};


export const COMPONENTS = [
    FormComponent,
    FormTocComponent,
    FormListComponent,
    FormDetailComponent,
    FormDesignerComponent,
    ...TASK_FIELD_COMPONENTS
];


export const ENTITY_COMPONENTS = [
    FormDesignerComponent,
    FormDetailComponent,
    ...TASK_FIELD_ENTITY_COMPONENTS
];

export const PROVIDERS = [
    FormService,
    FormDesignerService
];

export const PIPES = [
    ...FIELD_PIPES
];
