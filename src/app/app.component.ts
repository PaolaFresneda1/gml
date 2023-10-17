import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productArray: Product[] = [
    {id: 1, logo: "Logo 1", nombreProducto: "Producto 1", descripcion: "Descripcion 1", fechaLiberacion: "12/10/2023", fechaReestruturacion: "12/10/2023" },
    {id: 2, logo: "Logo 2", nombreProducto: "Producto 2", descripcion: "Descripcion 2", fechaLiberacion: "12/10/2023", fechaReestruturacion: "12/10/2023" },
    {id: 3, logo: "Logo 3", nombreProducto: "Producto 3", descripcion: "Descripcion 3", fechaLiberacion: "12/10/2023", fechaReestruturacion: "12/10/2023" },
    {id: 4, logo: "Logo 4", nombreProducto: "Producto 4", descripcion: "Descripcion 4", fechaLiberacion: "12/10/2023", fechaReestruturacion: "12/10/2023" }
  ];

  selectedProduct: Product = new Product();

  addOrEdit(){

    if(this.selectedProduct.id === 0){
      this.selectedProduct.id = this.productArray.length + 1;
      this.productArray.push(this.selectedProduct);
    }
    this.selectedProduct = new Product();
  }

  openForEdit(product: Product){
    this.selectedProduct = product;
  }

  delete(){
    if (confirm('¿Esta seguro de eliminar este producto?')) {
      this.productArray = this.productArray.filter(element => element != this.selectedProduct);
      this.selectedProduct = new Product();
    }
    
  }

  
}
