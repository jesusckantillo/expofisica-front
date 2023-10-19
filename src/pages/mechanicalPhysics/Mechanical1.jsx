import React, { useState, useEffect } from "react";
import socket from "../../socket";
import SimulationMRUA from "./Animation/Animation/SimulationMRUA";

const Mechanical1 = () => {
  const [sensorData, setSensorData] = useState({});
  const [experimentCode, setExperimentCode] = useState("FREEFALL"); // Cambia el valor aquí

  useEffect(() => {
    socket.on("sensor:data", (data) => {
      setSensorData(data);
    });
    return () => {
      socket.off();
    };
  }, []);

  const sendExperimentCode = () => {
    socket.emit("experiment:code", experimentCode);
  };

  return (
    <div>
      <div>Experimento 1 de física mecánica</div>
      <div>
      <button onClick={sendExperimentCode}>Iniciar Transmisión</button>
        <button>Pausar Transmisión</button>
      </div>
      < SimulationMRUA />
    </div>
  );
};

export default Mechanical1;
