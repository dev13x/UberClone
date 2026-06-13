const mongoose = require('mongoose');

async function connectToDB(){
  const uri = process.env.DB_CONNECT;
  if (!uri) {
    throw new Error('DB_CONNECT is not defined');
  }

  await mongoose.connect(uri, {
    dbName: 'uberclone',
    serverSelectionTimeoutMS: 10000,
  });

  console.log('Connected to DB');
}

module.exports = connectToDB;