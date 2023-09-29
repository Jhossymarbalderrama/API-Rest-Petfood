const Contact = require("../models/contact");

exports.getAllContacts = async (req, res, next) => {
    try {
      const [allContacts] = await Contact.getAllContacts();
      res.status(200).json(allContacts);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.postContact = async (req, res, next) =>{
    try {
      const postResponse = await Contact.postContact(req.body.id_user, req.body.company, req.body.email, req.body.phone, req.body.smartphone, req.body.adress);
      res.status(200).json(postResponse);
    } catch (error) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }

  exports.putContact = async (req, res, next) =>{
    try {
      const putResponse = await Contact.putContact(req.body.id, req.body.id_user, req.body.company, req.body.email, req.body.phone, req.body.smartphone, req.body.adress);
      res.status(200).json(putResponse);
    } catch (error) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
  

  exports.deleteContact = async (req, res, next) =>{
    try {
      const deleteResponse = await Contact.deleteContact(req.params.id);
      res.status(200).json(deleteResponse);
    } catch (error) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }