import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    UsuarioComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
