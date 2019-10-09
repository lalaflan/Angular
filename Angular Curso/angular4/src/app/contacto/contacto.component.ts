import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html'

})

export class contactoComponent{
    public titulo = "Pagina de Contacto";
    public parametro;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}
    ngOnInit(){
this._route.params.forEach((params: Params) => {
this.parametro = params['page'];
console.log(params);
});
    }
    redirigir(){
        this._router.navigate(['/contacto','www.google.cl']);
    }
    redirigirDos(){
        this._router.navigate(['/pagina-principal']);
    }
}