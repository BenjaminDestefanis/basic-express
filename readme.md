## REST API con Node.js + Express + mySQL

### Breve explicacion de como funciona esto

Modelo Cliente Servidor // Front - End // Html + Css + JavaScript
REST API // Back - End // C# + Go + Node etc.

Comunicacion = PROTOCOLO HTTP  
El cliente solicita datos al servidor  y el servidor sirve datos
require (Solicitud) response (Respuesta)

El servidor no almacena DATOS - si no que PROCESA solicitudes -  quien almacena datos es la BASE DE DATOS (mySQL - Posgres - mongoDB etc)

REST API _> Creacion de url - solicitudes - respuestas - 

GET / POST / PUT / DELETE (Vervos HTTP)

Los datos en respuestas van a ser en formato JSON 

railway.app -> Permiste subir una app y poder desplegarla - como HEROKU


PASOS

Dependecias -> express nodemon
1. Configuracion del index.js (servidor)
2. Configuracion de los ENDPOINTS(Rutas)
3. Corroborar el funcionamiento de los ENDPOINTS
acordarse que para los metodos POST / PUT / DELETE
necesitamos utilizar una extencion como thunder Client
o POSTMAN o alguna similar