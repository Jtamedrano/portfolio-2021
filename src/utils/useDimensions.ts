import { useEffect, useState } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

export default function useDimensions(): [Dimensions] {
  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : 0;
    const height = hasWindow ? window.innerHeight : 0;

    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  return [windowDimensions];
}
