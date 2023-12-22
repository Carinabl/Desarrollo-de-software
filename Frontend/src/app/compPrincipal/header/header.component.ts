import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { BusquedaService } from 'src/app/busqueda.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  search = new FormControl('');
 

  constructor(
    private busquedaService: BusquedaService,
    private router: Router
    ){}

  ngOnInit(){
    //Obtener los valores escritos en el buscador
    this.search.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(value => {
      if (value !== null) {
        this.busquedaService.emitSearchTerm(value);
        console.log(value);

         // Navegar a la ruta 'lista-productos' con el término de búsqueda como parámetro
         this.router.navigate(['/lista-productos'], { queryParams: { searchTerm: value } });
        
      }
    }); 
  }

  buscar() {
    const searchTerm = this.search.value;
    if (searchTerm !== null) {
      this.busquedaService.emitSearchTerm(searchTerm);

      // Desde un componente en el mismo nivel
        this.router.navigate(['listaProductos'], { queryParams: { searchTerm: searchTerm } });

      // O desde cualquier nivel
      this.router.navigate(['/listaProductos'], { queryParams: { searchTerm: searchTerm } });
    }
  }

}
