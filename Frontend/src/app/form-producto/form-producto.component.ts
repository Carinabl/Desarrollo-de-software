import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Producto } from '../compPrincipal/interfaces/Producto';
import { ProductosService } from '../compPrincipal/producto/productos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})

export class FormProductoComponent implements OnInit {
  productoService: any;
  ngOnInit(): void {}
  
  frmProducto: FormGroup;

  constructor (private fb: FormBuilder, private productoS: ProductosService){
    
    this.frmProducto = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', Validators.required],
      categoria: [null]
    });

    
  }


  onSubmit(){
    //alert("Se guardó");
    console.log(this.frmProducto);
    //console.log(this.frmProducto.value);

    const nombreControl: AbstractControl | null = this.frmProducto.get('nombre');
    let error: ValidationErrors | null = null;

    if (nombreControl) {
      console.log('Valor del control nombre:', nombreControl.value);

      // Verificar la validación 'required'
      const isRequiredError: boolean = nombreControl.hasError('required');

      if (isRequiredError) {
      console.log('El campo nombre es requerido.');
      error = { required: true }; // Almacena el error en la variable 'error'
      }

      //logica para agregar producto nuevo luego de presionar boton submit
      const nuevoProducto: Producto = this.frmProducto.value;
      console.log(nuevoProducto);
      this.productoS.crearProducto(nuevoProducto).subscribe(() => {
      // Agregar el nuevo producto localmente
      this.productoS.agregarProducto(nuevoProducto);
    
      // Después de agregar el producto, puedes recargar la lista de productos
      this.productoS.getProductos().subscribe((productos: Producto[]) => {
        console.log(productos);
        // Actualiza la lista de productos en tu componente
        });
      });
    }
  }


  abrirMensaje(): void{
    Swal.fire({
      title: "¿Desea confirmar los cambios?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: "No guardar" //ver que no guarde 
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("¡Guardado con exito!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se guardaron los cambios", "", "info");
      }
    });
    }
}