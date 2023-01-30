import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StartupServiceService } from 'src/app/lib/services/startup-service.service';
import { AddSectorComponent } from '../add-sector/add-sector.component';
import { DeleteStartupComponent } from '../delete-startup/delete-startup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'logo',
    'Company Name',
    'sector',
    'Year Of Establishment',
    'Website',
    'email',
    'phone number',
    'about',
    'edit',
    'delete'
  ];


  dataSource!: MatTableDataSource<any>;
  constructor(
    private startupService: StartupServiceService,
     private dialog:MatDialog,
      private router:Router) { }
  
      ngOnInit(): void {
    this.getStartups();
  }

  getStartups() {
    this.startupService.getStartup().subscribe((response) => {

      this.dataSource = new MatTableDataSource(response);

    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteStartup(id: string){
    let dialogRef = this.dialog.open(DeleteStartupComponent,{
      width: "50%",
      data: {id: id},

    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.getStartups()
    })
  }


  
}
