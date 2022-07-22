import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortprojectComponent } from './portproject/portproject.component';

const routes: Routes = [{path:'Port', component:PortprojectComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
