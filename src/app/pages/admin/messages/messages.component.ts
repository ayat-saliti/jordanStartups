import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { contact } from 'src/app/lib/interface/contactUs';
import { ContactUsService } from 'src/app/lib/services/contact-us.service';
import { MessageDetailsComponent } from '../message-details/message-details.component';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  comments: contact[] = [];

  constructor(private contactService:ContactUsService, private router:Router,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getcomment();
   
  }

  getcomment() {
    this.contactService.getcomment().subscribe((response) => {
      console.log(response);
      this.comments = response;
    });
  }

  //  showMessage(id: string | undefined){
  //   console.log(id)
  //   this.router.navigate(['messageDetails/',id])

  //  }

   showMessage(id: string |undefined){
    let dialogRef = this.dialog.open(MessageDetailsComponent,{
      width: "30%",
      data: {id: id},

    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.router.navigate(['admin/messages/'])
    })
  }

  
}
