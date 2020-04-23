import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componente/bienvenida/bienvenida.component';
import { LoginComponent } from './componente/login/login.component';
import { ErrorComponent } from './componente/error/error.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
/* import { AdminComponent } from './pages/input/admin/admin.component';
import { TablaAlumnoComponent } from './pages/input/tabla-alumno/tabla-alumno.component';
import { DetalleAlumnoComponent } from './pages/input/detalle-alumno/detalle-alumno.component';
import { FormAlumnoComponent } from './pages/input/form-alumno/form-alumno.component';
import { FormMateriaComponent } from './pages/input/materia/form-materia/form-materia.component';
import { DetalleMateriaComponent } from './pages/input/materia/detalle-materia/detalle-materia.component';
import { TablaMateriaComponent } from './pages/input/materia/tabla-materia/tabla-materia.component';
import { ListadoMateriaComponent } from './pages/input/materia/listado-materia/listado-materia.component';
import { ListadoAlumnoComponent } from './pages/input/alumno/listado-alumno/listado-alumno.component';
*/
import { ModuloInputOutPutModule } from './pages/input/modulo-input-out-put/modulo-input-out-put.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { GrillaUsuarioComponent } from './page/material/grilla-usuario/grilla-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    GrillaUsuarioComponent
    /*AdminComponent,
    TablaAlumnoComponent,
    DetalleAlumnoComponent,
    FormAlumnoComponent,
    FormMateriaComponent,
    DetalleMateriaComponent,
    TablaMateriaComponent,
    ListadoMateriaComponent,
    ListadoAlumnoComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModuloInputOutPutModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
