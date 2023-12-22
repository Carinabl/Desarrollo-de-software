import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor() { }

  private searchTermSource = new Subject<string>();
  searchTerm$ = this.searchTermSource.asObservable();
  
  // Método para emitir un término de búsqueda
  emitSearchTerm(searchTerm: string): void {
    this.searchTermSource.next(searchTerm);
  }
}
