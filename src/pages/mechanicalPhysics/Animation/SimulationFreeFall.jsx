import React, { useEffect, useState } from "react";
import Matter from "matter-js";
import { Button, Select, Flex, Text } from "@chakra-ui/react";

const SimulationFreeFall = () => {
  const [reset, setReset] = useState(false);
  const [airFrictionBoxA, setAirFrictionBoxA] = useState(0);
  const [airFrictionBoxB, setAirFrictionBoxB] = useState(0);
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
          fillStyle: "white",
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
      document.getElementById("myCanvas").innerHTML = "";
      startMatter();
      window.myMatterStarted = true;
      setReset(false);
    }
  }, [reset, airFrictionBoxA, airFrictionBoxB]);

  return (
    <Flex flexDirection="row">
      <div id="myCanvas"></div>
      <Flex flexDirection="column">
        <Text marginBottom="5px">Gravedad Figura 1</Text>
        <Select
          value={airFrictionBoxA}
          onChange={(e) => setAirFrictionBoxA(Number(e.target.value))}
          width="150px"
        >
          <option value="0">Tierra</option>
          <option value="0.1657">Luna</option>
        </Select>
        <Text marginBottom="5px">Gravedad Figura 2</Text>
        <Select
          value={airFrictionBoxB}
          onChange={(e) => setAirFrictionBoxB(Number(e.target.value))}
          width="150px"
        >
          <option value="0">Tierra</option>
          <option value="0.1657">Luna</option>
        </Select>
        <Button
          colorScheme="teal"
          onClick={() => setReset(true)}
          marginRight="10px"
        >
          Aplicar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SimulationFreeFall;
