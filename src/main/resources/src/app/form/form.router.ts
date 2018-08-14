import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { FormListComponent } from './list/list.component';
import { AuthGuard } from '../services/auth-guard.service';

const formRoutes: Routes = [
    {
        path: 'form',
        canActivate: [AuthGuard],
        component: FormComponent,
        children: [
            { path: 'list', component: FormListComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(formRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FormRoutingModule { }
