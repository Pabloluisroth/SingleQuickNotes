import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../../services/cargar-scripts.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
  })

export class NavComponent implements OnInit {
  msg_1: string= 'Descubre lo que';
  msg_2: string= 'Single Quick Notes';
  msg_3: string= 'puede hacer por ti ';

    constructor(_CargarScripts: CargarScriptsService) {
      _CargarScripts.Carga(["message"]);
    }
    ngOnInit(): void {}
}

