import { Injectable } from '@angular/core';
import { OfertaComponent } from './oferta.component';
import { Oferta } from '../interfaces/oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  ofertaComponent: OfertaComponent [] = [];
  ultimoId: number=0;
  private ofertas: Oferta[] = [];
  
  constructor() { 
    this.agregarOferta(
      {
        id: 1,
        stock: 10,
        descripcion: "libro de aventuras",
        precio: 5000.00,
        vigencia: '02/03/2024'
      }
    )
    this.agregarOferta(
      {
        id: 2,
        stock: 10,
        descripcion: "libro de terror",
        precio: 6000.00,
        vigencia: '02/02/2024'
      }
    )
  }
  

  getListaOfertas(): Oferta[] {
    return this.ofertas;
  }

  agregarOferta(oferta: Oferta): void {
    this.ofertas.push(oferta);
  }
}
