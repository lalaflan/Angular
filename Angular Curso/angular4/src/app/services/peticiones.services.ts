import { Injectable} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';



@Injectable()
export class PeticionesService{
getPrueba(){
    return 'Hola mundo desde el servicio. ';

}

}
