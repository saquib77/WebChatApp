const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const flash = require('connect-flash');
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res) {
    res.render('index.ejs');
});
app.get('/register',function(req,res){
    res.render('register.ejs');
});
app.get('/login',function(req,res){
    res.render('login.ejs');
});

app.get('/chatHome',function(req,res){
    res.render('chatHome.ejs');
});




const server = http.listen(8080, function() {
    console.log('listening on:8080');
});