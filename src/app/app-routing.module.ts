import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componente/bienvenida/bienvenida.component';
import { LoginComponent } from './componente/login/login.component';
import { ErrorComponent } from './componente/error/error.component';

const routes: Routes = [
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
