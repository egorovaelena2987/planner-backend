const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./PlanRoutes');
const cors = require('cors');

require('dotenv').config();
mongoose.set("strictQuery", false);

const PORT = 4000 || process.env.port
app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('We were connected to mongo'))
.catch((err) => console.log(err))
app.use(router)

app.listen(PORT, () => {
    console.log(`I am listening on port ${PORT}`)
})