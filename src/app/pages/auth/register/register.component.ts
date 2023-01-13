import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/lib/services/auth/auth.service';
import { passwordMatchingValidator } from 'src/app/lib/validators/passwordMatchingValidator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    phone: ['', Validators.minLength(10)],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
  }, {validators: [passwordMatchingValidator]}); 

  constructor(private fb: FormBuilder, private auth: AuthService, private router:Router){

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

  get password(){
    return this.form.get('password');
  }
  
  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

submit(){
  //new user registration(in firebase)
  this.auth.signUp(
    this.name?.value + '',
    this.phone?.value + '',
    this.email?.value + '',
    this.password?.value + ''
  ).then((user)=>{
      //navigate to dashboard(admin/)
      this.router.navigate(['admin/']);
      console.log(user);
    }).catch((error)=> {
      console.log(error)
  });
}

}
