import { Injectable } from '@angular/core';
import { OfertaComponent } from './oferta.component';
import { Oferta } from '../interfaces/oferta';
import { Producto } from '../interfaces/Producto';
import { ListaProductosComponent } from 'src/app/lista-productos/lista-productos.component';
import { ProductoComponent } from '../producto/producto.component';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  ofertaComponent: OfertaComponent [] = [];
  ultimoId: number=0;
  private ofertas: Oferta[] = [];
  
  constructor() { }
  

  getListaOfertas(): Oferta[] {
    return this.ofertas;
  }

  agregarOferta(oferta: Oferta, producto: Producto): void {
    // Asocia la oferta con un producto específico
    oferta.producto_id = producto.id;
    this.ofertas.push(oferta);
  }
}
