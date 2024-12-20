const becomeDriver = require("../model/driver.model");

const driver = {
   

    becomeDriver: async (req , res) =>{
        try{
            const{email}= req.body;
            const existingUser = await becomeDriver.findOne({email});
            if(existingUser){
                res.status(2001).json({message: "email already exists"})
            }
            const newDriver = new becomeDriver({
                email
            });
            await newDriver.save();
            res.send({ message: "Driver registered successfully", driver: newDriver });

        }
        catch{}
    },

    getAllDrivers: async (req, res) => {
        try {
          const response = await becomeDriver.find();
          res.status(200).json({ message: "success", data: response });
        } catch (error) {
          console.log(error.message);
          res.status(500).json({ message: "Error while find service", error });
        }
      },
    
}



module.exports = driver;