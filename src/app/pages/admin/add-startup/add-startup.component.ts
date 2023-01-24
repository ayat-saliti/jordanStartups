import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sector } from 'src/app/lib/interface/sector';
import { startup } from 'src/app/lib/interface/startup';
import { FireStorageService } from 'src/app/lib/services/fire-storage.service';
import { StartupServiceService } from 'src/app/lib/services/startup-service.service';


@Component({
  selector: 'app-add-startup',
  templateUrl: './add-startup.component.html',
  styleUrls: ['./add-startup.component.css']
})
export class AddStartupComponent implements OnInit{
  sector?:string;
  sectors!: sector[];
  downloadUrl?: string;
  form = this.fb.group({

    companyName: ['', Validators.required],
    phone: ['', Validators.minLength(9)],
    yearOfEstablishment: [''],
    email: ['', [Validators.required, Validators.email]],
    website: ['', [Validators.required]],
  }); 

  constructor(private fb: FormBuilder, private auth: StartupServiceService, private router:Router,private storage: FireStorageService){

  }
  ngOnInit(): void {
    this.getSectors();
  }

  get companyName(){
    return this.form.get('companyName');
  }

  get phone(){
    return this.form.get('phone');
  }

  get email(){
    return this.form.get('email');
  }

  get website(){
    return this.form.get('website');
  }

  get yearOfEstablishment(){
    return this.form.get('yearOfEstablishment');
  }
submit(){
  //new comment(in firebase)
  this.auth.addStartup({ 
    ...this.form.value,logo:this.downloadUrl,sector:this.sector
  } as startup
    
    // this.name?.value + '',
    // this.phone?.value + '',
    // this.email?.value + '',
    // this.comment?.value + ''
  
  ).subscribe(_=> window.location.reload())
 
  // this.router.navigate(['/admin'])

}


 
 upload(event: Event) {
  
    let file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.storage.uploadimage(file).subscribe((value) => {
        this.downloadUrl = value;
        console.log(this.downloadUrl)
      });
    }
  }

  addingSector(sector:any){
this.sector=sector;
console.log(this.sector)
  }

 getSectors() {
    this.auth.getSector().subscribe((response) => {
      this.sectors = response;
    });
  }
  
}