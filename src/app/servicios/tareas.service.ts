import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

//Firebase Prueba collection
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  //Variable para documento en especifico
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;
  
  //Varible para almacenar al usuario
  public usuario: any = {};

  //Variables para obtener collecion y para guardar collection
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  public tareas: any[]; 

  constructor(public afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
        this.tareas = [];
      
    //(2) Verifica Auth
        this.afAuth.authState.subscribe( user =>{
           if(!user){
             //(3) router.navigate(['inicio'])
              return;
           }
           this.usuario.nombre = user.displayName;
           this.usuario.uid = user.uid;
           this.usuario.email = user.email;
           console.log(this.usuario);
           this.router.navigate(['/']);  

           //Enlazar la collection y obtener los datos del usuario
           this.obtenerTareas();

        });
  }

  // (5) General
  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
    this.router.navigate(['/inicio']);
  }
  
  //Login Social (1)
  loginGoogle(proveedor:string) {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      (resultado) => {
        this.router.navigate(['/']);
      }
    );
  }

  loginFacebook(){
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
       usuario => {
         console.log(usuario);
       }     
    )
  }
  
  //Registro correo
  registrarUsuario(usuario){
    this.afAuth.auth.createUserWithEmailAndPassword(usuario.correo, usuario.contrasenia).then(resultado => {
      //Resultado positivo para registro con correo y pass

      //Modificar nombre y ruta de imagen al registrar
      this.afAuth.authState.subscribe(user =>{
        user.updateProfile({
          displayName: usuario.nombre,
          photoURL: "./"
        })
      })
    }).catch(err => {
      //Correo invalido o ya registrado
    });
  }

  //Login correo
  loginCorreo(correo, pass){
    this.afAuth.auth.signInWithEmailAndPassword(correo, pass).then(resultado => {
      //Correo y contraseña correctos
      this.router.navigate(['/']);
    }).catch(err => {
      //Contraseña o correo invalido
    });
  }

  obtenerTareas(){
    this.itemsCollection = this.afs.collection<any>('tareas', ref => ref.where('uid', '==', this.usuario.uid));
    this.items = this.itemsCollection.snapshotChanges();
    this.items.subscribe(res => {
      this.tareas = [];
      res.forEach(val => {
       //console.log(val.payload.doc.data()); //Asi obtenemos cada uno de los registros en un objeto
       //console.log(val.payload.doc.id); //asi obtenemos los keys de cada accion
       let documento = val.payload.doc.data();
       documento['id_documento'] = val.payload.doc.id;
       this.tareas.push(documento);
       console.log(this.tareas);
      })
    });
  }


  crearTarea(tarea:any){
    this.itemsCollection.add({
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
      prioridad: tarea.prioridad,
      uid: this.usuario.uid
    }).then(resultado => {
      console.log('Tarea guardada');
    }).catch(err => {
      console.log('Ha ocurrido un error');
    });
  }


  eliminarTarea(id_tarea){
    this.itemDoc = this.afs.doc<any>('tareas/' + id_tarea);
    this.item = this.itemDoc.valueChanges();

    this.itemDoc.delete();
  }
  
}
