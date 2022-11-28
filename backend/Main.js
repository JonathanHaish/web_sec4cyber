var express = require("express");
var https = require("https");
var fs = require("fs");
var http = require("http");




var app = express();



const path = require("path");

app.use("/static",express.static(__dirname + '/drive_images'));


app.use(express.static(path.join(__dirname,'build_app')));

app.use(express.static(path.join(__dirname,'build_a')));

app.use(express.static(path.join(__dirname,'build_indestry')));

app.use(express.static(path.join(__dirname,'build_airplane')));

app.use(express.static(path.join(__dirname,'build_goverment')));

app.use(express.static(path.join(__dirname,'build_BN')));

app.use(express.static(path.join(__dirname,'build_Pro')));

app.use(express.static(path.join(__dirname,'build_AC')));

app.use(express.static(path.join(__dirname,'build_Transport')));




app.get('/',function(req,res){
  //res.send('hello world');
  //res.sendFile('/home/daniel/ReactExpress/frontend/public/index.html');
  res.sendFile(path.join(__dirname,'build_app','index.html'));

});


app.get('/Consumer%20IoT/',function (req,res){

  res.sendFile(path.join(__dirname,'build_Transport','index.html'));

});

app.get('/Industries%20&%20Energey/',function(req,res){
  res.sendFile(path.join(__dirname,'build_indestry','index.html'));
});

app.get('/Government%20&%20Defense/',function(req,res){
   res.sendFile(path.join(__dirname,'build_goverment','index.html'));
});

app.get('/Automotive%20&%20Transportion/',function(req,res){
   res.sendFile(path.join(__dirname,'build_a','index.html'));
});
app.get('/Enterprise%20Edge/',function(req,res){
   res.sendFile(path.join(__dirname,'build_airplane','index.html'));
});

app.get('/Healthcare%20&%20Medical%20Devices/',function(req,res){
  res.sendFile(path.join(__dirname,'build_airplane','index.html'));
});

app.get('/SafeTrip/',function(req,res){
  res.sendFile(path.join(__dirname,'build_Pro','index.html'));
});

app.get('/SafeGaurd/',function(req,res){
  res.sendFile(path.join(__dirname,'build_Pro','index.html'));
});







app.get('/Product%20Security/',function(req,res){
  res.sendFile(path.join(__dirname,'build_Pro','index.html'));
});






app.get('/Blog/',function(req,res){
  res.sendFile(path.join(__dirname,'build_BN','index.html'));
});

app.get('/News/',function(req,res){
  res.sendFile(path.join(__dirname,'build_BN','index.html'));
});

app.get('/About%20Us/',function(req,res){
  res.sendFile(path.join(__dirname,'build_AC','index.html'));
});


//send mail from costumer
const nodemailer = require("nodemailer");

/*app.use(express.urlencoded({extended:false}));


app.post('/about/',function(req,res){
  
  var name = req.body.name;
  var phone = req.body.phone;
  var email = req.body.mail;
  var message = (name+" , \n" + " phone: "+phone+"\n mail: "+email);
  console.log(req.body);
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth:{
          user:'secforcyber@gmail.com',
          pass:'SafeTrip_1B$'
      }
    });

   let mailOption = {
       from:'secforcyber@gmail.com',
       to:'secforcyber@gmail.com',
       subject:'New costumer',
       text:message
     };

    transporter.sendMail(mailOption,function(err,data){
       if(err)
       {
          console.log(err);
       }
       else{
           console.log("sended email from "+fname);
        }
     });
     res.sendFile(path.join(__dirname,'build_AC','index.html'));
});*/
//-----------------------------------------------------------------------------------------


//security


var https_options = {
  key: fs.readFileSync(path.join(__dirname,'security','sec4cyber.key')),
  cert: fs.readFileSync(path.join(__dirname,'security','www_sec4cyber_com.crt')),
  ca: [
  fs.readFileSync(path.join(__dirname,'security','AAACertificateServices.crt')),
  fs.readFileSync(path.join(__dirname,'security','www_sec4cyber_com.ca-bundle'))
  ]
};


// your express configuration here

https.createServer(https_options, app)
.listen(8443, function () {
  
  console.log('Example app listening on port 3000! Go to https://localhost:8443/');
});

/*
const sslServer = https.createServer({
  key:fs.readFileSync(path.join(__dirname,'security','privateKey.pem')),
  cert:fs.readFileSync(path.join(__dirname,'security','cert.pem')),
  },
  app
);
*/


/*
var sslServer = app.listen(3443,function(){
  console.log("Server is running..");
});*/