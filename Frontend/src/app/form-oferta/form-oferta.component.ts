import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-oferta',
  templateUrl: './form-oferta.component.html',
  styleUrls: ['./form-oferta.component.css']
})
export class FormOfertaComponent implements OnInit{
  ngOnInit(): void {
    
  }
  
  frmOferta: FormGroup;

  constructor (
    private fb: FormBuilder
    ){
    this.frmOferta = this.fb.group({
      stock: ['', [Validators.required, Validators.pattern('[0-9]{1,4}')]],
      precio: ['', [Validators.required, Validators.pattern('/$[0-9,]+(.[0-9]{2})?/')]],
      vigencia: ['', Validators.required],
    })
  }
  onSubmit(){
    //alert("Se guardó");
    console.log(this.frmOferta);
    //console.log(this.frmProducto.value);
  }
  model: any;
  
}