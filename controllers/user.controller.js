const userModel = require("../model/user.model");

const userController = {
 
  getAllUsers: async (req, res) => {
    try {
      const {offset , limit} = req.body;
      console.log(offset , limit);

      const userData = await userModel.find().skip(Number(0)).limit(Number(2))
      const totalcount = await userModel.countDocuments();



      res.status(200).json({ message: "success", data: userData,
        offset:Number(offset),
        limit:Number(limit)
       });
    } catch (error) {
      res.status(500).json({ message: "Error fetching users", error });
    }
  },

 
  getSingleUser: async (req, res) => {
    try {
      const userData = await userModel.findById(req.params.id);
      if (!userData) return res.status(404).json({ message: "User not found" });
      res.status(200).json({ message: "success", data: userData });
    } catch (error) {
      res.status(500).json({ message: "Error fetching user", error });
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = await userModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
   
    
      if (!updatedUser)
        return res.status(404).json({ message: "User not found" });
      res
        .status(200)
        .json({ message: "User updated successfully", data: updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await userModel.findByIdAndDelete(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error });
    }
  },
};

module.exports = userController;