import { useEffect, useState, useRef, useCallback } from "react";

export const useAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  const triggerAnimation = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return [isVisible, domRef, triggerAnimation];
};
