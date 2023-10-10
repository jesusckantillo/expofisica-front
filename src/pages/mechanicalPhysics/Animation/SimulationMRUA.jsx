import React, { useEffect, useState } from "react";
import Matter from 'matter-js';

const SimulationMRUA = () => {
    const [reset, setReset] = useState(false);
    const [triangleY, setTriangleY] = useState(300);
    const startMatter = () => {
      var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composite = Matter.Composite;
  
      var engine = Engine.create();
  
      var render = Render.create({
        element: document.getElementById("myCanvas"),
        engine: engine,
        options: {
          width: 800,
          height: 600,
          wireframes: false,
        },
      });
  
      var boxA = Bodies.circle(40, triangleY + 58, 20, {
        isStatic: false,
        render: {
          fillStyle: "white",
        },
      });
  
      var rampVertices = [
        { x: 0, y: 500 }, // Punto inferior izquierdo
        { x: 0, y: triangleY }, // Punto superior izquierdo
        { x: 400, y: 500 }, // Punto inferior derecho
      ];
  
      var groundOptions = {
        isStatic: true,
        render: {
          fillStyle: "gray",
        },
      };
  
      var groundTop = Bodies.rectangle(400, 0, 800, 50, groundOptions);
      var groundBottom = Bodies.rectangle(400, 600, 800, 50, groundOptions);
      var groundRight = Bodies.rectangle(800, 300, 50, 600, groundOptions);
      var groundLeft = Bodies.rectangle(0, 300, 50, 600, groundOptions);
  
      var ramp = Bodies.fromVertices(159, 508, [rampVertices], {
        isStatic: false,
      });
  
      Composite.add(engine.world, [
        boxA,
        ramp,
        groundTop,
        groundBottom,
        groundRight,
        groundLeft,
      ]);
  
      Render.run(render);
  
      var runner = Runner.create();
      Runner.run(runner, engine);
    };
  

    useEffect(() => {
        if (!window.myMatterStarted || reset) {
          document.getElementById("myCanvas").innerHTML = "";
          startMatter();
          window.myMatterStarted = true;
          setReset(false);
        }
      }, [reset, triangleY]);
  
    return (
      <div>
        <div id="myCanvas"></div>
        <button onClick={() => setReset(true)}>Reiniciar</button>
        <input type="number" value={triangleY} onChange={(e) => setTriangleY(Number(e.target.value))} />
      </div>
    );
  };
  
  export default SimulationMRUA;