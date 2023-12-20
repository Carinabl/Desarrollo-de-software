import { Injectable } from '@angular/core';
import { Oferta } from './compPrincipal/interfaces/oferta';

@Injectable({
  providedIn: 'root'
})
export class ListaOfertasService {

  private ofertas: Oferta[] = [];
  ofertaSeleccionada: Oferta | null = null;

  constructor() { }

  getListaOfertas(): Oferta[] {
    return this.ofertas;
  }

  editarOferta(oferta: Oferta): void {
    // Guarda la oferta seleccionada para editarla
    this.ofertaSeleccionada = { ...oferta };
    console.log(this.ofertaSeleccionada);
  }
  
  guardarOferta(): void {
    const updatedOffers = this.ofertas.map(oferta => {
      return oferta.id === this.ofertaSeleccionada?.id ? { ...this.ofertaSeleccionada } : oferta;
    });
    //console.log(updatedOffers);
    this.ofertas = [...updatedOffers];
    this.ofertaSeleccionada = null;
  }
}

