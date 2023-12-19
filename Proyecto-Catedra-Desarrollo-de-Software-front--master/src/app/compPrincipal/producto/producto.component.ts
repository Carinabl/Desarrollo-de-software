import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../interfaces/Producto';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{
  @Input() producto: Producto = {
    id: 0,
    nombre: '',
    descripcion: ''
  };
   
  constructor(productoService: ProductosService){}
  
  ngOnInit(): void {}
}
