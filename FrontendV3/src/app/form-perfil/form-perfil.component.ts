import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-perfil',
  templateUrl: './form-perfil.component.html',
  styleUrls: ['./form-perfil.component.css']
})

export class FormPerfilComponent implements OnInit {
  ngOnInit(): void {
    
  }
  
  frmPerfil: FormGroup;

  constructor (
    private fb: FormBuilder
  ){
    this.frmPerfil = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern('[0-9]{8,12}')]],
      cuit: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      direccion: ['', Validators.required],
      cbu: ['']
    })

  }

  onSubmit(){
    //alert("Se guardó");
    console.log(this.frmPerfil);
    //console.log(this.frmProducto.value);

    const nombreControl: AbstractControl | null = this.frmPerfil.get('nombre');
    let error: ValidationErrors | null = null;

    if (nombreControl) {
    console.log('Valor del control nombre:', nombreControl.value);

    //Verificar la validación 'required'
    const isRequiredError: boolean = nombreControl.hasError('required');

    if (isRequiredError) {
    console.log('El campo nombre es requerido.');
    error = { required: true }; // Almacena el error en la variable 'error'
    }
  }
  }

  
}
