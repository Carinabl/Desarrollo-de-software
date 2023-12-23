import { Component } from '@angular/core';
import { ProductosService } from '../compPrincipal/producto/productos.service'; 
import { Producto } from '../compPrincipal/interfaces/Producto';
import { HttpParams } from '@angular/common/http';
import { OfertaProductoService } from '../oferta-producto.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BusquedaService } from '../busqueda.service';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from '../compPrincipal/oferta/oferta.service';
import { Oferta } from '../compPrincipal/interfaces/oferta';
import { ListaOfertasService } from '../lista-ofertas.service';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  productos: Producto[] = [];
  productoSeleccionado: Producto= { id: 0, nombre: '', descripcion: '' };
  
  ofertas: Oferta[] = [];
  ofertaSeleccionada: Oferta = { id: 0, stock: 0, descripcion:'', precio: 0, vigencia:'', producto_id: 0};
  
  constructor(
    private productoService: ProductosService, 
    private ofertaProductoService: OfertaProductoService, 
    private modalService: NgbModal,
    private busquedaService: BusquedaService,
    private route: ActivatedRoute,
    private ofertaService: OfertaService,
    private listaOfertasService: ListaOfertasService
    ) {
      this.ofertas = ofertaService.getListaOfertas();
    }
  
  ngOnInit() {
    this.busquedaService.searchTerm$.subscribe(searchTerm => {
      if (searchTerm) {
        this.filtrarProductos(searchTerm);
      } else {
        this.cargarListaProductos();
      }
    });

    //consigue la lista de productos para mostrar en la tabla
    this.productoService.getProductos().subscribe((productos: Producto[]) => {
      console.log("Productos: ", productos);
      this.productos = productos;
    });
  }

  editarProducto(id: number): void {
    console.log(`Editar producto con ID: ${id}`);
    const productoElegido = this.productos.find(p => p.id === id);
    console.log("Producto a elegir: ", productoElegido);
    if (productoElegido) {
      this.productoSeleccionado = productoElegido;
      console.log(this.productoSeleccionado);
    } else {
      console.error(`No se encontró un producto con ID ${id}`);
    }
  }

  guardar(): void {
    if (this.productoSeleccionado) {
      const params = new HttpParams()
        .set('nombre', this.productoSeleccionado.nombre || '')
        .set('descripcion', this.productoSeleccionado.descripcion || '');
      console.log(params);
      this.productoService.actualizar(this.productoSeleccionado.id, params).subscribe({
        next: (response) => {
          console.log('Respuesta del servidor:', response);
          // Recargar la lista de productos
          this.cargarListaProductos();

          // Cierra el modal después de guardar
          this.modalService.dismissAll();
        },
        error: (error) => {
          console.error('Error al actualizar el producto:', error);
        }
      });
    }
  }
  
  cargarListaProductos() {
    this.productoService.getProductos().subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
  }

  seleccionarProducto(producto: Producto): void {
    // Almacena el producto seleccionado para su posterior uso en la creación de la oferta
    this.ofertaProductoService.enviarProductoSeleccionado(producto);
  }


   // Función para filtrar productos en la barra de búsqueda
   filtrarProductos(searchTerm: string): void {
    this.productoService.getProductos().subscribe((productos: Producto[]) => {
      this.productos = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  } 



    //relacion con la oferta
    agregarOfertaAProducto(id: number): void {
      //obtener el producto
      const productoElegido = this.productos.find(p => p.id === id);
      if (productoElegido) {
        this.productoSeleccionado = productoElegido;
        console.log(this.productoSeleccionado);
      } else {
        console.error(`No se encontró un producto con ID ${id}`);
      }
      console.log("ID del producto seleccionado", this.productoSeleccionado.id);
      // Llama al servicio para agregar una nueva oferta al producto específico
      this.ofertaService.agregarOferta(
        {
          id: this.ofertaService.ultimoId + 1,
          stock: 10,
          descripcion: "Nueva oferta para el producto",
          precio: 100.00,
          vigencia: '01/01/2025',
          producto_id: this.productoSeleccionado.id
        },
        this.productoSeleccionado
      );

      
  }
}