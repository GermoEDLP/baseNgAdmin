//Modulos de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos propios

//Modulos externos

//Componentes
import { AdminComponent } from './admin.component';
import { ControlComponent } from './control/control.component';

//Rutas
import { AdminRoutes } from './admin.router';

const comp = [
  AdminComponent,
  ControlComponent
]

@NgModule({
  declarations: comp,
  imports: [CommonModule, AdminRoutes],
  exports: comp
})
export class AdminModule {}
