import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  users: any;
  public fullName: string = '';
  constructor(private auth: AuthService, private userStore: UserStoreService) { }
  ngOnInit(): void {
    this.userStore.fullName$.subscribe(fullName => {
      this.fullName = fullName || this.auth.getFullNameFromPayload();
    })
  }
}
