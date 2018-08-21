import { NgModule } from '@angular/core';
import { AppSharedModule } from '../app-shared.module';
import { COMPONENTS, ENTITY_COMPONENTS, PROVIDERS,PIPES } from '.';
import { FormRoutingModule } from './form.router';

@NgModule({
    imports: [
        AppSharedModule,
        FormRoutingModule
    ],
    declarations: [
        ...COMPONENTS,
        ...ENTITY_COMPONENTS,
        ...PIPES
    ],
    entryComponents: [
        ...ENTITY_COMPONENTS
    ],
    exports: [
        ...COMPONENTS,
        ...ENTITY_COMPONENTS,
        ...PIPES
    ],
    providers: [
        ...PROVIDERS,
        ...PIPES
    ]
})
export class FormModule {
    constructor() {
    }
}
