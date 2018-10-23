import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../servicios/tareas.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {

  usuario:any;

  constructor(public tareasService:TareasService) { 
    this.usuario = tareasService.usuario;
    //console.log(this.usuario);
  }

  ngOnInit() {
  }

  registrarTarea(forma:NgForm){
      console.log(forma.value);
      this.tareasService.crearTarea(forma.value);
  }  

}
