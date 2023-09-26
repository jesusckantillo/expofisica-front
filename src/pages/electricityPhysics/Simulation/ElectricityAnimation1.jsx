import React from "react";
import { useRef, useEffect } from "react";
import Matter from "matter-js";

function initializeSimulation() {
    // module aliases
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composite = Matter.Composite;

    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
        element: document.getElementById("physics-container"), // Use the correct element
        engine: engine,
    });

    var rampVertices = [
        { x: 0, y: 500 }, // Punto inferior izquierdo
        { x: 0, y: 310 }, // Punto superior izquierdo
        { x: 400, y: 500 }  // Punto inferior derecho
    ];

    var ramp = Bodies.fromVertices(159, 508, [rampVertices], {
        isStatic: false
    });

    var groundOptions = {
        isStatic: true
    };

    // create two boxes and a ground
    var boxA = Bodies.circle(40, 370, 20);

    var boxB = Bodies.rectangle(40,370,40,40)

    var groundTop = Bodies.rectangle(400, 0, 800, 50, groundOptions);
    var groundBottom = Bodies.rectangle(400, 600, 800, 50, groundOptions);
    var groundRight = Bodies.rectangle(800, 300, 50, 600, groundOptions);
    var groundLeft = Bodies.rectangle(0, 300, 50, 600, groundOptions);
    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, groundTop, groundBottom, groundRight, groundLeft, ramp]);

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
}
const ElectricityAnimation1 = () => {
    const simulationInitialized = useRef(false);

    useEffect(() => {
        if (!simulationInitialized.current) {
            initializeSimulation();
            simulationInitialized.current = true;
        }
    }, []);

    return (
        <div id="physics-container"></div>
    );
}

export default ElectricityAnimation1;