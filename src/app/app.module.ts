import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Formularios
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

//Servicios
import {TareasService} from "./servicios/tareas.service";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { CompletadasComponent } from './components/completadas/completadas.component';

// Rutas
import { APP_ROUTING } from './app.routes';
import { PendientesComponent } from './components/pendientes/pendientes.component';

//Guard
import { ValidacionInicioGuard } from './servicios/validacion-inicio.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    TareasComponent,
    CompletadasComponent,
    PendientesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TareasService,
    ValidacionInicioGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
