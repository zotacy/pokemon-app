const express= require('express');
const router = express.Router();
// const players = require('../players.js')
const Player = require('../models').Player;
const Team = require('../models').Team;
const Pokemon = require('../models').Pokemon;

//GET index
router.get('/',(req,res)=>{
    res.render('players/index.ejs')
});
//GET sign-up form
router.get('/signup',(req,res)=>{
    res.render('players/signup.ejs')
});
//GET login form
router.get('/login',(req,res)=>{
    res.render('players/login.ejs')
});
//----------------

// POST ==> post login form
router.post("/login", (req, res) => {
    Player.findOne({
        where: {
            username: req.body.username,
            password: req.body.password,
        },
    }).then((foundPlayer) => {
        res.redirect(`/players/profile/${foundPlayer.id}`);
    }).catch((error) => {
        alert("Incorrect credientials")
        res.redirect('/players')
    });
});
// POST ==> post create new player
router.post("/", (req, res) => {
    Player.create(req.body).then((newPlayer) => {
        res.redirect(`/players/profile/${newPlayer.id}`);
    });
});
//-----------------

// GET ==> get player profile
router.get("/profile/:id", (req, res) => {
    Player.findByPk(req.params.id, {
      include: [{ model: Team }, { model: Pokemon }],
    }).then((singlePlayer) => {
      Team.findAll().then((allTeams) => {
        // console.log('single Player', singlePlayer);
        res.render("players/profile.ejs", {
            player: singlePlayer,
            teams: allTeams,
        });
      });
    });
  })
// PUT ==> UPDATE player profile
router.put("/profile/:id", (req, res) => {
    Player.update(req.body, {
        where: { id:req.params.id },
        returning: true,
        plain: true,
    }).then((updatedPlayer) => {
        res.redirect(`/players/profile/${req.params.id}`);
    });
});
// POST ==> DELETE single player profile
router.delete("/:id", (req, res) => {
    Player.destroy({
        where: { id:req.params.id },
    }).then(() => {
        res.redirect("/players");
    });
});


module.exports = router;
