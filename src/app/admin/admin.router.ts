//Modulos de Angular
import { Routes, RouterModule } from '@angular/router';

//Modulos propios

//Modulos externos

//Componentes
import { AdminComponent } from './admin.component';
import { ControlComponent } from './control/control.component';

//Otros

const admin_routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'control', component: ControlComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'control' },
    ],
  },
];

export const AdminRoutes = RouterModule.forChild(admin_routes);
