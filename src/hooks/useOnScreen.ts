import { useState, useEffect } from "react";

export default function useOnScreen(ref: React.RefObject<HTMLDivElement>) {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIsOnScreen(entry.isIntersecting)
  );

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isOnScreen;
}
