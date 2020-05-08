const express=require('express');
const bodyParser=require('body-parser');
const sqlite3=require('sqlite3');
const db=new sqlite3.Database(process.env.TEST_DATABASE || './db.sqlite');
const app=express();

module.exports=app;
const PORT=process.env.PORT||4001;

app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/strips',(req,res,next)=>{
  db.all('select * from Strip;',(err,row)=>{
    if(err)
      throw err;
    else{
      let obj=row.length;
      res.send({strips:obj});
    }
  });
});

app.post('/strips',(req,res,next)=>{
  let obj=req.body.strip;
  if(!obj.head||!obj.body||!obj.background||!obj.bubbleType)
    {
      res.status(400).send();
    }
  else{
  db.run(`insert into Strip (head,body,background,bubbleType,bubbleText,caption) values(${obj.head},${obj.body},${obj.background},${obj.bubbleType},${obj.bubbleText},${obj.caption})`,(err)=>{
    if(err)
      res.status(500).send();
    else{
     db.get(`select * from Strip where id=${this.lastID}`,(err,row)=>{
       res.status(201).send({strip:row});
     }); 
    }
  });
  }
  });



app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`);
});