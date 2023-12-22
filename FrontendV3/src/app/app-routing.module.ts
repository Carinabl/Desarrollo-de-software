import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { FormOfertaComponent } from './form-oferta/form-oferta.component';
const routes: Routes = [
  {
    component: HomeComponent,
    path:'home'// aca va la ruta de la pagina principal
  },
  {
    component: FormProductoComponent,
    path: 'formProducto' // ruta del formulario de productos 
  },
  {
    component: FormOfertaComponent,
    path: 'formOferta' // ruta del formulario de oferta 
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
