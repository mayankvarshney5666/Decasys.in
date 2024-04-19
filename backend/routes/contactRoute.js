const express = require('express');
const router = express.Router();
const Contact = require('../model/contactModel');

router.post('/', async (req, res) => {
    try {
        const { name, email, phoneNumber, message } = req.body;
        if (!name || !email || !phoneNumber || !message) {
            return res.status(422).json({ error: "PLease Fill All the Fields of the Form" });
        }
        const newContact = new Contact({ name, email, phoneNumber, message });
        const savedContact = await newContact.save();
        res.json(savedContact);
    } catch (err) {
        res.status(400).json({ "Error message": err.message });
    }
});

module.exports = router;
