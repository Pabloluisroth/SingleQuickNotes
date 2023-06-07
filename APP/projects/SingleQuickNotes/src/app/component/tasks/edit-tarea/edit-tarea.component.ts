import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaEstadosSelect, TareaNew, TareaModel } from '../shared/tarea.model';
import { TareaService } from '../shared/tarea.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import Swal from 'sweetalert2';
import { CargarScriptsService } from '../../../services/cargar-scripts.service';

@Component({
    selector: 'app-edit-tarea',
    templateUrl: './edit-tarea.component.html',
    styleUrls: ['./edit-tarea.component.scss']
  })

export class EditTareaComponent implements OnInit {click($event: Event){
  throw new Error('Method not implemented.');
}
  tarea: TareaNew | TareaModel | undefined = undefined;
  tareaEstadosSelect = TareaEstadosSelect;
  title = '';
  titulo: string='Titulo';
  fecha:  string='Fecha';
  estado: string='Estado';

  showModal(){
    Swal.fire({
      width: 550,
      icon: 'success',
      title: 'Nota Guardada con exito !',
      showConfirmButton: false,
      padding: '3em',
      color: '#00aace',
      timer: 1900
    })
  }

  onKeydown(event) {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
      if(audio.getAttribute('data-keyCode') === event.code) {
        if(this.audioConfig){
          audio.play();
        }
        audio.currentTime = 0;
      }
    });

    const keyElements = document.querySelectorAll('.key');
    keyElements.forEach(key => {
        if(key.getAttribute('data-keyCode') === event.code) {
            key.classList.add('playing');
            key.addEventListener('transitionend', () => {
                key.classList.remove('playing')
            })
        }
    });
}

isDisabled: any;
audioConfig= true;

configAudio() {
  return (this.audioConfig = true);
}
hideconfigAudio() {
  return (this.audioConfig = false);
}

  constructor(private route: ActivatedRoute, private router: Router, private tareaService: TareaService, _CargarScripts:CargarScriptsService)
  {
    _CargarScripts.Carga(["darkMode"]);
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => {
        if (id) {
          this.title = 'Modificar Nota';
          return this.tareaService.getTarea(id);
        } else {
          this.title = 'Crear Nota';
          return of(new TareaNew());
        }
      })
    ).subscribe(
      tarea => {this.tarea = tarea; console.log(tarea);},
      error => {console.log(error)}
    );
  }

  onSubmit(){
    if (!this.tarea) return;
    if (this.tarea instanceof TareaNew)
      this.tareaService.addTarea(this.tarea)
        .subscribe(data => {console.log(data); this.router.navigate(['/tareas']);},error=>console.log(error));
    else
      this.tareaService.updateTarea(this.tarea)
        .subscribe(data => {console.log(data); this.router.navigate(['/tareas']);},error=>console.log(error));
  }
}

