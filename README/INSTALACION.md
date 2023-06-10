
> ## Instalacion SingleQuickNotes.
> 
> 0.   Antes que nada, tenemos que tener instalado en nuestro equipo Nodejs https://nodejs.org/en/download siendo la version mas estable con el proyecto en angular cli, la version `16.13.0`de Nodejs.
> 1.   Comprobar la version instalada de node usando `node -v`.
> 2.   Instalar `nvm install 16.13.0` y posteriormente `nvm use 16.13.0`
> 3.   Descarge el código ó clone el repositorio https://github.com/Pabloluisroth/2-_Entrega_Parcial y ejecute `npm install` en la CMD para instalar los paquetes necesarios.
> 4.   Instalar framwework Angular `npm install @angular/cli`.
> 5.   Instalar `npm install --save espress`.
> 6.   Instalar `npm install --save body-parser`.	
> 7.   Instalar `npm install --save mongoose`.   
> 8.   Una vez acabada con la instalacion, abrimos nuestro proyecto con nuestro editor (VScode) y añadiremos el siguiente codigo en el archivo: server.js
> 9.   Crear base de datos utilizando compass de mongoDB llamada: `SingleQuickNotes` y coleccion llamada: `Tarea`.
> 10.   Con el siguiente codido introducido en `server.js` crearemos la cadena de conexion de nuestra base de datos a MongoDB
>      ![INSTALACION](/README/Resources/img/conexiondb.PNG)
> 11.   Con el siguiente codigo introducido en `server.js` nuestro servidor realiza la conexion a la BD MongoDB y configura la gestion de eventosprincipales para interceptar las conexiones/desconexiones que se produzcan.
>      ![INSTALACION](/README/Resources/img/conexiondb2.PNG)
> 12.   Finalmente ejecutamos nuestra aplicacion "SingleQuickNotes" de la siguiente manera desde la CMD:
>      ![INSTALACION](/README/Resources/img/ejecutarServer.PNG).
> 13.   Desde la propia ventada de CMD deberiamos de ver el texto correspondiente al evento "conected", que indicara que la conexion se ha realizado correctamente.
>
## Ejecutar aplicacion en Angular: 'SingleQuickNotes'
>
> 0.    Introduce `ng build` para crear el repositorio que sera desplegado con el servidor.
> 1.    Introduce en la cmd: `ng serve --project SingleQuickNotes` para ejecutar aplicacion en el directorio raiz. 
> 2.    Ó puedes acceder introduciendo `ng serve` enla ruta absoluta de la aplicion.
> 3.    La aplicacion esta en funcionamiento.   
> 4.    Abre un navegador web 'Crome' y situese en `http://localhost:4200/` para acceder a la aplicacion en ejecución.


      
