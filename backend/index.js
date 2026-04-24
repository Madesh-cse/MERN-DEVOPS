const express = require('express');
const mongoose = require('mongoose');
const dns = require("dns")
const cors = require('cors');
require('dotenv').config();

dns.setServers(["1.1.1.1", "8.8.8.8"])

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const tasksRoute = require('./routes/tasks');
app.use('/api/tasks', tasksRoute);

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server}
