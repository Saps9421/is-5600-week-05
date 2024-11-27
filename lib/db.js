@@ -0,0 +1,13 @@
// db.js
const mongoose = require('mongoose')


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://root:example@localhost:27017/?authSource=admin',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

module.exports = mongoose