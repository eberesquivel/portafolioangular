import { RouterModule, Routes } from '@angular/router';

import{
  AboutComponent,
  PortafolioComponent,
  ProductosComponent
} from "./components/index.paginas";

const app_routes: Routes = [
  { path: 'inicio', component: PortafolioComponent },
  { path: 'acerca', component: AboutComponent },
  { path: 'productos/:id', component: ProductosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
