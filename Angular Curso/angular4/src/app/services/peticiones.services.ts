import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class PeticionesServices{

    getPrueba(){
        return 'Ola que tal';
    }
}

