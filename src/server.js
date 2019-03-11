import Express from 'express';
import ExpressHandlebars from 'express-handlebars';
import path from 'path';

const app = Express();
const hbs = ExpressHandlebars.create({ defaultLayout: 'main' });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(Express.static(path.join(__dirname, '../public')));

app.get('/', (_, res) => {
    res.render('home');
});

export default app;