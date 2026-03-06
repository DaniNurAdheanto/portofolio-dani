import React, { useEffect, useRef } from 'react';
import './scrollmarquee.css';
import gsap from 'gsap';

const ScrollMarquee = ({ texts = ["Designer At Work", "Availlable Freelance"], speed = 30 }) => {
  const marqueeRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const inner = innerRef.current;

    if (!marquee || !inner) return;

    // Get all original items
    const items = inner.querySelectorAll('.marquee_item');
    if (items.length === 0) return;

    const originalCount = items.length;

    // Clone all items multiple times for seamless loop
    let cloneCount = 8;
    for (let i = 1; i < cloneCount; i++) {
      items.forEach(item => {
        const clone = item.cloneNode(true);
        inner.appendChild(clone);
      });
    }

    const totalWidth = inner.offsetWidth;

    // Create the animation
    gsap.fromTo(
      inner,
      { x: 0 },
      {
        x: -(totalWidth / cloneCount),
        duration: speed,
        ease: 'none',
        repeat: -1,
      }
    );

    return () => {
      gsap.killTweensOf(inner);
    };
  }, [speed, texts]);

  return (
    <div className="scrollmarquee_container">
      <div className="scrollmarquee" ref={marqueeRef}>
        <div className="scrollmarquee_inner" ref={innerRef}>
          {texts.map((item, index) => (
            <div key={index} className="marquee_item">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollMarquee;
