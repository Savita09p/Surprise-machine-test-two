import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ProductComponent } from './shared/components/product/product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'home',
    component:DashboardComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:_id',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
