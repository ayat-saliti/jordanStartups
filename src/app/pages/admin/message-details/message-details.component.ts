import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { contact } from 'src/app/lib/interface/contactUs';
import { ContactUsService } from 'src/app/lib/services/contact-us.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {
  message$!: Observable<contact | undefined>;
  message?: contact;
  id!: string;
  
  constructor(
    private contactService: ContactUsService,
    private dialogRef: MatDialogRef<MessageDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private route: ActivatedRoute
  ) {}


 
  closeTheDialogue() {
    this.dialogRef.close(true);
  }

  ngOnInit(): void {
    this.getMessageByID();
  }

  getMessageByID() {

    this.message$ = this.route.paramMap.pipe(
      switchMap((value) => {
        this.id = value.get('id') + '';
        return this.contactService.getcommentById(this.data.id);
      })
    );

    this.message$.subscribe((value) => {
      this.message = value;
    });
  }

  delete(){
    this.contactService.deleteMessage(this.data.id).subscribe((_) => {
      this.dialogRef.close(true);
    });
}
}
