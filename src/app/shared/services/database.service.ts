import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  bookName : string = "products-returned"
  constructor() { }

  addProductReturned(product:any) {
    this.createIfItIsClean();
    let products = this.getAllProductsReturned();
    products.push(product);
    localStorage.setItem(this.bookName, JSON.stringify(products));
}

getProductReturnedById(id:string):Array<any> {
    this.createIfItIsClean();
    let products = this.getAllProductsReturned();
    return products.filter(p => p.id == id);
}

getAllProductsReturned():Array<any> {
  this.createIfItIsClean();
  return JSON.parse(localStorage.getItem(this.bookName) || '[]');
}

private createIfItIsClean() {
    if (localStorage.getItem(this.bookName) === null || localStorage.getItem(this.bookName) === undefined) {
        localStorage.setItem(this.bookName, "")
    }
}
}
