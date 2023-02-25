
// const app = require("./index");
// const connect = require("./configs/db");

// app.get('/', (req, res) => {
//     res.send(`<h1 style="color:blue; font-size:100px;" >Hello World</h1>`);
//   })

// const port = process.env.PORT || 5000;

// app.listen(port, async () => {
//   console.log(`Listening on port ${port}`);
//   await connect();
// });
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
  path: '.env',
});

const app = require('./app');

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Db connected');
  })
  .catch((e) => {
    console.log(e, 'Failed to connect Db');
  });

const server = app.listen(process.env.PORT || 3001, () => {
  console.log('Server started');
});

const io = require('socket.io')(server, { pingTimeout: 60000 });

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('authenticated', (userId) => {
    console.log(userId, 'auth');
    socket.join(userId);
  });

  socket.on('seen', (groupId) => {
    socket.broadcast.to(groupId).emit('seen', groupId);
  });
  socket.on('render', (groupId) => {
    socket.broadcast.to(groupId).emit('render', groupId);
  });

});
