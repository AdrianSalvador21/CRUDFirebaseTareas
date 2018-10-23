import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../../servicios/tareas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public tareasService:TareasService) { }

  ngOnInit() {
  }

}
