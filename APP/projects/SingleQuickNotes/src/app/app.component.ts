import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './services/cargar-scripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  title = 'Generador de Notas';
  element = false; 

  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }

  constructor(_CargarScripts:CargarScriptsService)
  {
    _CargarScripts.Carga(["removeComponent"]);
  }
  ngOnInit(): void {}
}
