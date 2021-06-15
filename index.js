require('dotenv').config()
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'client', 'build', 'static')))
app.use(fileUpload({}))
app.use('/api', router)


app.use(express.static("./client/build"))

// app.use(express.static(path.join(__dirname, "client/build")))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "client/build")))
}

// Обработка ошибок, последний middleware
app.use(errorHandler)

console.log(__dirname)
console.log(path.join(__dirname, "client/build"))

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch(e) {
    console.log(e)
  }
}

start()
