import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos';

import { Home } from './components/home/home';

export const routes: Routes = [

    { path: '', component: Home },
    { path: 'productos', component: ProductosComponent }

];
