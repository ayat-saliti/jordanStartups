import { Component ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/lib/services/auth/auth.service';
import { StartupServiceService } from 'src/app/lib/services/startup-service.service';

@Component({
  selector: 'app-delete-startup',
  templateUrl: './delete-startup.component.html',
  styleUrls: ['./delete-startup.component.css']
})
export class DeleteStartupComponent {
  constructor(
    private startupsService: StartupServiceService,
    private dialogRef: MatDialogRef<DeleteStartupComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  confirm() {
    //delete startup
    this.startupsService.deleteStartup(this.data.id).subscribe((_) => {
      this.dialogRef.close(true);
    });
  }
  closeTheDialogue() {
    this.dialogRef.close(true);
  }
}
