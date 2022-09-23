const { json } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const rows = {};

const config = {
  host: "nodejs-database-1",
  user: "root",
  password: "root",
  database: "challengeDB",
};

const mysql = require("mysql");
const connection = mysql.createConnection(config);

const tableCreated =
  "create table people (id int not null auto_increment primary key, name varchar(40) not null)";
connection.query(tableCreated, (err, result)=>{
    if(err)
        console.log(err);
});

const sql = `INSERT INTO people(name) values('Faria Quitamba')`;
connection.query(sql);

const getRegisters = `SELECT name FROM people`;
connection.query(getRegisters, (err, rows, fields) => {
    if(err){
        console.log(err);
    }
  this.rows = rows;
});

app.get("/", (req, res) => {
  res.send(`
        <p> Lista de nomes cadastrada no banco de dados.</p>
        ${this.rows[0].name}
    `);
});

app.listen(port, () => {
  console.log("App is running " + port);
});
