const asyncHandler = require("express-async-handler");

const Contact = require("../model/contactModel");

const getContacts = asyncHandler( async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

const createContacts = asyncHandler( async (req, res) => {
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new error("All fields are mandatory");
    }
    res.status(200).json({ message: "Create contact" });
});

const getContact = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

const updateContact = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

const deleteContact = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = { 
    getContacts, 
    createContacts, 
    getContact, 
    updateContact, 
    deleteContact 
};