import { Injectable } from '@angular/core';
import { Venta } from './compPrincipal/interfaces/venta';

@Injectable({
  providedIn: 'root'
})
export class ListaVentasService {

  private ventas: Venta[] = [];
  
  constructor() { }

  getListaVentas(): Venta[] {
    return this.ventas;
  }
}
