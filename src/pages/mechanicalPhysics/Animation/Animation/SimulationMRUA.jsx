import React, { useEffect, useState, useRef } from "react";
import Matter from "matter-js";
import { Box, Button, Input, Flex, Text } from "@chakra-ui/react";

const SimulationMRUA = () => {
  const [reset, setReset] = useState(false);
  const [angle, setAngle] = useState(45);
  const [timerRunning, setTimerRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isApplied, setIsApplied] = useState(false);
  const myCanvasRef = useRef(null);

  const calculateRampVertices = (angle) => {
    const hypotenuse = 400;
    const opposite = hypotenuse * Math.sin((angle * Math.PI) / 180);
    const adjacent = hypotenuse * Math.cos((angle * Math.PI) / 180);

    const rampVertices = [
      { x: 0, y: 500 },
      { x: 0, y: 500 - opposite },
      { x: adjacent, y: 500 },
    ];

    return rampVertices;
  };

  const calculateCirclePosition = (rampVertices) => {
    const circleY = rampVertices[1].y + 20;
    return circleY;
  };

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

    const rampVertices = calculateRampVertices(angle);
    const circleY = calculateCirclePosition(rampVertices);

    var boxA = Bodies.circle(40, circleY, 20, {
      isStatic: false,
      render: {
        fillStyle: "gray",
      },
    });

    var groundOptions = {
      isStatic: true,
      render: {
        fillStyle: "white",
      },
    };

    var groundTop = Bodies.rectangle(400, 0, 800, 50, groundOptions);
    var groundBottom = Bodies.rectangle(400, 600, 800, 50, groundOptions);
    var groundRight = Bodies.rectangle(800, 300, 50, 600, groundOptions);
    var groundLeft = Bodies.rectangle(0, 300, 50, 600, groundOptions);

    const rampX = rampVertices[2].x;
    const rampY = rampVertices[2].y;

    const ramp = Bodies.fromVertices(rampX / 2 - 50, rampY, [rampVertices], {
      isStatic: false,
    });

    let collisionDetected = false;

    const collisionStartHandler = (event) => {
      const pairs = event.pairs;
      if (collisionDetected == false) {
        for (let i = 0; i < pairs.length; i++) {
          const pair = pairs[i];
          if (
            (pair.bodyA === boxA && pair.bodyB === groundBottom) ||
            (pair.bodyA === groundBottom && pair.bodyB === boxA)
          ) {
            stopTimer();
            collisionDetected = true;
          }
        }
      }
    };

    Matter.Events.on(engine, "collisionStart", collisionStartHandler);

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
      if (myCanvasRef.current) {
        myCanvasRef.current.innerHTML = "";
        startMatter();
        window.myMatterStarted = true;
        setReset(false);
      }
    }
  }, [reset, angle, myCanvasRef]);

  const startTimer = () => {
    setStartTime(Date.now());
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setElapsedTime(Date.now() - startTime + elapsedTime);
    setTimerRunning(false);
  };

  const handleStartButtonClick = () => {
    if (angle >= 10 && angle <= 75) {
      setElapsedTime(0);
      if (!timerRunning) {
        startTimer();
      } else {
        stopTimer();  
      }
      setReset(true);
    } else {
      alert("El ángulo debe estar entre 10 y 75 grados");
    }
  };

  return (
    <Flex flexDirection="row">
      <Box p='4'>
        <Text fontSize='3xl' color='teal' as='samp'>SIMULACION</Text>
        <Flex flexDirection="column">
          <Text marginBottom="5px">Ajusta el angulo</Text>
          <Input
            type="number"
            value={angle === 0 ? "" : angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            marginBottom="20px"
          />
          <Button
            colorScheme="teal"
            onClick={() => {
              handleStartButtonClick();
              setIsApplied(true);
            }}
            marginBottom="20px"
          >
            Aplicar
          </Button>
          {isApplied && (
            <Text marginBottom="5px">
              Tiempo transcurrido: {elapsedTime / 1000} segundos
            </Text>
          )}
        </Flex>
      </Box>
      {isApplied && (
        <Box
          ref={myCanvasRef}
          id="myCanvas"
          style={{ marginRight: "20px" }}
        ></Box>
      )}
    </Flex>
  );
};

export default SimulationMRUA;
