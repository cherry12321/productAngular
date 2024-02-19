import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Product } from '../Product';
import { ProductListingComponent } from '../product-listing/product-listing.component';
import { ProductServiceService } from '../services/product-service.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Product = new Product()
  constructor(private data: ProductServiceService) { }

  ngOnInit(): void {
  }


  addProduct(){//product:NgForm
console.warn(this.product);
this.data.addProduct(this.product).subscribe();
  }
}
