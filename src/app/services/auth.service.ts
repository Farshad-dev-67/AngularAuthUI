import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private str = 'https://localhost:7125/api/User/';
  constructor(private httpClient: HttpClient) { }

  login(model: any): any {
    return this.httpClient.post<any>(`${this.str}authentication`, model);
  }
  signup(model: any): any {
    return this.httpClient.post<any>(`${this.str}register`, model);
  }
}