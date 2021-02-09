FROM node:14.15-buster-slim

LABEL version="1.0.0" maintainer="alejarragar@correo.ugr.es"

ADD package.json package.json

RUN npm install .

ADD . .

CMD ["npm", "test"]
