//load express
const express = require('express')
//instantiate express
const app = express()
//instantiate port
const port = 3000
const Pokemon = require('./models/pokemon.js')
const mongoose = require('mongoose');
require('dotenv').config()//add.env
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
//midware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!<br></br><a href="/pokemon" >pokemon</a>')
})
// app.get('/pokemon', (req, res) => {
//     res.render('Index', {pokemon: pokemon})
// })
app.get('/pokemon', (req, res)=>{
    Pokemon.find({}, (error, allPokemon)=>{
        res.render('Index', {
            pokemon: allPokemon
        });
    });
});


app.get('/pokemon/new', (req, res) => {
    res.render('New');
});


app.post('/pokemon', (req, res)=>{
    Pokemon.create(req.body, (error, createdPokemon)=>{
        res.redirect('/pokemon');
    });
});
// app.get('/pokemon/:indexOfPokemonArray', (req, res) => {
//          res.render('Show', { //second param must be an object
//          pokemon: pokemon[req.params.indexOfPokemonArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
//          });
//      })
//******HOW DOES THIS ROUTE WORK WITHOUT AN ID???******
// app.get('/pokemon/:id', (req, res) => {
//         res.render('Show', { //second param must be an object
//             pokemon: pokemon[req.params.id]
//         });
//      })
app.get('/pokemon/:id', (req, res) => { 
      Pokemon.findById(req.params.id, (error, foundPokemon)=>{
      res.render('Show', { //second param must be an object
          pokemon:foundPokemon
        });
    })
})
app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
})