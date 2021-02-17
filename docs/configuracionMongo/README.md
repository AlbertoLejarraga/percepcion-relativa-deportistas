# Creación y utilización de un clúster MongoDB Atlas

## Configuración del clúster
Su configuración es bastante sencilla, teniendo que ir seleccionando distintas opciones de un cuestionario guiado. En primer lugar, se debe elegir entre el tipo de clúster (clúster con tilde me parece rarísimo, pero sin ella casi que igual, así que [parece que mejor con tilde](https://www.fundeu.es/recomendacion/cluster/)), entre los que aparece la opción de "Shared Cluster", que es gratuito hasta un cierto nivel de uso, siendo los otros dos clústeres más orientados a empresas o aplicaciones con más necesidades:

![crear_cluster_free](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/configuracionMongo/img/crear_cluster_free.png)

Después se selecciona la región (debe seleccionarse la más cercana a la zona de uso de la aplicación para optimizar el tiempo de conexión) y el nombre del clúster, tras lo cual se tiene ya configurado y listo para crear las primeras bases de datos y colecciones:

![seleccion_region](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/configuracionMongo/img/seleccion_region.png)

![nombre_opciones_free](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/configuracionMongo/img/nombre_opciones_free.png)

## Configuración de usuario
Se selecciona desde que ip se accederá a la base de datos (desde cualquiera) y se indican las credenciales del usuario administrador:

![configuracion_db_ip_usuario](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/configuracionMongo/img/configuracion_db_ip_usuario.png)

## Método de conexión
MongoDB es accesible desde distintos lenguajes de programación con una api propia, por lo que Atlas indica cómo debe realizarse este acceso. En este caso se indica la uri de conexión, así como la selección de la colección:

![conexion_db_node](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/configuracionMongo/img/conexion_db_node.png)

Por último, comentar que la uri de conexión que aparece en esta imagen debe guardarse como un "secret" en los distintos clientes, como son Github y Travis para test, Netlify y Vercel para despliegue serverless, DockerHub para la imagen del contenedor (etc.) o directamente en un fichero .env que no debe estar en el repositorio y que debe introducirse, por tanto, en el .gitignore al contener una contraseña. La clave utilizada en todos ellos es #MONGODB_URI.
