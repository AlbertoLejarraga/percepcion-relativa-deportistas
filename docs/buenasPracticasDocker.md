# Buenas prácticas
Por último, en cuanto a las buenas prácticas se ha tratado de seguir la [documentación oficial](https://www.docker.com/blog/intro-guide-to-dockerfile-best-practices/). Aunque se ha tratado de seguir todas ellas, aquí resumo las que considero más importantes:

1. Orden de las copias
  Para la optimización de la cache, debe utilizarse el comando COPY cuando sea necesario, no antes.
2. Utilizar un único RUN con && en vez de varios RUN
  Cada una de las líneas en la que aparece un comando RUN es una "unidad cacheable", por lo que si se reduce el número de estas, se reduce el tamaño. Esto puede hacerse uniendo varios RUN con &&.
3. Usar tags específicos
  No se deben utilizar tags genéricos, ya sean por omisión o por la utilización del tag :latest
4. Buscar la imagen más pequeña posible
  Como se ha detallado [aquí](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/eleccionImagenDockerTest/README.md), se ha tratado de buscar la imagen mas pequeña posible en tamaño.
