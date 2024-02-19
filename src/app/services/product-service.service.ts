import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  url="http://localhost:8080/";
  url1="http://localhost:8080/products";
  url2="http://localhost:8080/addproduct";
  constructor(private Http:HttpClient) {
  
   }
   getproducts(){
return this.Http.get(this.url,{ responseType: 'text' });
  }
  getAllproducts(){
    return this.Http.get(this.url1,{ responseType: 'json' });
      }

  // addProduct(product?:Product):(Observable<object>){
  //   return this.Http.post<object>(`$(this.url2)`,product);
  // }  
  addProduct(product?:Product){
    return this.Http.post(this.url2,product);
  } 
  
}
