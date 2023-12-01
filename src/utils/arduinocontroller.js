import socket from '../socket'

async function SimpleCheckConn(experiment) {
  return new Promise((resolve, reject) => {
    socket.emit('checkConnFake', experiment);
    socket.once('checkConnFake', status => {
        resolve(status.status);
    });
  });
}


const CheckConn = (experiment) => {
  return new Promise((resolve, reject) => {
    socket.emit('checkConnFake', experiment);
    socket.once('checkConnFake', (status) => {
      console.log('Server response:', status);
      console.log(status.status)
      console.log(experiment)
      if (status.status) {
        resolve(status.status);
      } else {
        reject(new Error('Connection failed'));
      }
    });
  });
};

  const manageData = async (experiment, isSendingData) => {

      const isConnected = await SimpleCheckConn(experiment);

      if (isConnected) {
          if (!isSendingData) {
              socket.emit('MD');
          } else { // It's sending data
              socket.emit('pause');
          }
      } else {
          console.log("Failed conection");
      }
  }

  const portControl = {
    CheckConn,
    manageData
  };


  export {portControl}; 
 