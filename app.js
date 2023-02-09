const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const {get404} =  require('./controllers/error')
const app = express();

app.set('view engine' , 'pug');
app.set('views' , 'views')


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname , 'public')));

app.use('/admin',adminRouter);

app.use(shopRouter)


app.use(get404)

app.listen(4001 , ()=>{

    console.log(`Listening on port 4001`);
})