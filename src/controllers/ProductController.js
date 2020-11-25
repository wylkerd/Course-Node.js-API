const mongoose = require('mongoose');

const Product = mongoose.model('Product');

// exportando objeto com algumas funções
module.exports = {
    async insert(req, res) {
        const insert = await Product.create({
            title: 'Heloisy',
            description: 'Minha irmã',
            url: "####2"
        })

        return res.json(insert);
    },
    
    async index(req, res) {
        const products = await Product.find();

        return res.json(products);
    },
};