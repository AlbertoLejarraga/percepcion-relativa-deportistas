# Selección de una imagen para la realización de test
Para la realización de los test, se utilizará un contenedor de podman que ejecute el [fichero de test](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/tests/principal.js) desarrollado en el [Hito 2](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/milestone/2?closed=1). Este contenedor tendrá que estar basado en una imagen que contenga nodejs, siendo múltiples las opciones. Debido a que los test se pasarán cada vez que se avance en el proyecto, la decisión de elegir una u otra imagen será crítica, pues se utilizará el contenedor para pasar dichos tests y su rendimiento debe ser el mejor posible.

Las imagenes probadas son las siguientes:

## alpine:latest
Se utiliza la imagen oficial de alpine, en la cual se instala node. Parecido a lo que se hizo en el [ejercicio 5](https://github.com/AlbertoLejarraga/Autoevaluacion-IV-2020/tree/main/Semana%204-Contenedores/Ejercicio%205) aunque en este caso no hace falta clonar el repositorio por ejecutarse desde la misma carpeta.

[Este](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/54eafb00f9eb9907cfd7ae2697d5d22dea78aff0/Dockerfile) es el Dockerfile utilizado. Su tiempo de ejecución y su tamaño son los siguientes:

![alpine](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/eleccionImagenDockerTest/img/alpine.png)

## node
Esta es la imagen oficial de NodeJS. En este caso se muestran los datos obtenidos con la imagen "defacto", aunque se prueban también otras versiones.

[Este](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/965c537f89c7cb0784091f7473730165a03529d6/Dockerfile) es el Dockerfile utilizado. Su tiempo de ejecución y su tamaño son los siguientes:

![node](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/eleccionImagenDockerTest/img/node.png)

### node:alpine
En este caso, la imagen se basa en la distribución alpine. Sería esperable que el resultado sea similar a la versión instalada arriba, aunque se hace también la prueba.

[Este](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/69c09b573b9b98462af0069dcc1519fcae620a7a/Dockerfile) es el Dockerfile utilizado. Su tiempo de ejecución y su tamaño son los siguientes:

![node-alpine](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/eleccionImagenDockerTest/img/node-alpine.png)

### node:buster
En este caso, la imagen está basada en la versión 10 de Debian.
[Este](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/ad0f942f326c2791a05d256ecfd3f5b093ca9acf/Dockerfile) es el Dockerfile utilizado. Su tiempo de ejecución y su tamaño son los siguientes:

![buster](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/eleccionImagenDockerTest/img/node-buster.png)


### node:buster-slim
En este caso, la imagen se basa en la misma versión anterior pero, en principio, con un menor tamaño.
[Este](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/271aa8bd8ad1da2841cb6f5d8aa04e65f08ed887/Dockerfile) es el Dockerfile utilizado. Su tiempo de ejecución y su tamaño son los siguientes:

![buster-slim](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/eleccionImagenDockerTest/img/node-buster-slim.png)


# Selección
Por lo tanto, el rendimiento de estas imágenes quedaría resumido en la siguiente tabla:
|Imagen|Tiempo de ejecución (s)|Tamaño|
|---|---|---|
|alpine:latest|4.337|171 MB|
|node|59.954|1.19 GB|
|node:alpine|8.794|341 MB|
|node:buster-slim|55.074|1.16 GB|
|node:buster|29.411|1.16 GB|

A la vista de esta tabla, los resultados son bastante claros en cuanto a que lo ideal es utilizar una imagen de alpine en la que se instale node y todo lo necesario para la realización del proyecto, ya que tanto en tiempo como en espacio la diferencia es muy amplia. Además, en el siguiente apartado se explica cómo se ha llevado a cabo una optimización de la imagen, viendo que el espacio puede reducirse ligeramente.
Se hace un comentario sobre alpine y la elección de esta imagen en [el fichero de herramientas](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/herramientas.md)

# Optimizaciones
En cuanto a optimizaciones de las imágenes, se ha probado varias. Por un lado, instalar el proyecto en modo producción, de manera que se restrinja el número de dependencias necesarias. Por otro lado, tras la instalación se ha probado a eliminar la cache de npm.
Esto, dejando a un lado el tamaño de la imagen original, resulta en una ligera disminución del tamaño. Por ejemplo, en la imagen de alpine, se obtiene una diferencia de tamaño de 12 Mb:

![img-dif-tam-opt](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/eleccionImagenDockerTest/img/dif-tam-opt.png)

En cambio, el rendimiento en tiempo no se ve afectado.
