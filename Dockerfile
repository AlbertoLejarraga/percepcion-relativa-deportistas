FROM alpine:latest
LABEL version="1.0.0" maintainer="alejarragar@correo.ugr.es"

RUN mkdir /proyecto \
&& apk add nodejs \
&& apk add --update npm \
&& adduser -S node

COPY ./ /proyecto

RUN cd /proyecto \
&& npm install . --only=production && npm cache clean --force

WORKDIR /proyecto

CMD ["npm", "test"]
