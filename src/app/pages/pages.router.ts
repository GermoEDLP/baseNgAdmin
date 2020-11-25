//Modulos de Angular
import { Routes, RouterModule } from '@angular/router';

//Modulos propios

//Modulos externos

//Componentes
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

//Otros

const pages_routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {path: '', component: HomeComponent}
    ],
  },
];

export const PagesRoutes = RouterModule.forChild(pages_routes);
