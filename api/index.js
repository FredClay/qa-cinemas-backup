const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const port = process.env.PORT;
const movieRoutes = require('./routes/movieRoutes');
const connectDB = require('./config/db');

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/movies', movieRoutes);
app.listen(port, () => console.log(`Server started on port ${port}`));