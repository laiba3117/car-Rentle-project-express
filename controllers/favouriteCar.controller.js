const FavouriteCar = require('../model/favouriteCar');
const carModel = require('../model/details'); 
const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model');



const favouritCars = {

  getAllFavouriteCars: async (req, res) => {
    try {
      const token = req.headers['authorization']?.split(' ')[1];
   
        console.log(token , "wwerrwr")
        if (!token) {
            return res.status(401).json({ message: "Authorization token is required" });
          }

        let userId;
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
            userId = decoded.id;
        }  catch (error) {
            res.status(401).json({ message: " Invalid token", error });
          }
        
        const FavouriteCars = await FavouriteCar.find({ userId }).populate('productId');
        if(FavouriteCars){
        return res.status(200).json({ message: "Successfully fetched favorite products", FavouriteCars });
      }
    } 
    catch (error) {
      console.error(error)
        res.status(500).json({ message: "Error fetching favorite products", error });
      }

},

 addFavouriteCars: async (req, res) => {
  try {
      const token = req.header['authorization']?.split(' ')[1]; // Extract the token
      if (!token)  {
        return res.status(401).json({ message: "Authorization token is required" });
      }

      let userId;
      try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
          userId = decoded.id;
      }catch (error) {
        res.status(401).json({ message: " Invalid token", error });
      }
      
      const { productId } = req.body;
      if (!productId) {
        return res.status(400).json({ message: "Product ID is required" });
      }
     
      const existingFavorite = await FavouriteCar.findOne({ userId, productId });
      if (existingFavorite){
        return res.status(409).json({ message: 'Product is already in favorites' });
      }

      const newFavorite = await FavouriteCar.create({ userId, productId });
      if (newFavorite){
      return res.status(201).json({ message: 'Product added to favorites successfully' });
      }
  }catch (error) {
    res.status(500).json({ message: "error adding favourite products", error });
  }
},

 removeFavouriteCars: async (req, res) => {
  try {
      const token = req.header['authorization']?.split(' ')[1]; // Extract the token
       if (!token)  {
        return res.status(401).json({ message: "Authorization token is required" });
      }
     
      let userId;
      try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
          userId = decoded.id;
      } catch (error) {
        res.status(401).json({ message: " Invalid token", error });
      }

      const { productId } = req.body;
      if (!productId) {
        return res.status(400).json({ message: "Product ID is required" });
      }
 
      const removeProduct = await FavouriteCar.findOneAndDelete({ userId, productId });

      if (!favProduct) {
        return res.status(404).json({ message: 'Favorite product not found' });
      }
        return res.status(200).json({ message: 'Successfully removed from favorite products' });

  } catch (error) {
    res.status(500).json({ message: " error removing favourit product", error });
  }

 },
}
module.exports = favouritCars ;
