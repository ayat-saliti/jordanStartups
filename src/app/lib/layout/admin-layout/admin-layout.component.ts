import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddSectorComponent } from 'src/app/pages/admin/add-sector/add-sector.component';
import { User } from '../../interface/user';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
userName?: User[] | any ;

private _mobileQueryListener: () => void;
mobileQuery: MediaQueryList;

constructor(private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private dialog:MatDialog, private router:Router,
    public authSevice: AuthService,
    private userService: UserService
    ) {

    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
}
ngOnInit(): void {
this.getUserName()
}
ngAfterViewInit(): void {
  this.changeDetectorRef.detectChanges();
}
addSector(){
  let dialogRef = this.dialog.open(AddSectorComponent,{
    width: "50%",

  });
}

getUserName(){
  this.userService.getUser().subscribe((value)=>{
    this.userName = value
  console.log(value)
  })
  }

  logOut(){
    this.authSevice.signOut()
  }
}