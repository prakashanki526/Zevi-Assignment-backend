const Product  = require('../models/Product.js');

async function postProduct(req,res){
    try {
        const {name, category, price, sellingPrice, brand, trending, rating, img} = req.body;
        const newProduct = {
            name: name,
            category: category,
            price: price,
            sellingPrice: sellingPrice,
            brand: brand,
            favourite: false,
            trending: trending,
            rating: rating,
            img: img
        }

        await Product.create(newProduct);
        return res.send({msg: "Product posted"});
    } catch (error) {
        return res.send(error);
    }
}

async function addToFavourites(req,res){
    try {
        const {id} = req.query;
        const product = await Product.findOne({_id: id});
        if(product){
            let like = product.favourite;
            const updated = await Product.updateOne({_id: id},{favourite: !like});
            return res.send({msg: "done"});
        }
        return res.send({msg: "Product not found"});
    } catch (error) {
        return res.send(error);
    }
}

// async function addToFavourites(req,res){
//     try {
        
//     } catch (error) {
//         return res.send(error);
//     }
// }


module.exports = {postProduct, addToFavourites};