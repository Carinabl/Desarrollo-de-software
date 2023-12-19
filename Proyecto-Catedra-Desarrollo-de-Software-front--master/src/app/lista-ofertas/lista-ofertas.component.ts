import { Component } from '@angular/core';
import { Oferta } from '../compPrincipal/interfaces/oferta';
import { ListaOfertasService } from '../lista-ofertas.service';
import { OfertaService } from '../oferta.service';

@Component({
  selector: 'app-lista-ofertas',
  templateUrl: './lista-ofertas.component.html',
  styleUrls: ['./lista-ofertas.component.css']
})
export class ListaOfertasComponent {
  ofertas: Oferta[] = [];
  ofertaSeleccionada: Oferta | null = null;
  
  constructor(private ofertaService: OfertaService, private listaOfertasService: ListaOfertasService) {
    
    this.ofertas = ofertaService.getListaOfertas();

  }
 
  // Expose the service methods to the template
  editarOferta(oferta: Oferta): void {
    this.listaOfertasService.editarOferta(oferta);
    this.ofertaSeleccionada = { ...oferta }; // Optionally set the selected offer in the component
  }

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
  
        // Reset the selected offer after saving changes
        this.ofertaSeleccionada = null;
      }
    }
}
