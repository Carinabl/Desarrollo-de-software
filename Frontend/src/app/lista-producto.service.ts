import { Injectable } from '@angular/core';
import { Producto } from './compPrincipal/interfaces/Producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductosService } from './compPrincipal/producto/productos.service';


@Injectable({
  providedIn: 'root'
})
export class ListaProductoService {
  
  private productos: Producto[] = [];
  productoSeleccionado: Producto | null = null;
  
  private apiUrl = 'http://localhost:8080/producto';

  constructor(private http: HttpClient, private productoService: ProductosService) { }

  getListaProductos(): Observable<Producto[]> {
    const url = `${this.apiUrl}/producto/lista`;
    return this.http.get<Producto[]>(url);
  }

  
}






  /*
  Guardar sin backend
  guardarProducto(): void {
    const updatedProducts = this.productos.map(product => {
      return product.id === this.productoSeleccionado?.id ? { ...this.productoSeleccionado } : product;
    });
    //console.log(updatedProducts);
    this.productos = [...updatedProducts];
    this.productoSeleccionado = null;
  }*/


