import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Formularios
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { CompletadasComponent } from './components/completadas/completadas.component';

// Rutas
import { APP_ROUTING } from './app.routes';
import { PendientesComponent } from './components/pendientes/pendientes.component';

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
    AngularFireDatabaseModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
