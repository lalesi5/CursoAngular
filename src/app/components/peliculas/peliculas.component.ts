import { Component, OnInit ,DoCheck, OnDestroy} from '@angular/core';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy{

  public titulo: string;

  constructor() {
    this.titulo = "Componente Peliculas"
    console.log("CONSTRUCTOR LANZADO");
   }

  ngOnInit(): void {
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

}
