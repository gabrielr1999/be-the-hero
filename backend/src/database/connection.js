const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development)// conecxão utilizando o knex e passando para ele como parâmetro o 'configuration.development' é a conexão de desenvolvimento

module.exports = connection;