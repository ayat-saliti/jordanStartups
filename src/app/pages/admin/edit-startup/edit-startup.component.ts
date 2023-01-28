import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { sector } from 'src/app/lib/interface/sector';
import { startup } from 'src/app/lib/interface/startup';
import { FireStorageService } from 'src/app/lib/services/fire-storage.service';
import { StartupServiceService } from 'src/app/lib/services/startup-service.service';


@Component({
  selector: 'app-edit-startup',
  templateUrl: './edit-startup.component.html',
  styleUrls: ['./edit-startup.component.css']
})
export class EditStartupComponent implements OnInit {
  hide?: boolean = false;
  startup$!: Observable<startup | undefined>;
  public startup?: startup;
  id!: string;
  s?: string | any;
  sector?: string;
  sectors!: sector[];
  downloadUrl?: string;
  

  form = this.fb.group({
    about: [''],
    companyName: ['' , Validators.required],
    phone: new FormControl<string> ('', [Validators.minLength(9)]),
    yearOfEstablishment: [''],
    email: ['', [Validators.required, Validators.email]],
    website: ['', [Validators.required]],
    sector: ['']
  });
   toSelect?:any ;

  constructor(private fb: FormBuilder, private startupService: StartupServiceService, private router: Router, private route: ActivatedRoute, private storage: FireStorageService) {

  }
  ngOnInit(): void {
    this.startup$ = this.route.paramMap.pipe(
      switchMap((value) => {
        this.id = value.get('id') + '';
      
        return this.startupService.getStartupById(this.id);
      })
    );

    this.startup$.subscribe((value) => {
console.log(value);
         this.startup = value;
      this.s = this.startup?.sector;
      this.form.controls.sector.setValue(this.s);

  this.form.controls.companyName.setValue(value?.companyName + '');
      
      this.form.controls.phone.setValue(value?.phone + '');
      this.form.controls.about.setValue(value?.about + '');
      this.form.controls.yearOfEstablishment.setValue(value?.yearOfEstablishment + '');
      this.form.controls.email.setValue(value?.email + '');
      this.form.controls.website.setValue(value?.website+ '');
      this.form.controls.sector.setValue(value?.sector+'')
   
console.log(value?.sector)
    
  });
    this.getSectors();
  }

  

  get companyName() {
    return this.form.get('companyName');
  }

  get phone() {
    return this.form.get('phone');
  }

  get email() {
    return this.form.get('email');
  }

  get website() {
    return this.form.get('website');
  }

  get yearOfEstablishment() {
    return this.form.get('yearOfEstablishment');
  }



  update() {
    this.startupService.updateStartup(this.id, {

      ...this.form.value, logo: this.downloadUrl, sector: this.s
    } as startup

    ).subscribe(_ => this.router.navigate(['admin/']))
  }

  

  upload(event: Event) {

    let file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.storage.uploadimage(file).subscribe((value) => {
        this.downloadUrl = value;
        this.hide=true
       
      });
    }
  }

  addingSector(sector: any) {
    this.sector = sector;
    }

  getSectors() {
    this.startupService.getSector().subscribe((response) => {
      this.sectors = response;
    });
  }

  // selectedSector(){
  //   this.toSelect = this.sectors.find(this.s);
  //   console.log(this.toSelect)
  // }

  selected(event: any){
  this.s = event.target.text
  }
}
