import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddSectorComponent } from 'src/app/pages/admin/add-sector/add-sector.component';
import { User } from '../../interface/user';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  constructor( private dialog:MatDialog, private router:Router){}
  addSector(){
    let dialogRef = this.dialog.open(AddSectorComponent,{
      width: "50%",

    });
  //   dialogRef.afterClosed().subscribe((result)=>{

  //  this.router.navigate(['/admin'])
  //   })
  }
}
