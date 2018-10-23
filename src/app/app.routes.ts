import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InicioComponent } from './components/inicio/inicio.component';
import { CompletadasComponent } from './components/completadas/completadas.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { ValidacionInicioGuard } from './servicios/validacion-inicio.guard';

// const ROUTES: Routes = [
//     { path: 'inicio', component: InicioComponent },
//     { path: 'tareas', component: TareasComponent },
//     { path: 'completados', component: CompletadasComponent },
//     { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
// ];

const ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: '', component: TareasComponent, children: 
        [
            {path: 'pendientes', component: PendientesComponent},
            {path: 'completadas', component: CompletadasComponent},
            {path: '**', pathMatch: 'full', redirectTo: 'pendientes'}
        ], 
        canActivate:[ValidacionInicioGuard] 
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);