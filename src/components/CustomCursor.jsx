'use client';

import { useEffect } from 'react';

// ─── Custom cursor interaction component
export default function CustomCursor() {
  // ─── Track mouse movement and apply hover/visibility cursor effects
  useEffect(() => {
    const cursor = document.querySelector('[data-cursor]');
    const anchorElements = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');

    if (!cursor) return;

    // ─── Update cursor position based on mouse movement
    const handleMouseMove = (event) => {
      setTimeout(() => {
        cursor.style.top = `${event.clientY}px`;
        cursor.style.left = `${event.clientX}px`;
      }, 100);
    };

    // ─── Apply hover styling when interacting with clickable elements
    const hoverActive = () => {
      cursor.classList.add('hovered');
    };

    // ─── Remove hover styling when leaving clickable elements
    const hoverDeactive = () => {
      cursor.classList.remove('hovered');
    };

    // ─── Disable cursor when leaving the browser window
    const mouseOutBody = () => {
      cursor.classList.add('disabled');
    };

    // ─── Re-enable cursor when returning to the browser window
    const mouseOverBody = () => {
      cursor.classList.remove('disabled');
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseout', mouseOutBody);
    document.body.addEventListener('mouseover', mouseOverBody);

    anchorElements.forEach((el) => {
      el.addEventListener('mouseover', hoverActive);
      el.addEventListener('mouseout', hoverDeactive);
    });

    buttons.forEach((btn) => {
      btn.addEventListener('mouseover', hoverActive);
      btn.addEventListener('mouseout', hoverDeactive);
    });

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseout', mouseOutBody);
      document.body.removeEventListener('mouseover', mouseOverBody);

      anchorElements.forEach((el) => {
        el.removeEventListener('mouseover', hoverActive);
        el.removeEventListener('mouseout', hoverDeactive);
      });

      buttons.forEach((btn) => {
        btn.removeEventListener('mouseover', hoverActive);
        btn.removeEventListener('mouseout', hoverDeactive);
      });
    };
  }, []);

  return <div className="cursor" data-cursor></div>;
}
