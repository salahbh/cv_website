var express = require('express')
var app = express()
 

app.use('/public', express.static('public'))

app.set('view engine','ejs')

app.get('/', function (req, res) {
    res.redirect('/home')
  })
app.get('/home', function (req, res) {
  res.render('home' , {title:'cv website'})
})

app.listen(8080,()=>{

console.log("server is running....")
});

