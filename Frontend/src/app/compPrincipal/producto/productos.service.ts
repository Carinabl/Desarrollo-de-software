import { Injectable } from '@angular/core';
//import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ProductoComponent } from './producto.component';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productoComponent: ProductoComponent [] = [];
  ultimoId: number=0;

  constructor() { }
  crearProductos(productoComponent: ProductoComponent): ProductosService{
    // Asigno el próximo ID ala nueva lista
    productoComponent.id = ++this.ultimoId;
    // Agrego el producto al array
    this.productoComponent.push(productoComponent);
    // Retorno el objeto con ID actualizado
    return this;   
   }
   eliminarProducto(id: number): ProductosService{
    // REemplazo la lista de productos por otro array resultante
    //del filtro que excluye el producto por ID
    this.productoComponent = this.productoComponent.filter(productoComponent => productoComponent.id !== id );
    return this;
  }
  obtenerProducto(id: number): ProductoComponent | undefined{
    // La función pop() retorna la tarea resultante del filtro por id
    // En caso que no exista, retorna undefined
    return this.productoComponent
        .filter(productoComponent => productoComponent.id === id)
        .pop();
  }
  modificarProducto(id: number, values: Object = {}): ProductoComponent | undefined{
    // Obtengo la tarea por ID
    let productoComponent = this.obtenerProducto(id);
    if (!productoComponent){
      // No la encontré
      return undefined;
    }    
    // Actualizo la tarea con los valores recibidos en el parámetro
    Object.assign(productoComponent, values);
    // Retorno la tarea
    return productoComponent;
  }
}
