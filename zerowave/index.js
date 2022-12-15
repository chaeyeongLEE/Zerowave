const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require('./routes');
app.use('/zerowave', router);


// app.get('*', (req, res) => {
//     res.send('주소가 존재하지 않습니다. 다시 한 번 확인해주세요.');
//   });
  
app.get('/map',(req, res)=>{
    res.render("map");
    
  });


app.listen(process.env.PORT, () => {
    console.log('server open: ', process.env.PORT);
  });
  