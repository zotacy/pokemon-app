const express= require('express');
const router = express.Router();
// const pokemon = require('../pokemon.js')
const Pokemon = require('../models').Pokemon;
const PlayerPokemon = require('../models').PlayerPokemon;

//GET ==> Pokedex Homepage
router.get('/', (req,res)=>{
  Pokemon.findAll().then((pokemon) => {
    res.render('index.ejs', {
      pokemon:pokemon
    });
  });
});
//GET ==> show form to user
router.get('/new', (req,res)=>{
  res.render('new.ejs');
})
//GET ==> shows Pokemon
router.get('/:id',(req,res)=>{
  Pokemon.findByPk(req.params.id).then((pokemon) => {
    res.render('show.ejs',{
      pokemon: pokemon,
    });
  }); 
});
//POST ==> Creates new Pokemon
router.post('/', (req,res)=> {
  Pokemon.create(req.body).then((newPokemon) => { 
    PlayerPokemon.create({
      playerId: req.body.playerId,
      pokemonId: newPokemon.id
    })
    res.redirect('/pokemon') 
  });
});
//EDIT ==>
//GET ==> prefill the data from the model and show form to user
router.get('/:id/edit', function(req, res) {
  Pokemon.findByPk(req.params.id).then((pokemon) => {
    res.render('edit.ejs', {
			pokemon: pokemon,
    });
  });
});
//PUT ==> update the data in our model
router.put('/:id', (req, res) => {
  Pokemon.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((pokemon) => {
    res.redirect('/pokemon');
  });
});
//DELETE ==> delete single object 
router.delete('/:id', (req,res)=>{
  Pokemon.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect('/pokemon')
  });
});


module.exports = router;