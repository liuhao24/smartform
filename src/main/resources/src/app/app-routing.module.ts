import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessageComponent, MessageChatComponent } from './message';
import { ProjectComponent, ProjectDetailComponent, ProjectAddonComponent, ProjectTaskDesignerComponent } from './project';
import { ProjectResolver } from './project/services/project-resolver';
import { AppRootResolver } from './services/app-root-resolver';
import { FormComponent } from './form/form.component';
import { FormListComponent } from './form';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/project',
    pathMatch: 'full',
    resolve: {
      data: AppRootResolver
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'message',
    component: MessageComponent,
    children: [
      {
        path: 'chat',
        component: MessageChatComponent
      }
    ]
  },
  {
    path: 'form',
    component: FormComponent,
    children: [{
      path: 'list',
      component: FormListComponent
    }]
  },
  {
    path: 'project',
    component: ProjectComponent,
    resolve: {
      data: ProjectResolver
    },
    children: [
      {
        path: 'designer',
        component: ProjectTaskDesignerComponent,
      },
      {
        path: ':pid',
        component: ProjectDetailComponent,
        children: [
          {
            path: '',
            component: ProjectAddonComponent
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
