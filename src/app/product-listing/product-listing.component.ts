import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  
  ngOnInit(): void {
  }


  title = "Angular!";
  products: any;
  allProducts : any;


  constructor(private data: ProductServiceService) {
    console.warn(data);
    this.data.getproducts().subscribe((data) => {
      this.products = data;
      console.warn(this.products);
    })

    this.data.getAllproducts().subscribe((data) => {
    
      this.allProducts = data;
      console.warn(this.allProducts);
    })

  }
}
