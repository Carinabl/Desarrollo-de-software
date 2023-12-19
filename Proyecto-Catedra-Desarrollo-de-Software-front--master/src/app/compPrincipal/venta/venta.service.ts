import { Injectable } from '@angular/core';
import { VentaComponent } from './venta.component';
import { Venta } from '../interfaces/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  ventaComponent: VentaComponent [] = [];
  private ventas: Venta[] = [];

  constructor() {
    this.agregarVenta (
      {
        id: 1,
        fecha: '01/01/2024',
        descripcion: 'una venta',
        montoTotal: 200.00
     }
    )
    this.agregarVenta (
      {
        id: 2,
        fecha: '02/01/2024',
        descripcion: 'una venta2',
        montoTotal: 500.00
     }
    )
  }

  getListaVentas(): Venta[] {
    return this.ventas;
  }

  agregarVenta(venta: Venta): void {
    this.ventas.push(venta);
  }
}
