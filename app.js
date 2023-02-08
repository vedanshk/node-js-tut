const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');


const app = express();

app.set('view engine' , 'pug');
app.set('views' , 'views')


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname , 'public')));

app.use('/admin',adminData.routes);

app.use(shopRouter)


app.use((req , res , next)=>{

    res.status(404).render('404' , {pageTitle:'404 Not Found'})

    next();
})









app.listen(4001 , ()=>{

    console.log(`Listening on port 4001`);
})