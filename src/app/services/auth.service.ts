import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  getUsers(): Observable<any> {
    return this.httpClient.get(`${this.str}users`);
  }
  setToken(token: string){
    return localStorage.setItem('token', token);
  }
  getToken(): string | null{
    return localStorage.getItem('token');
  }
  isLoggedin(): boolean{
    return !!this.getToken()
  }
}