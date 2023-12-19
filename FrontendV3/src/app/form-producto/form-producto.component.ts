import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})

export class FormProductoComponent implements OnInit {
  ngOnInit(): void {
    
  }
  
  frmProducto: FormGroup;

  constructor (
    private fb: FormBuilder
  ){
    this.frmProducto = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      codigo: ['', [Validators.required, Validators.pattern('[0-9]{3,12}')]],
      descripcion: ['', Validators.required],
      categoria: ['']
    })

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
  }
  }

  
}




