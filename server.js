const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');

var Array = require('./model/array');

mongoose.connect('mongodb://localhost/chegou-agua');

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
    io.emit('notificacao', {type:'new-message', text: 'Deu certo!'});
});

io.on('disconnect', () => {
    console.log('user disconnected');
});

server.listen(port, () => {
    console.log('Server is running on port ${port}');
})

router.post('/armazena', function(req,res){
  var body = req.body;

  var dt = new Date();
  var date = dt.toLocaleString()

  var data = {
    porcentagem: body.porcentagem,
    litros: body.litros,
    data: date
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

          novoArray.save(function (err, result) {
            if (err) {
              return res.status(500).json({
                title: 'An error occurred',
                error: err
              });
            } else{
              io.emit('notificacao',data);
              return res.status(200).json({
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
    } else if(a === undefined || a === null){
        return res.status(500).json({
        title: 'Não há histórico discponível!'
      });
    } else {
        return res.status(200).json({
        message: 'Histórico enviado!',
        obj: a.array

      });
    }
  });
});

module.exports = router;
