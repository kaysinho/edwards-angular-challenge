import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/clases/custom-validators.class';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { RoleService } from 'src/app/shared/services/role.service';

import * as Notiflix from 'notiflix';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit, AfterViewInit {
  products : Array<any> = [];
  form : FormGroup = new FormGroup({
    category : new FormControl(0, [Validators.required, Validators.min(1)]),
    product : new FormControl(null, [Validators.required, Validators.min(1)]),
    quantity : new FormControl(1, [Validators.required, Validators.min(1)]), 
    role : new FormControl(2, [Validators.required]),
    contactName : new FormControl('', [Validators.max(255)]),
    contactEmail : new FormControl('', [Validators.email, Validators.max(255)]),
    replacement : new FormControl(0, [Validators.required]),
    dateOfReplacement : new FormControl(new Date(), [ CustomValidators.dateMinimum(this.getMinDate())]),
    comments : new FormControl('', [ Validators.max(1000)])
  })
  constructor(
    public categoryService: CategoryService, 
    public productService:ProductService, 
    public rolesService: RoleService,
    public dataService:DatabaseService) 
    { }

  ngOnInit(): void {
    Notiflix.Loading.dots();
    this.form.controls['product'].disable();
  }

  ngAfterViewInit(): void {
    Notiflix.Loading.remove(500);
  }

  onChangeCategory(){
    Notiflix.Loading.dots();
    this.productService.getByCategory(this.form.controls['category'].value)
      .subscribe( products => {

        this.products = products;
        this.form.controls['product'].setValue(0);
        this.form.controls['product'].enable();
        Notiflix.Loading.remove(500);

      })
  }

  getMinDate():Date{
    let date = new Date();
    date.setDate(date.getDate() + 2);
    return date;
  }

  addProduct(){
    this.validateContactForm()
    if (this.form.invalid) return;
    Notiflix.Loading.dots();
    this.dataService.addProductReturned(this.form.value);
    Notiflix.Loading.remove(500);
  }

  validateContactForm(){
    if (this.form.controls['role'].value == 1){
      console.log('it comes')
      this.form.controls['contactName'].addValidators([Validators.required])
      this.form.controls['contactEmail'].addValidators([Validators.required])
    } else {
      this.form.controls['contactName'].removeValidators([Validators.required])
      this.form.controls['contactEmail'].removeValidators([Validators.required])
    }

    this.form.controls['contactName'].updateValueAndValidity()
    this.form.controls['contactEmail'].updateValueAndValidity()

  }

}
