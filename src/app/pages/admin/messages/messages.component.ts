import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { contact } from 'src/app/lib/interface/contactUs';
import { ContactUsService } from 'src/app/lib/services/contact-us.service';
import { DeleteMessagesComponent } from '../delete-messages/delete-messages.component';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  comments?: contact[] | any;
  dataSource!: MatTableDataSource<any>;

  constructor(
    private contactService:ContactUsService, 
    private router:Router,
    private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getcomment();
   
  }

  getcomment() {
    this.contactService.getcomment().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      // console.log(response);
       this.comments = response;
    });
  }

  deletemessage(id: string){
    let dialogRef = this.dialog.open(DeleteMessagesComponent, {
      width: "50%",
      data: {id: id},

    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.getcomment()
    })
  }
  //  showMessage(id: string | undefined){
  //   console.log(id)
  //   this.router.navigate(['messageDetails/',id])

  //  }

  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(DeleteMessagesComponent, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }
  //  showMessage(id: string |undefined){
  //   let dialogRef = this.dialog.open(DeleteMessagesComponent,{
  //     width: "50%",
  //     data: {id: id},

  //   });
  //   dialogRef.afterClosed().subscribe((result)=>{
  //     this.router.navigate(['admin/messages/'])
  //   })
  // }


  
}
