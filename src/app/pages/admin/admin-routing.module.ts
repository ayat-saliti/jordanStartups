import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddStartupComponent } from './add-startup/add-startup.component';
import { AdminLayoutComponent } from 'src/app/lib/layout/admin-layout/admin-layout.component';
import { EditStartupComponent } from './edit-startup/edit-startup.component';
import { MessagesComponent } from './messages/messages.component';


const routes: Routes =[
  {path:'', component: DashboardComponent, pathMatch: 'full'},
  {path:'addStartup',component:AddStartupComponent},
  {path: 'editStartup/:id', component: EditStartupComponent},
  {path: 'messages', component: MessagesComponent},
  
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
