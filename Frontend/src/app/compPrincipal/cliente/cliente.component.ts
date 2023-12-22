import { Component, Input } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
    @Input() cliente: Cliente = {
      id: 0,
      nombre: '',
      apellido: '',
      direccion: ''
    }
}
