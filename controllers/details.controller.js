const carModel = require("../model/details");



const cardetailed = {
    registerCar: async (req , res) => {
        try{
            const {carName ,carType ,carImg ,fuelCapacity ,personCapacity ,price ,isFavourite, carModel} = req.body;
            const newcar = new cardetailed ({
                carName ,
                carType ,
                carImg,
                fuelCapacity , 
                carModel ,
                isFavourite,
                price ,
                personCapacity
            });
            await newcar.save();
            res.send({
                message: "car is registred successfuly" , car : newcar
            })
        }
        catch (error){
            console.error(error);
            res.status(500).json({message : error.message})
        }
    },
    getDetails: async ( req , res) =>{
        try{
            const {carName} = req.body;
            const car = await carModel.findOne({carName});
            if(!car){return res.status(400).json({message: "car  is not avaliable"})
            }
            res.status(200).json({message: "Requird car is found " , car})

        }catch (error) {
            console.error(error)
            res.status(500).json({message: error.message})

        }
    },
    
    getSingleCar: async (req, res) => {
        try {
          const userData = await cardetailed.findById(req.params.id);
          if (!userData) return res.status(404).json({ message: "car not found" });
          res.status(200).json({ message: "success", data: userData });
        } catch (error) {
          res.status(500).json({ message: "Error fetching carDetails", error });
        }
      },
}

module.exports = cardetailed; 


