import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CargarScriptsService } from './services/cargar-scripts.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditTareaComponent } from './component/tasks/edit-tarea/edit-tarea.component';
import { TareaListaComponent } from './component/tasks/tarea-lista/tarea-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { TareaService } from './component/tasks/shared/tarea.service';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './component/semantic/footer/footer.component';
import { NavComponent } from './component/semantic/nav/nav.component';
import { HomeComponent } from './component/semantic/header/home.component';
import { AcordeonComponent } from './component/semantic/aside/acordeon.component';

@NgModule({
  declarations: [
    AppComponent,
    EditTareaComponent,
    TareaListaComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AcordeonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TareaService,
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
