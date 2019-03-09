import Express from 'express';
import ExpressHandlebars from 'express-handlebars';

const app = Express();
const port = 3000;
const hbs = ExpressHandlebars.create({ defaultLayout: 'main' });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (_, res) => {
    res.render('home');
});

app.listen(port);