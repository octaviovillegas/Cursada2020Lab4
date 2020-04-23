import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../../clases/usuario';
@Component({
  selector: 'app-grilla-usuario',
  templateUrl: './grilla-usuario.component.html',
  styleUrls: ['./grilla-usuario.component.css']
})
export class GrillaUsuarioComponent implements OnInit {

  @Input() listadoUsuarios: Usuario[] ;
  @Output() usuarioSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = ['id', 'email'];
  dataSource = this.listadoUsuarios;

  constructor() {
  }

  ngOnInit() {
  }

  mostrarDetalles(usuario: Usuario) {
     this.usuarioSeleccionado.emit(usuario);
  }

}