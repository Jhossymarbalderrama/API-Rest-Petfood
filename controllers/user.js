const User = require("../models/user");

exports.getAllUsers = async (req, res, next) => {
  try {
    const [allUsers] = await User.getAllUsers();
    res.status(200).json(allUsers);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postUser = async (req, res, next) =>{
  try {
    const postResponse = await User.postUser(req.body.user, req.body.password);
    res.status(200).json(postResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.putUser = async (req, res, next) =>{
  try {
    const putResponse = await User.putUser(req.body.id, req.body.user, req.body.password);
    res.status(200).json(putResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.deleteUser = async (req, res, next) =>{
  try {
    const deleteResponse = await User.deleteUser(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}