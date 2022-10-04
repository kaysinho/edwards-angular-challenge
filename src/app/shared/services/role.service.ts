import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  public roles : BehaviorSubject<Array<any>> = new BehaviorSubject(this.getRoles())

  constructor() { }

  private getRoles(): Array<any> {
    return [
      {
        name : "Customer",
        id: 1
      },
      {
        name : "Sales Rep",
        id: 2
      }
    ]
  }

  getName(id:string):string{
    return this.getRoles().filter(c => c.id == id)[0]['name'];
  }
}
