const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); // estou desacoplando o módulo de rotas do express em uma nova variável 

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);//Listagem de ONGS
routes.post('/ongs', OngController.create);//cadastro de ONGS

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;