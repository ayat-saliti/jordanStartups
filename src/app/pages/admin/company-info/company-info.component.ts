import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private dialogRef: MatDialogRef<CompanyInfoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.getStartupByID();
  }


  getStartupByID() {
    this.startupService.getStartupById(this.data.id).subscribe((value) => {
        this.startup = value;
        });   
   }

  closeTheDialogue() {
    this.dialogRef.close(true);
  }
  }
