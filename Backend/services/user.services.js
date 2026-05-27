const userModel = require('../models/user.model');

module.exports.createUser = async({
  firstname,lastname,email,password
}) =>{
  if(!email || !password || !firstname){
    throw new Error('Email, password and first name are required');
  }
  const user = await userModel.create({
    fullname:{
      firstname,
      lastname
    },
    email,
    password
  });
  return user;
}