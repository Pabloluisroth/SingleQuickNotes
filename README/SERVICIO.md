
> ## Instalacion y configuracion de MongoDB como servicio windows en local con la App Compass de mongodb.
> 
> 1.   El primer paso sera descargar el instalador de MongoDB en nuestro ordenador desde la siguiente pagina: https://www.mongodb.com/try/download/community.
> 2.   En esta pagina seleccionaremos la opcion que mas nos interese segun nuestro SO. En nuestro caso seleccionamos La `version: 6.0.5 current` y windows como plataforma.
> 3.   Una vez instalado el producto, pasaremos a crear el servicio Windows, este servicio nos permitira que el servidor de base de datos MongoDB se ponga en marcha
>      Automaticamente cada vez que reiniciemos o iniciemos el ordenador.
> 4.   Para ello, primero crearemos la siguiente estructura de directorios: `C:\mkdir mongodb\data\db mongodb\data\log`.	
> 5.   Crearemos el fichero: `C:\mongodb\data\mongodb.cfg`.    
>      ![SERVICIO](/README/Resources/img/configMongo.PNG).
> 6.   Este es el fichero de configuracion que se aplicara a nuestro servidor MongoDb, En el estamos indicando las carpetas y ficheros que se usaran para los datos y fucheros log.
> 7.   Finalmente creamos el servicio ejecutando el comando: `C:\Program Files\MongoDB\Server\6.0\bin>mongodb.exe -config c:\mongodb\data\mongodb.cfg -install`.
> 8.   Hay que tener en cuenta que debemos hacerlo como usuario administrador ( boton derechero sobre el icono "simbolo del sistema" `CMD` y pulsar ejecutar como administrador ).
> 9.   Ahora pasaremos a verificar que se a creado el servicio accediendo a la ventana "servicios" de windows desde el menu de windows o ejecutando sercices.msc desde la `CMD`.
>      ![SERVICIO](/README/Resources/img/servicioMongodb.PNG)
> 10.  Instalacion y configuracion de mongoDB como servicio concluido.  
>      




