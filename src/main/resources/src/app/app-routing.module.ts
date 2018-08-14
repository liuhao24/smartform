import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRootResolver } from './services/app-root-resolver';
import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';


// const routes: Routes = [
//   {
//     path: '',
//     // redirectTo: '/form',
//     // pathMatch: 'full',
//     resolve: {
//       data: AppRootResolver
//     },
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: '',
//         redirectTo: '/form',
//         pathMatch: 'full'
//       },
//       {
//         path: 'message',
//         component: MessageComponent,
//         children: [
//           {
//             path: 'chat',
//             component: MessageChatComponent
//           }
//         ]
//       },
//       {
//         path: 'form',
//         component: FormComponent,
//         children: [{
//           path:'',
//           redirectTo: '/list',
//           pathMatch: 'full'
//         },{
//           path: 'list',
//           component: FormListComponent
//         }]
//       },
//       {
//         path: 'project',
//         component: ProjectComponent,
//         resolve: {
//           data: ProjectResolver
//         },
//         children: [
//           {
//             path: 'designer',
//             component: ProjectTaskDesignerComponent,
//           },
//           {
//             path: ':pid',
//             component: ProjectDetailComponent,
//             children: [
//               {
//                 path: '',
//                 component: ProjectAddonComponent
//               },
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     path: 'login',
//     component: LoginComponent
//   }
// ];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full',
    resolve: {
      data: AppRootResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
