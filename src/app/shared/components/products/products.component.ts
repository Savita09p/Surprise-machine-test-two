import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prodArr !: Array<Iproduct>
  isImg: any = null;
  isLike: boolean = false;
  constructor(
    private _productService : ProductService
  ) { }

  ngOnInit(): void {

    this._productService.fetchallproduct('Mobiles').subscribe((res) => {
      this.prodArr = res;
      console.log(res);
    });

  }
  visibilility(event: Event) {
    event.stopPropagation();
    this.isLike = !this.isLike;
  }
}
