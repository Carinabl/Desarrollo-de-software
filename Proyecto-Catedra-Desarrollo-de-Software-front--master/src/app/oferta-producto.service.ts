import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertaProductoService {

  private productoSource = new BehaviorSubject<any>(null);
  producto$ = this.productoSource.asObservable();

  enviarProducto(producto: any) {
    this.productoSource.next(producto);
  }
}
