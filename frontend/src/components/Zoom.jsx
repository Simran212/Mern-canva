import React from "react";
import {
  TransformWrapper,
  TransformComponent,
  useControls
} from "react-zoom-pan-pinch";

const Zoom = () => {
  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <>
        <button
          onClick={() => zoomIn()}
          className="bg-white text-black py-2 px-4 rounded mr-2"
        >
          Zoom In
        </button>
        <button
          onClick={() => zoomOut()}
          className="bg-white text-black py-2 px-4 rounded mr-2"
        >
          Zoom Out
        </button>
        <button
          onClick={() => resetTransform()}
          className="bg-white text-black py-2 px-4 rounded"
        >
          Reset
        </button>
      </>
    );
  };

  return (
    <TransformWrapper>
      <div className="mb-4">
        <Controls />
      </div>
      <TransformComponent>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="test"
          width="100%"
        />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Zoom;
