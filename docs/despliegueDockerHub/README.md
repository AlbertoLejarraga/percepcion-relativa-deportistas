# Subida de la imagen a DockerHub

## Creación de cuenta y link con github
En primer lugar se crea una cuenta en DockerHub. Pese a que en los requisitos del hito se especifica que el nombre de docker y github debe ser el mismo, mi nombre de github contiene mayúsculas, por lo que se crea el fichero [DOCKER_USER](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/DOCKER_USER) con el nombre.

Tras esto, se deben asociar las cuentas de ambos servicios como se puede ver a continuación:

![cuentas-link](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/despliegueDockerHub/img/cuentas-link.png)

## Creación del repositorio
Se crea un repositorio de DockerHub, que está conectado con el repositorio de github de mismo nombre. De esta forma, cada vez que haga push a la rama master del repositorio de github, se modificará el de DockerHub:

![repo-link](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/despliegueDockerHub/img/repo-link.png)

## Vista pública del repositorio
Hecho esto, cada push a github, actualiza [el de DockerHub](https://hub.docker.com/r/albertolejarraga/percepcion-relativa-deportistas). A continuación muestro la vista de gestión del repositorio para demostrar que el proceso se ha hecho correctamente (los errores que aparecen en las build han sido porque el dockerfile que había al principio en el repositorio era erróneo):

![build-correcta](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/despliegueDockerHub/img/repo-link.png)
