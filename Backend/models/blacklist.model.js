const mongoose = require('mongoose');

const blacklistSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, expires: 60 * 60 * 24 * 30 } // TTL 30 days
});

module.exports = mongoose.model('Blacklist', blacklistSchema);
