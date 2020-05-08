const sqlite3=require('sqlite3');
const db=new sqlite3.Database('./db.sqlite');

module.exports=db;

db.run('DROP TABLE IF EXISTS Strip',(err)=>{
  if(err)
    {
      throw err;
    }
  
 db.run('CREATE TABLE Strip (id INTEGER PRIMARY KEY,head TEXT NOT NULL, body TEXT NOT NULL,background TEXT NOT NULL,bubble_type TEXT NOT NULL,bubble_text TEXT NOT NULL DEFAULT "",caption TEXT NOT NULL DEFAULT "")',(err)=>{
   if(err)
   throw err;
 });
    
});


