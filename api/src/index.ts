import express from 'express';
import {initDB} from './db/index';
// Boot express
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = process.env.API_PORT || 5000;

// Application routing
app.use('/', (req, res) => {
    res.status(200).send({data: 'Hello from Pluto'});
});

initDB();

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
