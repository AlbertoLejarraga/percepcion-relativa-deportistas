# Selección de una imagen para la realización de test
Para la realización de los test, se utilizará un contenedor de podman que ejecute el [fichero de test]() desarrollado en el [Hito 2](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/milestone/2?closed=1). Este contenedor tendrá que estar basado en una imagen que contenga nodejs, siendo múltiples las opciones. Debido a que los test se pasarán cada vez que se avance en el proyecto, la decisión de elegir una u otra imagen será crítica, pues se utilizará el contenedor para pasar dichos tests y su rendimiento debe ser el mejor posible.

Las imagenes probadas son las siguientes:

## alpine:latest
Se utiliza la imagen oficial de alpine, en la cual se instala node. Parecido a lo que se hizo en el [ejercicio 5](https://github.com/AlbertoLejarraga/Autoevaluacion-IV-2020/tree/main/Semana%204-Contenedores/Ejercicio%205) aunque en este caso no hace falta clonar el repositorio por ejecutarse desde la misma carpeta.
[Este](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/commit/54eafb00f9eb9907cfd7ae2697d5d22dea78aff0) es el Dockerfile utilizado, su tiempo de ejecución y su tamaño son los siguientes:
![alpine](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/eleccionImagenDockerTest/img/alpine.png)

## tbaltrushaitis/ubuntu-nodejs

## nodesource/trusty

## node
