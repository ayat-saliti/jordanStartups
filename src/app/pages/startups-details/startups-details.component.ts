import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { startup } from 'src/app/lib/interface/startup';
import { StartupServiceService } from 'src/app/lib/services/startup-service.service';


@Component({
  selector: 'app-startups-details',
  templateUrl: './startups-details.component.html',
  styleUrls: ['./startups-details.component.css']
})

export class StartupsDetailsComponent {

  startup$!: Observable<startup | undefined>;
  startup?: startup;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private startupService: StartupServiceService
    ) {}

  ngOnInit(): void {
    this.getStartupByID();

  }

  getStartupByID() {

    this.startup$ = this.route.paramMap.pipe(
      switchMap((value) => {
        this.id = value.get('id') + '';
        return this.startupService.getStartupById(this.id);
      })
    );

    this.startup$.subscribe((value) => {
      this.startup = value;
    });

  }
}
