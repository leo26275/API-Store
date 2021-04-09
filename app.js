const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('./configs/database');
const initModels = require('./models/init-models');
const PORT = process.env.PORT || 3050;
const app = express();
// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/brand', require('./routes/brand_routes'))

async function initDatabase() {
    try {
        await sequelize.authenticate();
        global.models = initModels(sequelize)
        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}

app.listen(PORT, () => {
    console.log(`Storeee service is Up on ${PORT}`);
    initDatabase();
});
