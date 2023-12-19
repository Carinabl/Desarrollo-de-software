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
import { FormProductoComponent } from './form-producto/form-producto.component';
import { FormOfertaComponent } from './form-oferta/form-oferta.component';
import { CuadroComponent } from './cuadro/cuadro.component';
import { FormPerfilComponent } from './form-perfil/form-perfil.component';



const routes: Routes = [
  {path: 'producto', component: ListaProductosComponent },
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
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductoComponent,
    ListaProductosComponent,
    FormProductoComponent,
    FormOfertaComponent,
    CuadroComponent,
    FormPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
