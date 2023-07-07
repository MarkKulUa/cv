import { useEffect, useState } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);

        if (direction === 'up') {
          setTimeout(() => {
            setScrollDirection('down');
          }, 2000);
        }
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

export const useOutsideClickDetector = (
  ref: React.MutableRefObject<HTMLElement | null>,
  handler: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    };

    document.addEventListener('click', (e) => handleClickOutside(e), false);
    return () => {
      document.removeEventListener('click', (e) => handleClickOutside(e), false);
    };
  }, [ref, handler]);
};
