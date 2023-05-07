import React, { useState, useRef, useEffect } from "react";

interface CursorProps {}

function Circle({ size, transition, difference }: { size: number; transition: number; difference: number }) {
  const circleRef = useRef<HTMLDivElement>(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { pageX, pageY } = event;
      setCoordinates({ x: pageX, y: pageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.left = `${coordinates.x - (15 - difference)}px`;
      circleRef.current.style.top = `${coordinates.y - (15 - difference)}px`;
    }
  }, [coordinates]);

  return (
    <div
      ref={circleRef}
      style={{
        position: "fixed",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: coordinates.x === 0 ? "black" : "#3182ce",
        transition: `all ${transition}s ease-out`,
        zIndex: 0,
      }}
    />
  );
}

const CursorAnim = () => {
  const circles = [
    { size: 30, transition: 0.1, difference: 0 },
    { size: 29, transition: 0.11, difference: 0.5 },
    { size: 28, transition: 0.12, difference: 1 },
    { size: 27, transition: 0.13, difference: 1.5 },
    { size: 26, transition: 0.14, difference: 2 },
    { size: 25, transition: 0.15, difference: 2.5 },
    { size: 24, transition: 0.16, difference: 3 },
    { size: 23, transition: 0.17, difference: 3.5 },
    { size: 22, transition: 0.18, difference: 4 },
    { size: 21, transition: 0.19, difference: 4.5 },
    { size: 20, transition: 0.2, difference: 5 },
    { size: 19, transition: 0.21, difference: 5.5 },
    { size: 18, transition: 0.22, difference: 6 },
    { size: 17, transition: 0.23, difference: 6.5 },
    { size: 16, transition: 0.24, difference: 7 },
    { size: 15, transition: 0.25, difference: 7.5 },
    { size: 14, transition: 0.26, difference: 8 },
    { size: 13, transition: 0.27, difference: 8.5 },
    { size: 12, transition: 0.28, difference: 9 },
    { size: 11, transition: 0.29, difference: 9.5 },
    { size: 10, transition: 0.3, difference: 10 },
  ];
  return (
    <div>
      {circles.map((circle, index) => (
        <Circle
          key={index}
          size={circle.size}
          transition={circle.transition}
          difference={circle.difference}
        />
      ))}
    </div>
  );
};

export default CursorAnim;
