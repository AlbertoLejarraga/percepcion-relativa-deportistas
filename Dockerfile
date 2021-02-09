#ultima imagen de Alpine
FROM alpine:latest

#Label con la versión actual y mi correo
LABEL version="1.0.0" maintainer="alejarragar@correo.ugr.es"

#se crea la carpeta proyecto y se añade nodejs (y npm)
RUN mkdir /proyecto \
&& apk add nodejs \
&& apk add --update npm

#se pasan los ficheros del host al contenedor
COPY ./ /proyecto

#se instalan las dependecias en base al package.json, optimizando la instalación para reducir el tamaño del contenedor
RUN cd /proyecto \
&& npm install . \
&& npm cache clean --force

#se determina la ruta desde la que lanzar el comando cmd
WORKDIR /proyecto

#se determina el comando a lanzar al hacer run de la imagen (se lanza el test)
CMD ["npm", "test"]
