import Express from 'express';
import ExpressHandlebars from 'express-handlebars';

const app = Express();
const hbs = ExpressHandlebars.create({ defaultLayout: 'main' });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(Express.static('public'));

app.get('/', (_, res) => {
    res.render('home');
});

export default app;