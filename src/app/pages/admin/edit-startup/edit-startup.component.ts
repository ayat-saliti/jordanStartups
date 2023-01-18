import { Component } from '@angular/core';
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
export class EditStartupComponent {
  hide?: boolean = false;
  startup$!: Observable<startup | undefined>;
  startup?: startup;
  id!: string;

  sector?: string;
  sectors!: sector[];
  downloadUrl?: string;
  form = this.fb.group({

    companyName: ['' , Validators.required],
    phone: new FormControl<string> ('', [Validators.minLength(9)]),
    yearOfEstablishment: [''],
    email: ['', [Validators.required, Validators.email]],
    website: ['', [Validators.required]],
  });


  constructor(private fb: FormBuilder, private startupService: StartupServiceService, private router: Router, private route: ActivatedRoute, private storage: FireStorageService) {


    this.startup$ = this.route.paramMap.pipe(
      switchMap((value) => {
        this.id = value.get('id') + '';
        return this.startupService.getStartupById(this.id);
      })
    );

    this.startup$.subscribe((value) => {

  this.form.controls.companyName.setValue(value?.companyName + '');
      
      this.form.controls.phone.setValue(value?.phone + '');
      this.form.controls.yearOfEstablishment.setValue(value?.yearOfEstablishment + '');
      this.form.controls.email.setValue(value?.email + '');
      this.form.controls.website.setValue(value?.website+ '');
      this.startup = value;
      console.log(value)
    
  });

  }
  ngOnInit(): void {

    console.log(this.startup)

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

  submit() {
    this.startupService.updateStartup(this.id, {

      ...this.form.value, logo: this.downloadUrl, sector: this.sector
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


}
