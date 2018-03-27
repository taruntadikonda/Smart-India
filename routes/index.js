var express = require('express');
var mqtt=require('mqtt');
var app = express.Router();

var client  = mqtt.connect('mqtt://192.168.1.3');
/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('error');
});

app.get('/master',function(req,res)
{
  res.render('index');
})

app.get('/1',function(req,res)
{
  res.render('master1');
});
app.get('/2',function(req,res)
{
  res.render('master2');
});
app.get('/3',function(req,res)
{
  res.render('master3');
});

app.get('/image',function(req,res)
{
  res.render('image');

});

app.get('/takeimage',function(req,res)
{
  
  client.publish('image','image');
  

  res.redirect('/image');
})

app.post('/post1',function(req,res)
{

  var master1lat1=req.body.master1lat1;
  var master1long1=req.body.master1long1;
  var master1lat2=req.body.master1lat2;
  var master1long2=req.body.master1long2;
  var master1lat3=req.body.master1lat3;
  var master1long3=req.body.master1long3;
  console.log(master1lat1+master1long1+master1lat2+master1long2+master1lat3+master1long3);
  client.publish('master1lat1',master1lat1);
  client.publish('master1long1',master1long1);
  client.publish('master1lat2',master1lat2);
  client.publish('master1long2',master1long2);
  client.publish('master1lat3',master1lat3);
  client.publish('master1long3',master1long3);

  res.redirect('/master');
});

app.post('/post2',function(req,res)
{
  var master2lat1=req.body.master2lat1;
  var master2long1=req.body.master2long1;
  var master2lat2=req.body.master2lat2;
  var master2long2=req.body.master2long2;
  var master2lat3=req.body.master2lat3;
  var master2long3=req.body.master2long3;
  console.log(master2lat1+master2long1+master2lat2+master2long2+master2lat3+master2long3);
  client.publish('master2lat1',master2lat1);
  client.publish('master2long1',master2long1);
  client.publish('master2lat2',master2lat2);
  client.publish('master2long2',master2long2);
  client.publish('master2lat3',master2lat3);
  client.publish('master2long3',master2long3);
  res.redirect('/master');
  

});

app.post('/post3',function(req,res)
{
  var master3lat1=req.body.master3lat1;
  var master3long1=req.body.master3long1;
  var master3lat2=req.body.master3lat2;
  var master3long2=req.body.master3long2;
  var master3lat3=req.body.master3lat3;
  var master3long3=req.body.master3long3;
  console.log(master3lat1+master3long1+master3lat2+master3long2+master3lat3+master3long3);
  client.publish('master3lat1',master3lat1);
  client.publish('master3long1',master3long1);
  client.publish('master3lat2',master3lat2);
  client.publish('master3long2',master3long2);
  client.publish('master3lat3',master3lat3);
  client.publish('master3long3',master3long3);
  
  res.redirect('/master');

});
app.post('/drone1',function(req,res)
{
  var lat1=req.body.lat1;
  var long1=req.body.long1;
  console.log(lat1+" "+long1);
  client.publish('nonmasterd10',lat1);
  client.publish('nonmasterd11',long1); 
  res.redirect('/');

});
app.post('/drone2',function(req,res)
{

  var lat2=req.body.lat2;
  var long2=req.body.long2;
  console.log(lat2+" "+long2);
  client.publish('nonmasterd20',lat2);
  client.publish('nonmasterd21',long2); 
  
  res.redirect('/');
});
app.post('/drone3',function(req,res)
{
  var lat3=req.body.lat3;
  var long3=req.body.long3;
  console.log(lat3+" "+long3);
  client.publish('nonmasterd30',lat3);
  client.publish('nonmasterd31',long3); 
  
  res.redirect('/');
});

module.exports = app;

