const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.get("/mytax",(req,res)=>{
    console.log(req.query.money);
    let money = req.query.money;
    let ans = 1;
    if(money <=5000){
        ans = 0;
    }else if(money <= 10000){
        ans = money - 5000;
        ans = ans * 0.03;
    }else if(money <= 20000){
        ans = (money - 5000)*0.1;
    }else if( money <= 41000){
        ans = (money - 5000)*0.15;
    }else {
        ans = (money - 5000)*0.2;
    }
    res.send({mytax:ans});
})
app.listen(80,()=>{
    console.log("server is running");
})