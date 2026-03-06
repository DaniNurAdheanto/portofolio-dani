import React, { useEffect, useRef } from 'react';
import './scrollmarquee.css';
import gsap from 'gsap';

const ScrollMarquee = ({ texts = ["Crafting Digital Experiences", "Availlable Freelance"], speed = 40, direction = "normal" }) => {
  const marqueeRef = useRef(null);
  const innerRef = useRef(null);
  const animationRef = useRef(null);
  const hasClonedRef = useRef(false);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const inner = innerRef.current;

    if (!marquee || !inner) return;

    // Get all original items
    const items = inner.querySelectorAll('.marquee_item:not([data-cloned])');
    if (items.length === 0) return;

    // Only clone once
    if (!hasClonedRef.current) {
      // Clone each original item multiple times to ensure seamless loop
      const cloneCount = 8;
      for (let i = 1; i < cloneCount; i++) {
        items.forEach(item => {
          const clone = item.cloneNode(true);
          clone.setAttribute('data-cloned', 'true');
          inner.appendChild(clone);
        });
      }
      hasClonedRef.current = true;
    }

    // Get updated width after cloning
    const allItems = inner.querySelectorAll('.marquee_item');
    let singleSetWidth = 0;
    const originalCount = items.length;
    allItems.forEach((item, idx) => {
      if (idx < originalCount) {
        singleSetWidth += item.offsetWidth;
      }
    });

    // Kill previous animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Animation should move by exactly one set width for seamless looping
    const animateDistance = direction === "reverse" ? singleSetWidth : -singleSetWidth;
    
    animationRef.current = gsap.fromTo(
      inner,
      { x: 0 },
      {
        x: animateDistance,
        duration: speed,
        ease: 'none',
        repeat: -1,
      }
    );

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [speed, direction]);

  return (
    <div className={`scrollmarquee_container ${direction === "reverse" ? "marquee-reverse" : ""}`}>
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
