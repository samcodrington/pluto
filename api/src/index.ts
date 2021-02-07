import express, { Application, Request, Response, NextFunction } from 'express';

// Boot express
const app: Application = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = 5000;

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction ) => {
    res.status(200).send({data: 'Hello from Pluto'});
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
