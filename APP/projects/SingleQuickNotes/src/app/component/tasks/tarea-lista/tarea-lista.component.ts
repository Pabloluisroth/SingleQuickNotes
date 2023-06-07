import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TareaModel } from '../shared/tarea.model';
import { TareaService } from '../shared/tarea.service';
import { CargarScriptsService } from '../../../services/cargar-scripts.service';

@Component({
    selector: 'app-tarea-lista',
    templateUrl: './tarea-lista.component.html',
    styleUrls: ['./tarea-lista.component.scss']
  })

export class TareaListaComponent implements OnInit {

  tareas: Observable<TareaModel[]>;
  title: string= 'Notas Creadas';
  titulo: string= 'Título';
  fecha:  string= 'Fecha';
  estado: string= 'Estado';

  constructor(private tareaService: TareaService, _CargarScripts: CargarScriptsService) {
    _CargarScripts.Carga(["darkMode"]);
    this.tareas = this.tareaService.getAllTareas();
  }

  ngOnInit() {
  }

  deleteTarea(id: string) {
    this.tareaService.deleteTarea(id)
      .subscribe(
        data=> {console.log(data); this.tareas = this.tareaService.getAllTareas();},
        error=> console.log(error)
      );
  }
}

