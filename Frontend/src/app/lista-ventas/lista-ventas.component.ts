import { Component } from '@angular/core';
import { VentaService } from '../compPrincipal/venta/venta.service';
import { ListaVentasService } from '../lista-ventas.service';
import { Venta } from '../compPrincipal/interfaces/venta';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.css']
})
export class ListaVentasComponent {
  ventas: Venta[] = [];

  constructor(private ventaService: VentaService, private listaVentasService: ListaVentasService) {
    
    this.ventas = this.ventaService.getListaVentas();

  } 

}
