const History = require('../model/history');

const allHistory = {
    getAllHistories: async (req, res) => {
        try {
            const Histories = await History.find().populate('user').populate('car');
            res.status(200).json({ success: true, data: Histories });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server Error', error: error.message });
        }
    },

    createHistory: async (req, res) => {
        try {
            const { userId, carId } = req.body;

            const History = new History({ user: userId, car: carId });
            const newHistory = await history.save();

            res.status(201).json({ success: true, data: newHistory });
        } catch (error) {
            res.status(400).json({ success: false, message: 'Invalid data', error: error.message });
        }
    },

deleteHistory: async (req, res) => {
    try {
        const History = await History.findByIdAndDelete(req.params.id);
        if (!History) return res.status(404).json({ message: "history not found" });
        res.status(200).json({ message: "history deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting history", error });
    }
}

}


module.exports = allHistory;