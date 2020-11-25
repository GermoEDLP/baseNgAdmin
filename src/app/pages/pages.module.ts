//Modulos de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos propios

//Modulos externos

//Componentes
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

//Rutas
import { PagesRoutes } from './pages.router';

const comp = [
  PagesComponent,
  HomeComponent
]

@NgModule({
  declarations: comp,
  imports: [CommonModule, PagesRoutes],
  exports: comp
})
export class PagesModule {}
