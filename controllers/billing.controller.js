const billingInfo = require("../model/billing");

const billingController = {
  userInfo: async (req, res) => {
    try {
      const { name, phone, address, city, location, time, date } = req.body;
      const newbilling = new billingInfo({ name, phone, address, city, location, time, date });
      await newbilling.save();
      res.status(200).json({ message: "billing saved successfully" });

    }
    catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "error while saving bill ", error })
    }
  },
  getAllBilling: async (req, res) => {
    try {
      const response = await billingInfo.find();
      res.status(200).json({ message: "success", data: response });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Error fetching billing .", error });
    }
  },

  getByIdBilling: async (req, res) => {
    const { id } = req.params;
    try {
      if (!id) {
        res.status(404).json({ message: "Please provide ID." })
      }
      const response = await billingInfo.findById(id)
      res.status(200).json({ message: "success", data: response });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "error while billing", error });
    }
  }



}


module.exports = billingController;