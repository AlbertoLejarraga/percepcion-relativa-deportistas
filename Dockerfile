FROM node:14.15-alpine

LABEL version="1.0.0" maintainer="alejarragar@correo.ugr.es"

ADD package.json package.json

RUN npm install .

ADD . .

CMD ["npm", "test"]
