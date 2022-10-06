import express from 'express'; //this line is the same thing as require('express');

const app = express();

//start hosting a web server

app.listen(3000, () => {
    console.log("Application is running at port 3000")
});

//get result
/* app.get('/', (req,res) => {
    res.send('Hello, express is running');
}); */

app.use(express.static("build"));