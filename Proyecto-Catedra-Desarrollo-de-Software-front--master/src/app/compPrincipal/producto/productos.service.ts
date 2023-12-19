import { Injectable } from '@angular/core';
import { ProductoComponent } from './producto.component';
import { Producto } from '../interfaces/Producto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productoComponent: ProductoComponent [] = [];
  private productos: Producto[] = [];

  private apiUrl = 'http://localhost:8080/producto/lista';
  private urlAlta = 'http://localhost:8080/producto/alta';
  private urlModificar = 'http://localhost:8080/producto/editar';
  //private urlEliminar = 'http://localhost:8080/producto/delete';

  constructor(private http: HttpClient) { }
  

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
  
  

  crearProducto(producto: Producto): Observable<any> {
    return this.http.post(this.urlAlta, producto);
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  actualizar(id: number, params: HttpParams): Observable<any> {
    return this.http.put(`${this.urlModificar}/${id}`, {}, { params });
  }

  /*
  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.urlEliminar}/${id}`);
  */
  
}

