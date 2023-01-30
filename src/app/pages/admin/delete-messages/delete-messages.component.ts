import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { contact } from 'src/app/lib/interface/contactUs';
import { ContactUsService } from 'src/app/lib/services/contact-us.service';

@Component({
  selector: 'app-delete-messages',
  templateUrl: './delete-messages.component.html',
  styleUrls: ['./delete-messages.component.css']
})
export class DeleteMessagesComponent {
    
    constructor(
      private contactService: ContactUsService,
      private dialogRef: MatDialogRef<DeleteMessagesComponent>,
      @Inject(MAT_DIALOG_DATA) private data: any,
    ) {}

  confirm() {
    //delete message
    this.contactService.deleteMessage(this.data.id).subscribe((_) => {
      this.dialogRef.close(true);
    });
  }
  closeTheDialogue() {
    this.dialogRef.close(true);
  }

  }
  
