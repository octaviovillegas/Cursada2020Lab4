import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario;
  constructor(private rutas:Router) { 
    this.usuario= new Usuario();
  }

  ngOnInit() {

  }
 
  
  Ingresar() {
    console.log(this.usuario);

    if (this.usuario.email === 'admin@mail.com' && this.usuario.pass === '1234') {
      // tiene que llevar a home
      this.rutas.navigate(['home']);
    } else {
      // tiene que llevar a Error
      this.rutas.navigate(['error']);
    }

  }
}
