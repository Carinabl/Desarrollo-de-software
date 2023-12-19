import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaOfertasComponent } from './lista-ofertas/lista-ofertas.component';
import { ListaVentasComponent } from './lista-ventas/lista-ventas.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'listaProductos', component: ListaProductosComponent},
  {path: 'listaOfertas', component: ListaOfertasComponent},
  {path: 'listaVentas', component: ListaVentasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
