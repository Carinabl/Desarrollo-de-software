import { Component, OnInit } from '@angular/core';
import { Oferta } from '../compPrincipal/interfaces/oferta';
import { ListaOfertasService } from '../lista-ofertas.service';
import { OfertaService } from '../oferta.service';


@Component({
  selector: 'app-lista-ofertas',
  templateUrl: './lista-ofertas.component.html',
  styleUrls: ['./lista-ofertas.component.css']
})
export class ListaOfertasComponent implements OnInit{
  ofertas: Oferta[] = [];
  ofertaSeleccionada: Oferta = { id: 0, codigo: 0, stock: 0, descripcion:'', precio: 0, vigencia:''};
 

  constructor(private ofertaService: OfertaService, private listaOfertasService: ListaOfertasService) {
    
    this.ofertas = ofertaService.getListaOfertas();

  }
  
  ngOnInit() {}

  

    // Call the guardarOferta method without passing any arguments
    guardarOferta(): void {
      if (this.ofertaSeleccionada) {
        // Save the edited product using the service method
        this.listaOfertasService.guardarOferta();
  
        // Optionally, update the local products list
        const updatedOffers = this.ofertas.map(oferta => {
          return oferta.id === this.ofertaSeleccionada?.id ? { ...this.ofertaSeleccionada } : oferta;
        });
        this.ofertas = [...updatedOffers];
      }
    }

   
}
