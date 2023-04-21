# MarvelApp

Este proyecto muestra un listado de personajes de Marvel obtenidos de la [API Marvel](https://developer.marvel.com). 
Se ha dividido en módulos, si bien no es necesario ya que es una aplicación relativamente pequeña y no se aprovecharía mucho esta técnica además de emplear la carga diferida, se ha tomado este esquema como parte de buenas prácticas. 

A continuación se describen las funcionalidades incluidas:

* Se obtienen 100 personajes de la API de Marvel y se muestran en una lista, la cual es responsiva.

* Se permite navegar con ayuda de paginación.

* Los personajes obtenidos se almacenan en localStorage para poder manipularlos.

* Se puede realizar un filtrado buscando por "nombre".

* Al seleccionar un elemento de la lista, se abre un modal de detalle.

* En el modal de detalle se permite:
  * Visualizar nombre e imagen del personaje seleccionado.
  * Editar el nombre.
  * Eliminar personaje.
  * Cerrar modal.

## Unit Testing

Se incluyeron algunas pruebas unitarias, cada componente/servicio tiene en su carpeta dicho archivo de pruebas.


## Tools & Packages

Se incluyeron componentes UI de [PrimeNG](https://primeng.org/).

Se obtuvieron las keys pública y privada en [API Marvel](https://developer.marvel.com).

Se generó el HASH en [MD5 Hash Generator](https://www.md5hashgenerator.com/).

Se generaron interfaces con base en la respuesta del endpoint para el manejo de información con [Quicktype](https://quicktype.io/typescript)

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 14.2.4.

