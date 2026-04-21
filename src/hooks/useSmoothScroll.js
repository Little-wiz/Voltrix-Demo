import { useEffect } from 'react';

// Little-wiz updated: Easing function — cubic ease-in-out
function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Little-wiz updated: Core scroll function
function smoothScrollTo(targetY, duration = 900) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;

    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1); 
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * ease);

    // Little-wiz updated: Keep animating until progress reaches 1
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function useSmoothScroll() {
  useEffect(() => {
    function handleClick(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const navHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '72',
        10
      );

      const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight;

      smoothScrollTo(targetY, 900);

      if (history.pushState) {
        history.pushState(null, '', href);
      }
    }

    document.addEventListener('click', handleClick);

    // Little-wiz updated: Clean up listener when component unmounts
    return () => document.removeEventListener('click', handleClick);
  }, []);
}

// little-wiz was here
