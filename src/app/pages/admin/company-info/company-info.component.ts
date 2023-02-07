import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { startup } from 'src/app/lib/interface/startup';
import { StartupServiceService } from 'src/app/lib/services/startup-service.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent {
  // dataSource!: MatTableDataSource<any>;
  startup$!: Observable<startup | undefined>;
  startup?: startup;
  id!: string;
  constructor(
    private route: ActivatedRoute,
    private startupService: StartupServiceService,
    private dialogRef: MatDialogRef<CompanyInfoComponent>) { }

  ngOnInit(): void {
    this.getStartupByID();
    console.log(this.startup)
  }


  getStartupByID() {
    this.startup$ = this.route.paramMap.pipe(
      switchMap((value) => {
        this.id = value.get('id') + '';
        console.log(this.id)
        return this.startupService.getStartupById(this.id)
      })
    );

    this.startup$.subscribe((value) => {
      this.startup = value;
    });
  }

  // getStartupByID() {
  //   this.startupService.getStartup().subscribe((response) => {

  //     this.dataSource = new MatTableDataSource(response);

  //   });
  // }


  closeTheDialogue() {
    this.dialogRef.close(true);
  }
}
