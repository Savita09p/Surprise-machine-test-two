import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../model/product';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL : string = environment.baseUrl;
  PRODUCT_URL : string = `${this.BASE_URL}/products`;

 // productArr : Array<Iproduct> = product;
  constructor(
    private _http : HttpClient
  ) { }


  fetchallproduct(val: string): Observable<Array<Iproduct>> {
    const params = new HttpParams().set('category', val);
    return this._http.get<Array<Iproduct>>(`${this.PRODUCT_URL}/filter`, { params : params });
    
  }

  getobj(prodId: string): Observable<Iproduct> {
    return this._http.get<Iproduct>(`${this.PRODUCT_URL}/${prodId}`);
    
  }
  
}
