const express = require('express');
const jwt = require('jsonwebtoken')
const morgan = require('morgan');
const cors = require('cors');

//exportar las rutas
const taskRoutes = require('./routes/task.routes');
const employedRoutes = require('./routes/employed.routes');

const app = express();


app.use(cors()); // modulo para comunicar servidor del backend y fro
app.use(morgan('dev'));
app.use(express.json());
app.use(taskRoutes);
app.use(employedRoutes);

app.use((err, req, res, next) =>{
    return res.json({
        message: err.message
    })
})


app.listen(4000); //en que puerto lo utilizamos
console.log('Server on port 4000');
console.log('corriendo con nmp run dev')