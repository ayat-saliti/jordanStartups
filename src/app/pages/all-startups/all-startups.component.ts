import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { startup } from 'src/app/lib/interface/startup';
import { StartupServiceService } from 'src/app/lib/services/startup-service.service';

@Component({
  selector: 'app-all-startups',
  templateUrl: './all-startups.component.html',
  styleUrls: ['./all-startups.component.css']
})
export class AllStartupsComponent {
  startups: startup[] = [];
  dataSource!: MatTableDataSource<any>;
  constructor(private startupService:StartupServiceService, private router:Router) {}
   ngOnInit(): void {
     this.getStartups();
    
   }
   getStartups() {
     this.startupService.getStartup().subscribe((response) => {
       console.log(response);
       this.startups = response;
     });
   }

   details(id: string | undefined){
    this.router.navigate(['details/',id])
   }

   
}
