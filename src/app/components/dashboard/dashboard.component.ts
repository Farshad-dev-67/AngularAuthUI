import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  users: any;
  constructor(private auth: AuthService){}
  ngOnInit(): void {
    this.auth.getUsers().subscribe((res) => {
      this.users = res;
    })
  }
  getAlbumData(event: any){}

}
