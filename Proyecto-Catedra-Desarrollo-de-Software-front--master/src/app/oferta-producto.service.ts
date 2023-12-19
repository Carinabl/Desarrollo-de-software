import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './compPrincipal/interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class OfertaProductoService {

  private productoSeleccionadoSource = new BehaviorSubject<Producto | null>(null);
  productoSeleccionado$ = this.productoSeleccionadoSource.asObservable();

  enviarProductoSeleccionado(producto: Producto): void {
    this.productoSeleccionadoSource.next(producto);
  }
}
