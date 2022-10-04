import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList: Array<any> = [
    {
      name: "Automatic Pipet",
      category: 1,
      id: 1
    }, {
      name: "Sphygmomanometers & Spares.",
      category: 2,
      id: 2
    }, {
      name: "Opthalmoscopes.",
      category: 3,
      id: 3
    }, {
      name: "Pulse Oximeters.",
      category: 1,
      id: 4
    }, {
      name: "Fetal Doppler.",
      category: 2,
      id: 5
    }, {
      name: "ECG Machine.",
      category: 3,
      id: 6
    }, {
      name: "Measuring Tapes.",
      category: 1,
      id: 7
    }, {
      name: "Magnifiers - Loupes & Optics.",
      category: 2,
      id: 8
    }, {
      name: "Stethoscopes & Spare Parts.",
      category: 3,
      id: 9
    }

  ]


  constructor() { }

  getByCategory(category:string):Observable<Array<any>>{
    return new Observable(observer =>{
      observer.next(this.productList.filter( product => product.category == category))
    })
  }

  getName(id:string):string{
    return this.productList.filter(c => c.id == id)[0]['name'];
  }

}
