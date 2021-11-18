import { Component, OnInit ,DoCheck, OnDestroy} from '@angular/core';
import {Pelicula} from "../../models/pelicula";
import {inlineLocales} from "@angular-devkit/build-angular/src/utils/process-bundle";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy{

  public titulo: string;
  public peliculas: Array<Pelicula>;
  // @ts-ignore
  public favorita: Pelicula;

  constructor() {
    this.titulo = "Componente Peliculas"
    this.peliculas =[
      new Pelicula("Spiderman 4",2020,'./assets/images/Spider-Man.jpg'),
      new Pelicula("Los vengadores",2019,'./assets/images/los vengadores.jpg'),
      new Pelicula("Batman vs Superman",2020,'./assets/images/Batman-vs-Superman.jpg'),
    ];
    console.log("CONSTRUCTOR LANZADO");
   }

  ngOnInit(): void {
    console.log(this.peliculas);
    console.log("Componente iniciado");
  }

  ngDoCheck(){
    console.log("Docheck lanzado")
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado";
  }

  ngOnDestroy(){
    console.log("El componente se va a eliminar");
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }

}
