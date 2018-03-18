const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');

var Array = require('./model/array');

mongoose.connect('mongodb://breno:12345@ds117749.mlab.com:17749/chegou-agua');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('emitindo');
    io.emit('notificacao', {type:'new-message', text: 'foiii carai'});
});

io.on('disconnect', () => {
    console.log('user disconnected');
});

server.listen(port, () => {
    console.log('Server is running on port ${port}');
})

router.post('/armazena', function(req,res){
  var body = req.body;

  var data = {
    porcentagem: body.porcentagem,
    litros: body.litros
  };

  var a = [];
  a.push(data);

  Array.count(function(err, count){
    if(err){
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }else if(count == 0){

      var array = new Array ({
        array: a
      });
      array.save(function (err, result) {
        if (err) {
          return res.status(500).json({
            title: 'An error occurred',
            error: err
          });
        } else {
          res.status(200).json({
            message: 'Salvou geral!',
            obj: result
          });
        }
      });
    }else{
      Array.findOne({}, function(err, a){
        if(err){
          return res.status(500).json({
            title: 'An error occurred',
            error: err
          });

        }else{
          var aux = a.array;
          aux.push(data)
          var novoArray = new Array({
            array: aux
          });

          Array.remove({_id: a.id}, function (err, result) {
            if (err) {
              return res.status(500).json({
                title: 'An error occurred',
                error: err
              });
            } else {
            }
          });

          novoArray.save(function (err, result, next) {
            if (err) {
              return res.status(500).json({
                title: 'An error occurred',
                error: err
              });
            } else {
              console.log('emitiu');
              io.emit('notificacao',body);
              res.status(200).json({
                message: 'Salvou geral!',
                obj: result
              });
            }
          });
        }
      });
    }
  });
});

router.get('/historico', function(req, res){
  Array.findOne({}, function(err, a) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    } else {
      return res.status(200).json({
        message: 'Array enviado!',
        obj: a.array
      });
    }
  });
});

module.exports = router;
