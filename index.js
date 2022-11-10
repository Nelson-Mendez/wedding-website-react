const express = require('express')
const mysql = require('mysql2');
var cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     : '3306',
    password : 'purplepocahontasapex',
    database : 'rsvpList'
}) || mysql.createConnection(process.env.JAWSDB_URL);

/*
const db2 = mysql.createConnection({
    host     : 'iu51mf0q32fkhfpl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user     : 'mpzlghpo5gsqloaf',
    port     : '3306',
    password : 'qhe88w4b15px5rsf',
    database : 'zh1c5hfnlgc6cvfj'
});
*/


db.connect( function(err) {
    if (err) throw err
    console.log("successfully connected!")
})


app.post('/rsvp/list', (req, res)=> {
    const { name } = req.body
    db.query(
        `select groupNumber from guestlist where name = '${name}'`,
        (error, results) => {
            if (error) { res.send(error), console.log(error)}
            if (results[0]) {

                const groupNumber = results[0]['groupNumber'];
                console.log(groupNumber)
                    
                if (groupNumber === 0) {
                    db.query(
                        `select * from guestlist where name = '${name}'`,
                        function(error, results) {
                            if (error) throw error;
                            else {
                                res.json(results)
                                console.log(results.map(row => row.name))
                            }
                        }
                    )
                }

                if (groupNumber > 0) {
                    db.query(
                        `select * from guestlist where groupNumber = ${groupNumber}`,
                        function(error, results) {
                            if (error) {
                                throw error;
                            }
                            else {
                                res.json(results)
                                console.log(results.map(row => row.name)); 
                                
                            }
                        }
                    )
                }
            }
            else {
                console.log("person not found");
                res.sendStatus(404)
            }
        }
    )    
})

app.put('/rsvp/submit', (req, res) => {
    console.log("rsvp submission attempted!")
    console.log(req.body)
    
    req.body.forEach(object => {
        const { name, RSVP, dietary, songRequest } = object
        let rsvpStatus = RSVP ? 1 : 0
        console.log(name, RSVP, rsvpStatus, dietary, songRequest)
        db.query(
            `UPDATE guestlist
            SET RSVP = '${rsvpStatus}', dietary = '${dietary}', songRequest = '${songRequest}'
            WHERE name = '${name}';`,
            function(error, results) {
                if (error) throw error;
                else {
                    console.log("Submitted a set query")
                }
            }
        )
        
    });
})

app.listen(PORT, () => {
	console.log("Express backend is running on port ", PORT, " ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
})
