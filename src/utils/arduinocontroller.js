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
    console.log("dato",isSendingData)
    const isConnected = await SimpleCheckConn(experiment);

    if (isConnected) {
<<<<<<< Updated upstream
      if (!isSendingData) {
        socket.emit('MD');
      } else { // It's sending data
        socket.emit('pause');
=======
      if (isSendingData) {
        socket.emit('startExperiment', false, 'expData');
      } else { // It's not sending data
        socket.emit('startExperiment', true, 'expData');
>>>>>>> Stashed changes
      }

    } else {
      console.log("Failed conection");
    }
  };
  const portControl = {
    CheckConn,
    manageData
  };


  export {portControl}; 
 