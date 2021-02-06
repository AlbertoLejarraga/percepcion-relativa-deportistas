# Explicación de las herramientas a utilizar
Se pretende desarrollar una API REST, para lo cual se utilizarán distintas tecnologías que se explicarán a continuación.
Este fichero se irá modificando según vaya avanzando el proyecto, ya que será necesario utilizar otras tecnologías no contempladas en este momento.

### JavaScript
Se utilizará como lenguaje de programación JavaScript. Nunca he utilizado este lenguaje para programar el backend de una aplicación, por lo que no puedo dar muchos argumentos propios, más allá de que su utilización en el frontend me parece sencilla, debido también al gran número de librerías online disponibles.
Además, destacaría también que es un lenguaje ampliamente utilizado para el desarrollo de api´s rest y con una comunidad grande.

### Node.js
Utilizaré este entorno de ejecución, ya que es de código abierto y es uno de los más utilizados para el desarrollo en JavaScript.
Para la instalación de las librerías comentadas antes se utilizará el gestor de paquetes npm

### MongoDB
Para el almacenamiento de los datos se utilizará MongoDB, ya que es una base de datos documental que permite una gran libertad en cuanto al esquema de los datos a almacenar y esto puede ser muy útil para el proyecto.

### Grunt
Se decide usar grunt como automatizador de tareas, siendo la de testing la primera tarea a automatizar. Esta decisión se toma tras compararlo con otras opciones como gulp, broccoli o brunch (en sitios como [este](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/gulp-vs-grunt-que-diferencia-a-estos-task-runners/) o [este](https://npmcompare.com/compare/broccoli,brunch,grunt,gulp)). Principalmente se utiliza por tener un gran número de plugins que pueden ser útiles durante el desarrollo del proyecto, más que ninguno de los otros gestores (el primero a utilizar será el plugin de Mocha, framework de testing para js). Además, siguiendo con esto, la comunidad parece también mayor en este sistema.
En cuanto a las otras opciones, gulp parece que está aumentando su uso por lo leído en los enlaces anteriores, y tiene su principal virtud frente a grunt en la velocidad de ejecución, al ejecutar directamente en memoria los procesos. Debido al desarrollo de un microservicio como este, sin un gran número de ficheros o líneas de código a ejecutar, esta velocidad de ejecución no se tiene especialmente en cuenta en la comparación.

### Mocha y Chai
Para realizar los tests se utilizará el framework Mocha que se ha citado arriba. Para las aserciones se utilizará la librería Chai, ya que aporta mas opciones que la libreria assert de Node.js. De hecho, se utiliza para el hito el "assertion style" expect, ya que hace un código más legible en cuanto a los tests a realizar.  Para su uso he tomado [este ejemplo](https://gist.github.com/trenchmortar/74b25d0911a33890cffab19b7b695e43) como referencia, así como la documentación del [plugin grunt-mocha-test](https://www.npmjs.com/package/grunt-mocha-test) utilizado.
