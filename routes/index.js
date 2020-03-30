var express = require('express');
var router = express.Router();
var messages = [ { text: 'Hi there!', user: 'Amando', added: new Date() }, { text: 'Hello World!', user: 'Charles', added: new Date() } ];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })

});
router.get('/new', function(req, res, next) {
  res.render('post',{title:"NEW TEXT"})
});

router.post('/', function(req, res, next) {
  console.log('dsd')
  var messageText = req.body.text;
  var messageUser = req.body.user;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

module.exports = router;
