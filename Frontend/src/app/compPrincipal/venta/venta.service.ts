import { Injectable } from '@angular/core';
import { VentaComponent } from './venta.component';
import { Venta } from '../interfaces/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
 
  private ventas: Venta[] = [];

  constructor() {
    this.agregarVenta (
      {
        id: 1,
        fecha: '01/01/2024',
        descripcion: 'una venta',
        montoTotal: 200.00,
        id_cliente: 1
     }
    )
    this.agregarVenta (
      {
        id: 2,
        fecha: '02/01/2024',
        descripcion: 'una venta2',
        montoTotal: 500.00,
        id_cliente: 2
     }
    )
    this.agregarVenta (
      {
        id: 3,
        fecha: '03/01/2024',
        descripcion: 'una venta3',
        montoTotal: 2500.00,
        id_cliente: 3
     }
    )
    this.agregarVenta (
      {
        id: 4,
        fecha: '04/01/2024',
        descripcion: 'una venta4',
        montoTotal: 700.00,
        id_cliente: 4
     }
    )
    this.agregarVenta (
      {
        id: 5,
        fecha: '05/01/2024',
        descripcion: 'una venta5',
        montoTotal: 1000.00,
        id_cliente: 2
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
