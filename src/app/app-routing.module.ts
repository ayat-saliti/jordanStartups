import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './lib/guards/auth.guard';
import { NotloggedinGuard } from './lib/guards/not-logged-in.guard';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  
  {path: 'auth', loadChildren: ()=> import('./pages/auth/auth.module').then((m)=> m.AuthModule),
  canActivate: [NotloggedinGuard]
},
  {path: 'admin', loadChildren: ()=> import('./pages/admin/admin.module').then((m)=> m.AdminModule),
  canActivate: [AuthGuard]
  },
    {path:'about-us', component: AboutUsComponent},
    {path:'contact-us', component: ContactUsComponent},
    {path:'home', component: HomeComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
