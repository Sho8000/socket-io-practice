console.log("ready")

const socket = io();

let currentRoom = null;

const roomSelect = document.getElementById('roomSelect')
const joinRoomButton = document.getElementById('joinRoomButton');
const leaveRoomButton = document.getElementById('leaveRoomButton');
const currentRoomSelected = document.getElementById('messageInput')

joinRoomButton.addEventListener('click',()=>{
  const room = roomSelect.value;
  if(currentRoom){
    socket.emit('leaveRoom', currentRoom);
  }
  currentRoom = room;
  socket.emit('joinRoom',room,99)
})

leaveRoomButton.addEventListener('click', {
  if(currentRoom){
    socket.emit('leaveRoom', currentRoom);
  }
})