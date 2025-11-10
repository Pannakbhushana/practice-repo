const express = require('express');
const cors = require('cors');
const { studentRoute } = require('./routes/student');
const { logger } = require('./middlewares/logger');
const { teacherRoutes } = require('./routes/teacher');

const app = express();

app.use(express.json())
app.use(cors());
app.use(logger)
app.use("/student", studentRoute);
app.use('/teacher', teacherRoutes);



app.listen('8080', async ()=>{
    try {
        console.log('server is running at 8080');
    } catch (error) {
        console.log('error occured while starting the server', error);
    }
})