"use client";
import React, { useEffect, useRef } from 'react';

interface ScrollObserverProps {
  onIntersect: (isIntersecting: boolean) => void;
}

const ScrollObserver: React.FC<ScrollObserverProps> = ({ onIntersect }) => {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = observerRef.current;
    if (!observer) return;

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        onIntersect(!entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0,
      }
    );

    intersectionObserver.observe(observer);

    return () => intersectionObserver.disconnect();
  }, [onIntersect]);

  return <div ref={observerRef} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px' }} />;
};

export default ScrollObserver;