#ultima imagen de Alpine
FROM alpine:3.13

#Label con la versión actual y mi correo
LABEL version="1.0.0" maintainer="alejarragar@correo.ugr.es"

#se crea la carpeta proyecto y se añade nodejs (y npm)
RUN mkdir /proyecto \
&& apk add nodejs \
&& apk add --update npm\
&& adduser -S node

#se pasan los ficheros del host al contenedor
COPY ./ /proyecto

#se modifican los permisos del fichero y se cambia al usuario creado
RUN chown -R node /proyecto

USER node

#se instalan las dependecias en base al package.json
RUN cd /proyecto \
&& npm install . \
&& npm cache clean --force

#se determina la ruta desde la que lanzar el comando cmd
WORKDIR /proyecto

#se determina el comando a lanzar al hacer run de la imagen (se lanza el test)
CMD ["npm", "test;", "echo", "holaaaa"]
