import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from 'src/app/lib/components/material/material.module';
import { DeleteStartupComponent } from './delete-startup/delete-startup.component';
import { EditStartupComponent } from './edit-startup/edit-startup.component';
import { AddStartupComponent } from './add-startup/add-startup.component';
import { AddSectorComponent } from './add-sector/add-sector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { MatSelectModule } from '@angular/material/select';
import { MessagesComponent } from './messages/messages.component';
import { DeleteMessagesComponent } from './delete-messages/delete-messages.component';


@NgModule({
  declarations: [DashboardComponent,
    DeleteStartupComponent,
    EditStartupComponent,
    AddStartupComponent,
    AddSectorComponent,
    MessagesComponent,
    DeleteMessagesComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    MatSelectModule
  ]
})
export class AdminModule { }