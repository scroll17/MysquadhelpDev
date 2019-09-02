import React, {useEffect} from 'react';

import io from 'socket.io-client';
const socket = io('http://localhost:3000');

function ChatPage(){
    useEffect(() => {
        socket.on('connected', function (data) {
            console.log(data);
            socket.emit('my other event', { my: 'data' });
        });

    });
    return (<div>

    </div>)
}
export default ChatPage;

