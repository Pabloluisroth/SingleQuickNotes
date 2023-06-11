
> ## Coleccion Postman.
> 
> 1.   GET: `/api/tareas` Devuelve todas las tareas.
> 2.   POPST: `/api/tareas` Crea una tarea. 
> 3.   GET: `/api/tareas/:tareaId` Devuelve una tarea.
> 4.   PUT: `/api/tareas/:tareaId` Modifica una tarea.    
> 5.   DELETE: `/api/tareas/:tareaId` Borra una tarea. 

 ## EndPoints
 
 ## GET.
 ### Devuelve todas las tareas

![POSTMAN](/README/Resources/img/get.PNG)


"item": [
		{
			"name": "Get",
			"item": [
				{
					"name": "Devuelve_todas_las_tareas",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/api/tareas",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"tareas"
							]
						}
					},
					"response": []
				}
			]
		},
    ]

 ## POST.
 ### Crea una tarea

 ![POSTMAN](/README/Resources/img/post.PNG)

"item": [
 		{
			"name": "Post",
			"item": [
				{
					"name": "Crea_una_tarea",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/api/tareas",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"tareas"
							]
						}
					},
					"response": []
				}
			]
		} 
	]

## GET/ID.
### Devuelve una tarea

![POSTMAN](/README/Resources/img/get-id.PNG)

"item": [
        {
			"name": "Get_id",
			"item": [
				{
					"name": "Devuelve_una_tarea",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/api/tareas/:tareaId",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"tareas",
								":tareaId"
							],
							"variable": [
								{
									"key": "tareaId",
									"value": null
								}
							]
						}
					},
					"response": []
				}
			]
		},
    ]

  ## PUT/ID.
 ### Actualiza una tarea

 ![POSTMAN](/README/Resources/img/put-id.PNG)

"item": [
        {
			"name": "Put_id",
			"item": [
				{
					"name": "Modifica_una_tarea",
					"request": {
						"method": "PUT",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/api/tareas/:tareaId",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"tareas",
								":tareaId"
							],
							"variable": [
								{
									"key": "tareaId",
									"value": null
								}
							]
						}
					},
					"response": []
				}
			]
		},
]

  ## DELETE/ID.
  ### Elimina una tarea

  ![POSTMAN](/README/Resources/img/delete-id.PNG)

"item": [
        {
			"name": "Delete_id",
			"item": [
				{
					"name": "Elimina_una_tarea",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/api/tareas/:tareaId",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"tareas",
								":tareaId"
							],
							"variable": [
								{
									"key": "tareaId",
									"value": null
								}
							]
						}
					},
					"response": []
				}
			]
		}
]