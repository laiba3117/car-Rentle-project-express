const contact = require('../model/contactus');


const contactController = {
    contactUs: async (req, res) => {
        try {
            const { firstName, lastName, email, phone, message } = req.body;

            const contactus = new contact({
                firstName,
                lastName,
                email,
                phone,
                message,
            });

            await contactus.save();

            return res.status(201).json({
                message: 'Message sent successfully!',
                contact,
            });
        } catch (error) {
            console.error('Error occurred:', error);

            return res.status(500).json({
                message: 'An error occurred while sending the message. Please try again later.',
            });
        }
    },
};

module.exports = contactController;
