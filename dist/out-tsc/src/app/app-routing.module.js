import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componente/bienvenida/bienvenida.component';
import { LoginComponent } from './componente/login/login.component';
import { ErrorComponent } from './componente/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
const routes = [
    { path: '', component: BienvenidaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: ErrorComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map