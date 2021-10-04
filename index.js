const express = require ('express');
const app = express();

const mysql = require ('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "prem",
    password: "&k&qq'F(S]56W2jq",
    database: "fakedatabase"
});
app.get("/insert", (req,res) =>{
    db.query(
        'INSERT INTO country(countryname, properities) VALUES ("India", "goodcountry")',
        (err, result) =>{
            if (err){
                console.log(err);
            }
            res.send(result);
        }
    )
})


app.listen(3005, () =>{
    console.log('server is running');
});