import socket from '../socket'

async function SimpleCheckConn(experiment) {
  return new Promise((resolve, reject) => {
    socket.emit('checkConn', experiment);
    socket.once('checkConn', status => {
        resolve(status.status);
    });
  });
}

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
    
    const dataFn = data => console.log(data);

    console.log(isConnected);

    if (isConnected) {
      if (!isSendingData) {
        socket.emit('startExperiment', true, 'expData');
        socket.on('expData', dataFn);
      } else { // It's sending data
        socket.emit('startExperiment', false, 'expData');
        socket.off('expData' , dataFn);
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
 