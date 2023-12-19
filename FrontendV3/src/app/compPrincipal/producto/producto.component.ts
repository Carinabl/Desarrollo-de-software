import { Component } from '@angular/core';
import { Producto } from '../interfaces/Producto';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  
  producto : Producto = {
    id:1,
    codigo:1234,
    nombre: 'producto 1',
    descripcion: 'Descripcion porducto 1',
    imagenProducto:'Url'
  };
 
}
