const express = require('express');
const app = express();
var QRCode = require('qrcode')
const path = require('path');

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set("view engine",'ejs');

app.set("view engine", 'ejs');
app.set('views',path.join(__dirname,'/views'));

app.get('/',(req,res) => {
    res.render("home")
})
app.post("/scan",(req,res,next)=>{
  
    const input_text = req.body.id;
    console.log(input_text);
    QRCode.toDataURL(input_text,(err,src)=>{
        res.render("scan",{
            qr_code: src,
        });
    })
    });

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})