import React, { useEffect, useState } from "react";
import Matter from "matter-js";
import { Box, Button, Input, Flex, Text } from "@chakra-ui/react";

const SimulationMRUA = () => {
  const [reset, setReset] = useState(false);
  const [angle, setAngle] = useState(45);

  const calculateRampVertices = (angle) => {
    // Calcula los puntos superior e inferior derecho de la rampa
    const hypotenuse = 400; // Longitud constante de la hipotenusa
    const opposite = hypotenuse * Math.sin((angle * Math.PI) / 180);
    const adjacent = hypotenuse * Math.cos((angle * Math.PI) / 180);

    const rampVertices = [
      { x: 0, y: 500 }, // Punto inferior izquierdo
      { x: 0, y: 500 - opposite }, // Punto superior izquierdo
      { x: adjacent, y: 500 }, // Punto inferior derecho
    ];

    console.log(rampVertices[2].x / 2)
    console.log(rampVertices[2].x)
    return rampVertices;
  };

  const calculateCirclePosition = (rampVertices) => {
    // Calcula la posición y del círculo en función de la rampa
    const circleY = rampVertices[1].y + 20; // Ajusta el valor en función de la posición del círculo

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

    const rampX = rampVertices[2].x;
    const rampY = rampVertices[2].y; 

    const ramp = Bodies.fromVertices(rampX/2 - 50, rampY, [rampVertices], {
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
  }, [reset, angle]);

  return (
    <Flex flexDirection="row">
      <Box id="myCanvas" style={{ marginRight: "20px" }}></Box>
      <Flex flexDirection="column">
        <Text marginBottom="5px">Ajusta el angulo</Text>
        <Input
          type="number"
          value={angle === 0 ? '' : angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          marginBottom="20px"
        />
      <Button
        colorScheme="teal"
        onClick={() => {
          if (angle >= 10 && angle <= 75) {
            setReset(true);
          } else {
            alert("El ángulo debe estar entre 10 y 75 grados");
          }
        }}
      >
        Aplicar
      </Button>
      </Flex>
    </Flex>
  );
};

export default SimulationMRUA;
