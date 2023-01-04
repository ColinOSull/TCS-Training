import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { RegisteredUsersComponent } from './Components/registered-users/registered-users.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { InterpolationDemoComponent } from './Components/interpolation-demo/interpolation-demo.component';
const routes: Routes = [{path:"", component:HomeComponent}, {path:"register", component:UserFormComponent}, {path:"registered", component:RegisteredUsersComponent},{
  path:"pipe",component:PipeDemoComponent},{path:"interpolation", component:InterpolationDemoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
