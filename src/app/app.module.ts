import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './lib/components/material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LayoutComponent } from './lib/layout/user-layout/layout.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AscendingOrderPipe } from './lib/customPipes/ascending-order.pipe';
import { AdminLayoutComponent } from './lib/layout/admin-layout/admin-layout.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent ,
    AboutUsComponent,
    AscendingOrderPipe,
    AdminLayoutComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  exports: [
    AdminLayoutComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
