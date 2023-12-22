import { Component } from '@angular/core';
import { VentaService } from '../compPrincipal/venta/venta.service';
import { ListaVentasService } from '../lista-ventas.service';
import { Venta } from '../compPrincipal/interfaces/venta';
import { ClienteService } from '../compPrincipal/cliente/cliente.service';
import { Cliente } from '../compPrincipal/interfaces/Cliente';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.css']
})
export class ListaVentasComponent {
  ventas: Venta[] = [];
  clientes: Cliente[] = [];
  ventaSeleccionada: Venta | null = null;
 
  constructor(private ventaService: VentaService, private listaVentasService: ListaVentasService, public clienteService: ClienteService) {
    
    this.ventas = this.ventaService.getListaVentas();
    this.clientes = this.clienteService.getListaClientes();
    console.log(this.clientes);
    console.log(this.ventas);
  } 


  verCliente(venta: Venta): void {
    this.ventaSeleccionada = venta;
  }

  obtenerClientePorId(clienteId: number): Cliente | undefined {
    return this.clientes.find(cliente => cliente.id === clienteId);
  }

  obtenerNombreCliente(): string {
  return this.ventaSeleccionada?.id_cliente
    ? this.obtenerClientePorId(this.ventaSeleccionada.id_cliente)?.nombre ?? 'No disponible'
    : 'No disponible';
  }

  obtenerApellidoCliente(): string {
    return this.ventaSeleccionada?.id_cliente
      ? this.obtenerClientePorId(this.ventaSeleccionada.id_cliente)?.apellido ?? 'No disponible'
      : 'No disponible';
  }

  obtenerDireccionCliente(): string {
    return this.ventaSeleccionada?.id_cliente
      ? this.obtenerClientePorId(this.ventaSeleccionada.id_cliente)?.direccion ?? 'No disponible'
      : 'No disponible';
  }
  
 
}

/*
explicación método obtenerNombreCliente():
 Si this.ventaSeleccionada?.id_cliente es truthy, se llama a this.obtenerClientePorId para obtener el cliente correspondiente al id_cliente. Luego, se utiliza el operador de fusión nula nuevamente (?.) para acceder a la propiedad nombre del cliente. Si el cliente o su propiedad nombre es null o undefined, la expresión se evaluará a undefined.Si this.ventaSeleccionada?.id_cliente es falsy (null o undefined), la función devuelve 'No disponible'. En caso contrario, devuelve el nombre del cliente o 'No disponible' si no se puede obtener.

*/