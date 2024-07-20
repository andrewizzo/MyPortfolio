import { NgModule } from '@angular/core';
import { RouterModule, Routes , ExtraOptions} from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(h => h.HomeModule)
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'/home'
  }
];

// const routerOption : ExtraOptions = {
//   scrollPositionRestoration:'enabled',
//   anchorScrolling:'enabled'
// }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
