const mongoose = require('mongoose');

const Product = mongoose.model('Product');

// exportando objeto com algumas funções
module.exports = {
    async index(req, res) {
            const products = await Product.find();

            return res.json(products);
        },
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },
        
        
};