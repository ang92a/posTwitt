import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'http://31.129.49.45';

const socket = io(URL, {
  autoConnect: false,
});

export default socket;
