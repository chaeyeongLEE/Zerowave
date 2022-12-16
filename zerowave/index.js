const express = require('express');
const session = require('express-session');

const app = express();
const dotenv = require('dotenv');
dotenv.config();


app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(
  session({
    secret: "zerowave",
    resave:false,
    saveUninitialized: true,
  })
)

const router = require('./routes');
app.use('/zerowave', router);


app.get('/map',(req, res)=>{
    res.render("map");
    
  });


app.listen(process.env.PORT, () => {
    console.log('server open: ');
  });
  