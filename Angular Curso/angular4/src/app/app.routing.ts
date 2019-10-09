import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes

import { frutaComponent } from './frutita/fruta.component';
import { empleadosComponent } from './empleados/empleados.component';
import { homeComponent } from './home/home.component';
import { contactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

const appRoutes: Routes = [
    {path: '', component: homeComponent},
    {path: 'empleados', component:empleadosComponent},
    {path: 'fruta', component: frutaComponent},
    {path: 'pagina-principal', component: homeComponent},
    {path: 'contacto', component: contactoComponent},
    {path: 'contacto/:page', component: contactoComponent},
    {path: 'coches', component: CochesComponent},
    {path: '**', component: homeComponent}



];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)// es para que tome todos los parametros anteriores;
