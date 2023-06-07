import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../../services/cargar-scripts.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })

  export class HomeComponent implements OnInit{
    msg_1: string= ' Es una gran aplicacion para organizar tus ideas y proyectos visualmente. Tiene la funcionalidad completa de una aplicación para tomar notas y el espacio visual de una pizarra pero con un lienzo limitado  ';
    constructor(_CargarScripts: CargarScriptsService) {
      _CargarScripts.Carga([""]);
    }
    ngOnInit(): void {}
}

