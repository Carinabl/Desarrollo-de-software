import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compPrincipal/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './compPrincipal/footer/footer.component';
import { ProductoComponent } from './compPrincipal/producto/producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaOfertasComponent } from './lista-ofertas/lista-ofertas.component';
import { OfertaComponent } from './compPrincipal/oferta/oferta.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { FormOfertaComponent } from './form-oferta/form-oferta.component';
import { VentaComponent } from './compPrincipal/venta/venta.component';
import { ListaVentasComponent } from './lista-ventas/lista-ventas.component';
import { HttpClientModule } from '@angular/common/http';
import { CuadroComponent } from './cuadro/cuadro.component';
import { ClienteComponent } from './compPrincipal/cliente/cliente.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path: 'producto', component: ListaProductosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductoComponent,
    ListaProductosComponent,
    ListaOfertasComponent,
    OfertaComponent,
    FormProductoComponent,
    FormOfertaComponent,
    VentaComponent,
    ListaVentasComponent,
    CuadroComponent,
    ClienteComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
