import { useEffect, useState } from "react";

export type MousePosition = {
  x: number;
  y: number;
}

export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition|null>(null);
  useEffect(() => {
    // setup the navigator geolocation
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    }
  }, [])

  return position;
}
