import Express from 'express';

const app = Express();
const port = 3000;

app.get('/', (_, res) => {
    res.send('Hello World');
});

app.listen(port);