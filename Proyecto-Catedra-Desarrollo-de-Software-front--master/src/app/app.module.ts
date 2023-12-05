import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compPrincipal/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './compPrincipal/footer/footer.component';
import { ProductoComponent } from './compPrincipal/producto/producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { RouterModule, Routes } from '@angular/router';

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
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
