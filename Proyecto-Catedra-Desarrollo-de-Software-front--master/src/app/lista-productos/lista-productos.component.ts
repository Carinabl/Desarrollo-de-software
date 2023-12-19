import { Component } from '@angular/core';
import { ProductosService } from '../compPrincipal/producto/productos.service'; 
import { Producto } from '../compPrincipal/interfaces/Producto';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  productos: Producto[] = [];
  productoSeleccionado: Producto= { id: 0, nombre: '', descripcion: '' };


  constructor(private productoService: ProductosService ) {}
  
  ngOnInit() {
    //consigue la lista de productos para mostrar en la tabla
    this.productoService.getProductos().subscribe((productos: Producto[]) => {
      console.log("Productos: ", productos);
      this.productos = productos;
    });
  }

  editarProducto(id: number): void {
    console.log(`Editar producto con ID: ${id}`);
    const productoElegido = this.productos.find(p => p.id === id);
    console.log("Producto a elegir: ", productoElegido);
    if (productoElegido) {
      this.productoSeleccionado = productoElegido;
      console.log(this.productoSeleccionado);
    } else {
      console.error(`No se encontró un producto con ID ${id}`);
    }
  }

  guardar(): void {
    if (this.productoSeleccionado) {
      const params = new HttpParams()
        .set('nombre', this.productoSeleccionado.nombre || '')
        .set('descripcion', this.productoSeleccionado.descripcion || '');
      console.log(params);
      this.productoService.actualizar(this.productoSeleccionado.id, params).subscribe({
        next: (response) => {
          console.log('Respuesta del servidor:', response);
          // Recargar la lista de productos
          this.cargarListaProductos();
        },
        error: (error) => {
          console.error('Error al actualizar el producto:', error);
        }
      });
    }
  }
  
  cargarListaProductos() {
    this.productoService.getProductos().subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
  }


  
}