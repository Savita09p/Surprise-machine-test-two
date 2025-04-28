import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  prodArr !: Array<Iproduct>
  prodId!: string;
  prodObj!: Iproduct;
  isDark = false;
  toggleColor() : void{
    this.isDark = ! this.isDark;
  }
  count = 1;
  increment() : void{
    this.count ++ ;
  }
  decrement() : void {
    if(this.count > 1){
      this.count -- ;
    }else{
      this.count
    }
  }
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this.prodId = this._route.snapshot.params['_id'];
    this._productService.getobj(this.prodId).subscribe((res) => {
      this.prodObj = res;
      //this.selectedImage = this.prodObj.images[0];
    })
  }

}
