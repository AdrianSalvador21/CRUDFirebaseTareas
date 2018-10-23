import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../servicios/tareas.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  mostrarLogin:boolean = true;

  constructor(public tareasService:TareasService) { }

  ngOnInit() {
  }

  ingresarCorreo(forma:NgForm){
    //console.log(forma.value);
    this.tareasService.loginCorreo(forma.value.correo, forma.value.contrasenia);
  }

  registrarCorreo(forma:NgForm){
    console.log(forma.value);
    this.tareasService.registrarUsuario(forma.value);
  }

}
