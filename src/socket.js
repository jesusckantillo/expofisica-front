import {io} from 'socket.io-client'
const socket = io('http://localhost:3000', {
    path: '/api/',
    transports: ['websocket','polling']
})
export default socket