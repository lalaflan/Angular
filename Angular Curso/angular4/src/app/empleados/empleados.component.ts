import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({

   selector: 'Empleado',
   templateUrl: './empleados.component.html'

})

export class empleadosComponent {
   public nombre_componente = 'Asesinos del mes';

   public empleado: Empleado;
   public trabajadores: Array<Empleado>;
   public trabajador_externo: boolean;
   public color: string;
   public color_seleccionado:string;

   constructor() {
      this.empleado = new Empleado('Maria la del barrio', 15, 'Asesina serial', true);
      this.trabajadores = [
         new Empleado('Jose Maria', 44, 'Lanza profesional', false),
         new Empleado('Mario hugo', 15, 'Mechero', true),
         new Empleado('Helena', 76, 'Violencia de Genero ', false)

      ];
      this.trabajador_externo = true;
      this.color = 'blue';
      this.color_seleccionado ='#ccc';
      
   }

   ngOnInit() {

      console.log(this.empleado);
      console.log(this.trabajadores);
   }

   cambiarExterno(valor) {
      this.trabajador_externo = valor;
   }

   logColorSeleccionado(){
      console.log(this.color_seleccionado);
   }
}
