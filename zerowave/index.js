const express = require('express');
const session = require('express-session');
const cookieParser = require("cookie-parser"); 

const app = express();
const dotenv = require('dotenv');
dotenv.config();


app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());

app.use(
  session({
    secret: "zerowave",
    resave:false,
    saveUninitialized: true,
  })
)

const router = require('./routes');
app.use('/zerowave', router);

const map = require('./routes/map');
app.use('/zerowave/map', map);


// app.get('/map',(req, res)=>{
//     res.render("map");
    
//   });

// app.get('*', (req, res) => {
//     res.send('주소가 존재하지 않습니다. 다시 한 번 확인해주세요.');
//   });


app.listen(process.env.PORT, () => {
    console.log('server open:', process.env.PORT);
  });
  
