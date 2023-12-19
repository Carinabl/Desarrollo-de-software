import { Component } from '@angular/core';
import { Venta } from '../interfaces/venta';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent {
  venta: Venta = {
   id: 1,
   fecha: '01/01/2024',
   descripcion: '',
   montoTotal: 10.00
  }
}
