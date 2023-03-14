const Product  = require('../models/Product.js');
const Brand = require('../models/Brand');
const Category = require('../models/Category');

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

async function postBrand(req,res){
    try {
        let {brandName} = req.query;

        await Brand.create({name: brandName});
        return res.send({msg: "Brand posted"});
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

async function getAllProducts(req,res){
    try {
        const allProductsList = await Product.find({});
        return res.send(allProductsList);
    } catch (error) {
        return res.send(error);
    }
}

async function getFilteredProducts(req,res){
    try {
        const {name} = req.params
        const {brand, priceMin, priceMax, rating} = req.query;

        let filteredProducts = await Product.find({});

        if(name){
            filteredProducts = filteredProducts.filter((product) => {
                return product.name.toLowerCase().match(name.toLowerCase()) ||
                        product.category.includes(name);
            })
        }

        if(brand){
            filteredProducts = filteredProducts.filter((product) => {
                return product.brand.toLowerCase().match(brand.toLowerCase());
            })
        }

        if(rating){
            filteredProducts = filteredProducts.filter((product) => {
                return product.rating == rating;
            })
        }

        if(priceMin && priceMax){
            filteredProducts = filteredProducts.filter((product) => {
                return product.sellingPrice >= priceMin && product.sellingPrice <= priceMax ;
            })
        }

        return res.send(filteredProducts);

    } catch (error) {
        return res.send(error);
    }
}

async function getTrendingProducts(req,res){
    try {
        let products = await Product.find({trending: true});
        return res.send(products);
    } catch (error) {
        return res.send(error);
    }
}

async function getCategories(req,res){
    try {
        let {categoryName} = req.query;

        const categories = await Category.find({})
        return res.send(categories);
    } catch (error) {
        return res.send(error);
    }
}

async function postCategory(req,res){
    try {
        let {categoryName} = req.query;

        await Category.create({name: categoryName});
        return res.send({msg: "Category posted"});
    } catch (error) {
        return res.send(error);
    }
}


module.exports = {postProduct, addToFavourites, getAllProducts, getFilteredProducts, postBrand, getTrendingProducts, getCategories, postCategory};