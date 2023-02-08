import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from './lib/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService:AuthService){}


}
