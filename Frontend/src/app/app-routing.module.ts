import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaOfertasComponent } from './lista-ofertas/lista-ofertas.component';
import { ListaVentasComponent } from './lista-ventas/lista-ventas.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'listaProductos', component: ListaProductosComponent},
  {path: 'listaOfertas', component: ListaOfertasComponent},
  {path: 'listaVentas', component: ListaVentasComponent},
  {path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
