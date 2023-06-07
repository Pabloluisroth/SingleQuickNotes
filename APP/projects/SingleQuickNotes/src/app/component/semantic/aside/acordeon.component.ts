import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../../services/cargar-scripts.service';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.scss']
})

export class AcordeonComponent implements OnInit {
  msg_1: string ='Acerca de';
  msg_2: string ='El propósito de SingleQuickNotes es optimizar las ideas en tareas';
  msg_3: string ='Organizar bien nuestro tiempo es de vital importancia para poder llegar a todo, tanto si es en el trabajo como con nuestros proyectos personales. Todavía quedan nostálgicos que prefieren los calendarios y agendas de papel que conforme se van rellenando se van deprecando, pero no se puede negar que las aplicaciones web ó móviles en la actualidad son herramientas de trabajo muy completas y versátiles con las que organizar y gestionar nuestro tiempo.';
  msg_4: string ='Software';
  msg_5: string ='MIT Locense ';
  msg_6: string ='Copyright (c) 2023 Pabloluisroth Por la presente se concede permiso, sin cargo, a cualquier persona que obtenga una copia de este software y los archivos de documentación asociados (el "Software"), para tratar en el Software sin restricciones, incluidos, entre otros, los derechos usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del Software, y para permitir a las personas a quienes se les provisto para hacerlo, sujeto a las siguientes condiciones: El aviso de derechos de autor anterior y este aviso de permiso se incluirán en todos copias o partes sustanciales del Software. EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITO, INCLUYENDO PERO NO LIMITADO A LAS GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO VIOLACIÓN. EN NINGÚN CASO LA LOS AUTORES O TITULARES DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE CUALQUIER RECLAMACIÓN, DAÑOS U OTROS RESPONSABILIDAD, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O DE OTRA FORMA, DERIVADA DE, FUERA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTROS TRATOS EN EL SOFTWARE.';
  msg_7: string ='Descargar ';
  msg_8: string =' Descargar Aplicación';

  constructor(_CargarScripts: CargarScriptsService) {
    _CargarScripts.Carga(["acordeon", "removeComponent"]);
  }

  ngOnInit(): void {
  }
}
