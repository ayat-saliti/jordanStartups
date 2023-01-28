import { Component , Inject} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { sector } from 'src/app/lib/interface/sector';
import { AuthService } from 'src/app/lib/services/auth/auth.service';
import { StartupServiceService } from 'src/app/lib/services/startup-service.service';

@Component({
  selector: 'app-add-sector',
  templateUrl: './add-sector.component.html',
  styleUrls: ['./add-sector.component.css']
})
export class AddSectorComponent {
  constructor(
    private sectorService: StartupServiceService,
    private dialogRef: MatDialogRef<AddSectorComponent>,
    public authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}
  form = this.fb.group({
    sector: ['']
  });

  submit() {
    //  add Sector
    this.sectorService.addSector({ ...this.form.value } as sector)
      .subscribe((_) => {
        this.dialogRef.close(true);
      });
  }
  closeTheDialogue() {
    this.dialogRef.close(true);
  }
}
