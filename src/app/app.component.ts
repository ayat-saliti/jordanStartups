import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from './lib/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('dobInput') dob! : ElementRef;
  @ViewChild('ageInput') age! : ElementRef;
  constructor(public authService:AuthService){}
  title = 'jordanStartups';

  navigateToLogin(){
    
  }

  calculateAge(){
    const currentDobYear = new Date(this.dob.nativeElement.value).getFullYear();
    const currentYear = new Date().getFullYear();
    this.age.nativeElement.value = currentYear - currentDobYear;

  }
}
