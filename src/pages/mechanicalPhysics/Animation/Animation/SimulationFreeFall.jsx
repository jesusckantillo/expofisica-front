import React, { useEffect, useState, useRef } from "react";
import Matter from "matter-js";
import { Button, Select, Flex, Text, Box } from "@chakra-ui/react";

const SimulationFreeFall = () => {
  const [reset, setReset] = useState(false);
  const [airFrictionBoxA, setAirFrictionBoxA] = useState(0);
  const [airFrictionBoxB, setAirFrictionBoxB] = useState(0);
  const [isApplied, setIsApplied] = useState(false);
  const myCanvasRef = useRef(null);
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


    var boxB = Bodies.circle(500, 200, 20, {
      isStatic: false,
      frictionAir: airFrictionBoxB,
      render: {
        fillStyle: "white",
      },
    });

    var boxA = Bodies.circle(250, 200, 20, {
      isStatic: false,
      frictionAir: airFrictionBoxA,
      render: {
        fillStyle: "gray",
      },
    });

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

    Composite.add(engine.world, [
      boxA,
      boxB,
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
        console.log(isApplied);
        myCanvasRef.current.innerHTML = "";
        startMatter();
        window.myMatterStarted = true;
        setReset(false);
      }
    }
  }, [reset, airFrictionBoxA, airFrictionBoxB, myCanvasRef]);

  return (
    <Flex flexDirection="row">
        <Box p='4'>
          <Text fontSize='3xl' color='teal' as='samp'>SIMULACION</Text>
          <Flex flexDirection="column">

          <Text marginBottom="5px">Gravedad Figura 1</Text>
          <Select
            value={airFrictionBoxA}
            onChange={(e) => setAirFrictionBoxA(Number(e.target.value))}
            width="150px"
            marginBottom="10px"
          >
            <option value="0">Tierra</option>
            <option value="0.1657">Luna</option>
            <option value="0.1">Marte</option>
            <option value="0.05">Urano</option>
          </Select>
          <Text marginBottom="5px">Gravedad Figura 2</Text>
          <Select
            value={airFrictionBoxB}
            onChange={(e) => setAirFrictionBoxB(Number(e.target.value))}
            width="150px"
            marginBottom="20px"
          >
            <option value="0">Tierra</option>
            <option value="0.1657">Luna</option>
            <option value="0.1">Marte</option>
            <option value="0.05">Urano</option>
          </Select>
          <Button
            colorScheme="teal"
            onClick={() => {
              setReset(true);
              setIsApplied(true);
            }}
            marginRight="20px"
          >
            Aplicar
          </Button>
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

export default SimulationFreeFall;