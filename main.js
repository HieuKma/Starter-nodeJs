const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');

const authMiddleware = require('./middlewares/auth.middleware');

const app = express();
const port = 3013;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());    // su dung cookiea

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Hieu'
    });
});

app.use('/users', authMiddleware.requireAuth, userRoute); // Kiem tra: phai login moi vao user duoc
app.use('/auth', authRoute);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); 