const connection = require("../database/connection");// conecxão com o banco

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')//buscar uma ong no banco de dados
        .where('id', id)
        .select('name')// seleciona o nome dela
        .first();//retorna a uma única ong

        if (!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID'});
        }

        return response.json(ong);
    }
}