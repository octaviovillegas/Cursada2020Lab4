import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../clases/alumno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu = 0;
  title = 'Home';
  usuario = new Alumno('lalala', 'lalaal', 666);
  listadoPrincipal: Alumno[];
  usuarioSeleccionado: Alumno;

  constructor() {
    this.listadoPrincipal = [
      { nombre: 'admin@mail.com' , apellido: '1234', legajo: 1 },
      { nombre: 'usuario@mail.com' , apellido: 'rogelio', legajo : 3 },
    ];
   }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  tomarUsuarioCreado(nuevoUsuario: Alumno) {
    this.listadoPrincipal.push(nuevoUsuario);
  }

  tomarUsuarioParaDetalles(nuevoUsuario: Alumno) {
    this.usuarioSeleccionado = nuevoUsuario;
  }

  Acceder(opcion) {
    this.menu = opcion;
    this.title = opcion === 1 ? 'Paises' : 'Administrador';
  }


}
