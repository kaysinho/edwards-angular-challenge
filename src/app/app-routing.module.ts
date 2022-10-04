import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  { path: 'product-return', component: FormComponent },
  { path: 'product-returned-list', component: ListComponent },
  { path: '**', redirectTo: '/product-return', pathMatch: 'full' },  // Default page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
