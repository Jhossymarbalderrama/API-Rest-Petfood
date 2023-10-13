const Person = require("../models/person");


exports.getPersonIDUser = async (req, res, next) => {
  try {
    const person = await Person.getPersonIDUser(req.params.id_user);
    res.status(200).json(person);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getAllPersons = async (req, res, next) => {
    try {
      const [allPersons] = await Person.getAllPersons();
      res.status(200).json(allPersons);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.postPerson = async (req, res, next) =>{
    try {
      const postResponse = await Person.postPerson(req.body.name, req.body.lastname, req.body.id_user);
      res.status(200).json(postResponse);
    } catch (error) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }

  exports.putPerson = async (req, res, next) =>{
    try {
      const putResponse = await Person.putPerson(req.body.id, req.body.name, req.body.lastname, req.body.id_user);
      res.status(200).json(putResponse);
    } catch (error) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
  

  exports.deletePerson = async (req, res, next) =>{
    try {
      const deleteResponse = await Person.deletePerson(req.params.id);
      res.status(200).json(deleteResponse);
    } catch (error) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }