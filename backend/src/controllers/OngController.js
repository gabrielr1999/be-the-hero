const crypto = require('crypto');
const connection = require('../database/connection');// conecxão com o banco

module.exports = {
    //Listagem de ONGS
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },
    //cadastro de ONGS
    async create(request, response) {
        // return response.send('Hello World');
        //const params = request.query; // acessa todos os parâmetros que vem através dos query
        //const params = request.params; //Route params - acessa todos os parâmetros que vem através dos params
        const { name, email, whatsapp, city, uf } = request.body; //

        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};