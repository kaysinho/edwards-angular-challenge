import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categories : BehaviorSubject<Array<any>> = new BehaviorSubject(this.getCategories())
  constructor() { }

  private getCategories(): Array<any> {
    return [
      {
        name : "Valve",
        id: 1
      },
      {
        name : "Ring",
        id: 2
      },
      {
        name : "Accessory",
        id: 3
      }
    ]
  }

  getName(id:string):string{
    return this.getCategories().filter(c => c.id == id)[0]['name'];
  }
}
