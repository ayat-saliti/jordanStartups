import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddStartupComponent } from './add-startup/add-startup.component';

const routes: Routes =[
  {path:'', component: DashboardComponent, pathMatch: 'full'},
  {path:'addStartup',component:AddStartupComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
