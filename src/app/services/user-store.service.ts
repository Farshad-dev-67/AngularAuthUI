import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  fullName$ = new BehaviorSubject<string>('');
  role$ = new BehaviorSubject<string>('');

  constructor() { }

  public getFullNameFromStore(){
    return this.fullName$.asObservable();
  }
  public setFullNameFromStore(fullname: string){
    this.fullName$.next(fullname);
  }
  public getRoleFromStore(){
    return this.role$.asObservable()
  }
  public setRoleFromStore(role: string){
    this.role$.next(role);
  }
}
