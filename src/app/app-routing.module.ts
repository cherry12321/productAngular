import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  
{
  component:UserListComponent,
  path:'home'
},
{
  component:AddProductComponent,
  path:'addProduct'
},
{
  component:ProductListingComponent,
  path:'productListing'
},
{
  component:AboutPageComponent,
  path:'about'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
