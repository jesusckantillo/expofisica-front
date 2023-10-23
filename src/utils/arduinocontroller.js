import socket from '../socket'

const SimpleCheckConn = (experiment) => {
  socket.emit('checkConn', experiment);
  socket.once('checkConn', (status) => {
    console.log('Server response:', status);
    return status.status
  });
};




const CheckConn = (experiment) => {
  return new Promise((resolve, reject) => {
    socket.emit('checkConn', experiment);
    socket.once('checkConn', (status) => {
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
    if (!isConnected) {
      if (isSendingData) {
        socket.emit('startExperiment', true, 'expData');
        socket.on('expData', (data) => {
          console.log(data); 
        });
      } else {
        socket.emit('startExperiment', false, 'expData');
        socket.off('expData');
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
 