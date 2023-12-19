import { Component } from '@angular/core';
import { Oferta } from '../interfaces/oferta';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
  export class OfertaComponent {
    oferta: Oferta = {
      id: 1,
      codigo: 1,
      stock: 10,
      descripcion: '',
      precio: 20.00,
      vigencia: ''
  }
  
}
