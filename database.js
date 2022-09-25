const {Client} = require('pg')

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Ivan2009",
  database: "postgres"
})

client.connect();

client.query('SELECT VERSION();', (err, res)=>{
  if(!err){
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
})