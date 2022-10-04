import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { CategoryService } from 'src/app/shared/services/category.service';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { RoleService } from 'src/app/shared/services/role.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit, AfterViewInit {

  products : Array<any> = [];
  constructor(public categoryService: CategoryService,
    public productService: ProductService,
    public rolesService: RoleService,
    public dataService: DatabaseService) { }

  ngOnInit(): void {
    this.getProducst()
    Notiflix.Loading.dots();
  }

  ngAfterViewInit(): void {
    Notiflix.Loading.remove(500);
  }

  getProducst(){
    this.products =  this.dataService.getAllProductsReturned()
  }

  getCategoryName(id:string):string{
    if (!id) return "";
    return this.categoryService.getName(id);
  }

  getProductName(id:string):string{
    if (!id) return "";
    return this.productService.getName(id);
  }

  getRoleName(id:string):string{
    if (!id) return "";
    return this.rolesService.getName(id);
  }

}
