import { NgModule } from '@angular/core';
import { AppSharedModule } from '../app-shared.module';
import { COMPONENTS, ENTITY_COMPONENTS, PROVIDERS } from '.';

@NgModule({
    imports: [
        AppSharedModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    entryComponents: [
        ...ENTITY_COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ],
    providers: [
        ...PROVIDERS
    ]
})
export class FormModule {
    constructor() {
    }
}
