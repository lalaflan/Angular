import{ Component } from '@angular/core';

@Component({

    selector: 'fruta',
    templateUrl:'./fruta.component.html'

})
export class frutaComponent{
 public nombre_componente = 'Componente fruta'
 public listado_frutas= 'Naranja, Manzana, Pera y Sandia'


 public nombre:string;
 public edad:number;

 comodin:any;

 constructor(){
this.nombre='Tengo sueño';
this.edad=1;

 }

 ngOnInit(){
this.cambiarNombre();
this.cambiarEdad(45);
console.log(this.nombre + " "+ this.edad);

//Variables y alcance

var uno=8;
var dos=15;

if (uno ==8){
    let uno=3;
    var dos=88;
console.log("ocho"+uno);
}

 }
 cambiarNombre(){
     this.nombre= 'Maria ';
     
 }
 cambiarEdad(edad){
    this.edad= 13;
    
}

}