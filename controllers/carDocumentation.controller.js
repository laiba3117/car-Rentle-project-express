const Documentation = require('../model/carDocumentation');


const documentationController = {
    newDocumentation: async (req, res) => {
        try {
            const { make,model,registrationCity,carDocument,transmission } = req.body;

            const newCar = new Documentation({
                make,
                model,
                registrationCity,
                carDocument,
                transmission
            });
            await newCar.save();
            res.send({ message: "Driver registered successfully", car: newCar });

        }
        catch (error) {
            console.error(error)
        res.status(400).json({message : "ERROR WHILE SAVING DATA "})
    }
},
};

module.exports = documentationController;