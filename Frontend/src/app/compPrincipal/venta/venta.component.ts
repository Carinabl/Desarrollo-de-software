import { Component } from '@angular/core';
import { Venta } from '../interfaces/venta';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent {
  venta: Venta = {
   id: 0,
   fecha: '',
   descripcion: '',
   montoTotal: 10.00,
   id_cliente: 0
  }
}
