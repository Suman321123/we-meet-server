const { v4: uuidv4 } =  require('uuid')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http);
const ExpressPeerServer = require('peer').ExpressPeerServer;

const peerServer = ExpressPeerServer(http, {
  debug: true
});

app.use(cors({origin: '*'}))
app.use('/peerjs', peerServer);
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('./src/public'))

app.get('/', (req, res) => {
  res.sendFile('./src/public/index.html')
})

let activeRooms = []

app.get('/getRoomId', (req, res) => {
  const uuid = uuidv4()
  activeRooms.push(uuid)
  res.send(uuid)
})

io.on('connection', (socket) => {
  socket.on('join-room', (roomId, peerId) => {
    console.log(roomId)
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('peer-connected', peerId)
    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('peer-disconnected', peerId)
    })
  })
})

const server = http.listen(9000,() => {
  console.log('Started in 9000');
});

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public/index.html'))
})