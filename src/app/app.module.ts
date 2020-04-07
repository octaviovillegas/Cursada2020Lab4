import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componente/bienvenida/bienvenida.component';
import { LoginComponent } from './componente/login/login.component';
import { ErrorComponent } from './componente/error/error.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { MenuTipoUnoComponent } from './componentes/navBar/menu-tipo-uno/menu-tipo-uno.component';
import { MenuTipoDosComponent } from './componentes/navBar/menu-tipo-dos/menu-tipo-dos.component';
import { ItemsGlobalesComponent } from './componentes/navBar/items-globales/items-globales.component';
import { RegistroComponent } from './pages/registro/registro.component';
@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    MenuTipoUnoComponent,
    MenuTipoDosComponent,
    ItemsGlobalesComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
