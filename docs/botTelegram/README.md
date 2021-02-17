# Bot de telegram para cubrir las [HU5](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues/8) y [HU3](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues/6)

Se ha decidido utilizar un bot de telegram para comunicar a los usuarios con la aplicación, ya que facilitaría mucho a los jugadores contar con un sistema de este estilo para describir cual ha sido el esfuerzo realizado en un entrenamiento, así como al cuerpo técnico para obtener los datos de cada uno de sus jugadores (hasta donde yo se actualmente se hace, bien con una hoja, apuntando a mano, o bien, con una aplicación que exige bastante más que entrar en una conversación de telegram).

## Configuración

### BotFather
En primer lugar, se debe registrar en Telegram que se va a desarrollar un bot, de manera que se obtiene un token para utilizar en dicho bot, y que será mediante lo cual se vayan recibiendo las peticiones (en el caso de webhook) o se vayan solicitando las peticiones realizadas (en el caso de polling). Aquí muestro la parte final de la conversación hasta obtener el token :

>BotFather, [15.02.21 23:21]

>Done! Congratulations on your new bot. You will find it at t.me/prd2021_bot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

>Use this token to access the HTTP API:

>xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### node-telegram-bot-api
Se trata de un wraper de la api oficial de Telegram. Debe instalarse con npm, por lo que se introduce en el package.json. Para lo que se ha usado es para, una vez obtenido el token, generar un bot que reciba las peticiones hechas a través de la conversación con "prd2021_bot" y emita una respuesta. El código del bot en sí se encuentra [aquí](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/botTelegram.js).

Como se puede ver, el bot responde a tres tipos de llamadas, que son /rpeSesion, correspondiente a la HU3 y /nuevorpe a la HU5, y, por último, a todas las demás llamadas que se corresponden con un mensaje de ayuda.

En el siguiente apartado se mostrarán estas llamadas en funcionamiento, aunque antes de pasar a él debe comentarse que se puede lanzar este bot con el comando "npm run bot", al haberlo incluido en el package.json como un script. Para ello habría que tener acceso al token, que yo al ejecutar el bot en local lo tengo en un .env.

### prd2021_bot
Se muestra en este apartado la funcionalidad del bot. En primer lugar, se responde con una página de ayuda para cualquier comentario distinto de /rpesesion y /nuevorpe:

![captura_ayuda](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/botTelegram/img/captura_ayuda.png)

En segundo lugar, en base a la ayuda proporcionada se puede obtener los datos almacenados en la base de datos con el comando /rpesesion:

![rpesesion](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/botTelegram/img/rpesesion.png)

Por último, podría también insertarse un nuevo dato, obteniendo en caso de éxito el documento subido a la base de datos:

![nuevorpe](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/botTelegram/img/nuevorpe.png)
