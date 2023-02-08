const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const expressHbs = require('express-handlebars')

const app = express();
app.engine('handlebars' , expressHbs());
app.set('view engine' , 'handlebars');
app.set('views' , 'views')


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname , 'public')));

app.use('/admin',adminData.routes);

app.use(shopRouter)


app.use((req , res , next)=>{

    res.status(404).render('404' , {pageTitle:'404 Not Found'})

    next();
})

app.get('/handlebars' , (req , res)=>{


    
})








app.listen(4001 , ()=>{

    console.log(`Listening on port 4001`);
})