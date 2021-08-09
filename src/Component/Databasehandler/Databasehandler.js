import react from 'react'
import mysql from 'react'

function Databasehandler(){
    const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
 /// database: 'posts'
});
 
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM post", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  }); 
}); 
    return(
        <div></div>
    )
}
export default Databasehandler