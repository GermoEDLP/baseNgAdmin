//Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulos propios
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';

//Modulos externos

//Componentes
import { AppComponent } from './app.component';

//Otros
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './system/error/error.component';

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
