// Require in Express (sourcing it it)
// ! ctrl + c stops the server!!!

const express = require('express') //is a function you can call

//Create the server instance
const app = express() //somewhere inside teh express code it returns the app structure

const port = 5001 //where data is coming in and going out?? Like a seaport? What if that port does have other things? 


// Tells where the homepage, public folders are
app.use(express.static('server/public'))

app.listen(port, () => {
    //everything we want to happen when the server starts working
    console.log('listening to port:', port);
}) // takes two args, port and an anonymous arrow function



