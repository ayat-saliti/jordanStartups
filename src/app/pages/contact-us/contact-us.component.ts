import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { contact } from 'src/app/lib/interface/contactUs';
import { ContactUsService } from 'src/app/lib/services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  form = this.fb.group({
    phone: ['', Validators.minLength(10)],
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    comment: ['', [Validators.required]],
  }); 

  constructor(private fb: FormBuilder, private auth: ContactUsService, private router:Router){

  }

  get name(){
    return this.form.get('name');
  }

  get phone(){
    return this.form.get('phone');
  }


  get email(){
    return this.form.get('email');
  }

  get comment(){
    return this.form.get('comment');
  }

submit(){
  //new comment(in firebase)
  this.auth.addComment({ 
    ...this.form.value
  } as contact
    
    // this.name?.value + '',
    // this.phone?.value + '',
    // this.email?.value + '',
    // this.comment?.value + ''
  
  ).subscribe(_ => window.location.reload())

}
}
