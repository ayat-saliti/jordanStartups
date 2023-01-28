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
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LayoutComponent } from './lib/layout/user-layout/layout.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AscendingOrderPipe } from './lib/customPipes/ascending-order.pipe';
import { AdminLayoutComponent } from './lib/layout/admin-layout/admin-layout.component';
import { AllStartupsComponent } from './pages/all-startups/all-startups.component';
import { StartupsDetailsComponent } from './pages/startups-details/startups-details.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent ,
    AboutUsComponent,
    AscendingOrderPipe,
    AdminLayoutComponent,
    LayoutComponent,
    AllStartupsComponent,
    StartupsDetailsComponent,
    PageNotFoundComponent,

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
    AngularFireStorageModule  ],
  exports: [
    AdminLayoutComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
