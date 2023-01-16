import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './lib/guards/auth.guard';
import { NotloggedinGuard } from './lib/guards/not-logged-in.guard';
import { AdminLayoutComponent } from './lib/layout/admin-layout/admin-layout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AllStartupsComponent } from './pages/all-startups/all-startups.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { StartupsDetailsComponent } from './pages/startups-details/startups-details.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  
  {path: 'auth', loadChildren: ()=> import('./pages/auth/auth.module').then((m)=> m.AuthModule),
  canActivate: [NotloggedinGuard]
},
  {path: 'admin',component: AdminLayoutComponent,children: [
    {path: '', loadChildren: ()=> import('./pages/admin/admin.module').then((m)=> m.AdminModule)}
  ],
  canActivate: [AuthGuard]
  },
    {path:'about-us', component: AboutUsComponent},
    {path:'contact-us', component: ContactUsComponent},
    {path:'home', component: HomeComponent},
    {path: 'allStartups', component: AllStartupsComponent},
    {path: 'details' , component: StartupsDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
