import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicUiModule } from './basic-ui/basic-ui.module';
import { ErrorPagesModule } from './error-pages/error-pages.module';
import { FrontDashboardComponent } from './module/front-dashboard/front-dashboard.component';
import { FrontDashboardModule } from './module/front-dashboard/front-dashboard/front-dashboard.module';
import { OeModule } from './module/oe/oe.module';
import { ReModule } from './module/re/re.module';
import { OeLayoutComponent } from './oe-layout/oe-layout.component';
import { ReLayoutComponent } from './re-layout/re-layout.component';
import { UserPagesModule } from './user-pages/user-pages.module';


const routes: Routes = 
[
  { path: '', redirectTo: '/front/front-dash', pathMatch: 'full' },

     
      {
        path:"front", loadChildren:() => FrontDashboardModule
      },
  
 

  { path:"re-layout", component:ReLayoutComponent, children: 
    [
      { path:"re", loadChildren:() => ReModule },
    ]
  },

 { path:"oe-layout", component:OeLayoutComponent, children: 
   [
       { path:"oe", loadChildren:() => OeModule } 
    ]
 },
 
  { path:"user", loadChildren:() => UserPagesModule }
 
  ,
  {path:"errorpage", loadChildren:() =>ErrorPagesModule}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
