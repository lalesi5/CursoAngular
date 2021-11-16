import { Component, OnInit ,DoCheck, OnDestroy} from '@angular/core';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy{

  public titulo: string;
  public peliculas: Array<any>;

  constructor() {
    this.titulo = "Componente Peliculas"
    this.peliculas =[
      {year: 2020, title: "Spiderman 4", image: './assets/images/Spider-Man.jpg'},
      {year: 2019, title: "Los vengadores", image: './assets/images/los vengadores.jpg'},
      {year: 2020, title: "Batman vs Superman", image: './assets/images/Batman-vs-Superman.jpg'},
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

}
