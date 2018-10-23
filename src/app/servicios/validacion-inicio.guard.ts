import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TareasService } from './tareas.service';

@Injectable({
  providedIn: 'root'
})
export class ValidacionInicioGuard implements CanActivate {

  constructor(public tareasService:TareasService, private router: Router){}

  //(4)

  canActivate(){
    if(Object.entries(this.tareasService.usuario).length === 0){
      console.log('Bloqueado por el guard');
      this.router.navigate(['/inicio']);
      return false;
    }else{
      console.log('Paso el guard');
      return true;
    }
  }
}
