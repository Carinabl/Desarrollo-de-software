import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: Cliente[] = [];
  
  constructor() {
    this.agregarCliente(
      {
        id: 1,
        nombre: 'Jero',
        apellido: 'Molina',
        direccion: 'calle queteImporta'
      }
    )
    this.agregarCliente(
      {
        id: 2,
        nombre: 'Cari',
        apellido: 'Lopez',
        direccion: 'calle queteImporta2'
      }
    )
      this.agregarCliente(
        {
          id: 3,
          nombre: 'Pablo',
          apellido: 'Chesini',
          direccion: 'calle queteImporta3'
        }
      )
      this.agregarCliente(
        {
          id: 4,
          nombre: 'Dani',
          apellido: 'Bellingeri',
          direccion: 'calle queteImporta4'
        }
      )
    
   }

   getListaClientes(): Cliente[] {
    return this.clientes;
  }

  getClientePorId(clienteId: number): Cliente | undefined {
    return this.clientes.find(cliente => cliente.id === clienteId);
  }

  agregarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }
}
