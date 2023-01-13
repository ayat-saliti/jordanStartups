import { Component } from '@angular/core';
import { startup } from 'src/app/lib/interface/startup';
import { StartupServiceService } from 'src/app/lib/services/startup-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  startups: startup[] = [];
  constructor(private startupService:StartupServiceService) {}
   ngOnInit(): void {
     this.getStartups();
    
   }
   getStartups() {
     this.startupService.getStartup().subscribe((response) => {
       console.log(response);
       this.startups = response;
     });
   }
}
