import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Product } from './services/product';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  productList:any;
  constructor(private product: Product) {}
  ngOnInit() {
    this.product.getProductList().subscribe((data: any) => {
      console.log(data);
      this.productList = data.products;
    });
  }
}
