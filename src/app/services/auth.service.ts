import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private payload: any;
  private str = 'https://localhost:7125/api/User/';
  constructor(private httpClient: HttpClient) {
    this.payload = this.decodedToken();
  }

  login(model: any): any {
    return this.httpClient.post<any>(`${this.str}authentication`, model);
  }
  signup(model: any): any {
    return this.httpClient.post<any>(`${this.str}register`, model);
  }
  getUsers(): Observable<any> {
    return this.httpClient.get(`${this.str}users`);
  }
  setToken(token: string) {
    return localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  isLoggedin(): boolean {
    return !!this.getToken()
  }
  decodedToken() {
    const jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(this.getToken()!);
  }
  getFullNameFromPayload() {
    if (this.payload) {
      return this.payload.unique_name;
    }
  }
  getRoleFromPayload() {
    if (this.payload) {
      return this.payload.role;
    }
  }
}