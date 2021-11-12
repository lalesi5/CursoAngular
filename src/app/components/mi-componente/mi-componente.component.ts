import { BoundElementPropertyAst } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html',
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){

        this.titulo = "Hola mundo, soy MI COMPONENTE";
        this.comentario = "Este es mi primer Componente";
        this.year = 2020;
        this.mostrarPeliculas = true;
        console.log("Componente Mi-Componente Cargado !!");
        console.log(this.titulo,this.comentario, this.year);
    }

    ocultarPeliculas(){
        this.mostrarPeliculas=false;
    }

}