import React, { useEffect, useRef, useState } from "react";
import RIGHTARROWICON from "../../../../../assets/rightSideArrowIcon.svg";
import LEFTARROWICON from "../../../../../assets/leftArrowIcon.svg";
import styles from "./style.module.css";
const Carousel = ({ children }) => {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkButtons = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    // Show left button only if not at the start
    setShowLeft(scrollLeft > 0);

    // Show right button only if not at the end
    setShowRight(scrollLeft + clientWidth < scrollWidth - 10); // <-- buffer
  };

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.4; // scroll by 80% width
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkButtons();
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkButtons);
      window.addEventListener("resize", checkButtons);
    }
    return () => {
      if (container) container.removeEventListener("scroll", checkButtons);
      window.removeEventListener("resize", checkButtons);
    };
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      {showLeft && (
        <button
          className={`${styles.arrowButton} ${styles.left}`}
          onClick={() => scroll("left")}
        >
          <img src={LEFTARROWICON} alt="LEFT" />
        </button>
      )}

      <div className={styles.carouselContainer} ref={containerRef}>
        <div className={styles.carousel}>{children}</div>
      </div>

      {showRight && (
        <button
          className={`${styles.arrowButton} ${styles.right}`}
          onClick={() => scroll("right")}
        >
          <img src={RIGHTARROWICON} alt="RIGHT" />
        </button>
      )}
    </div>
  );
};

export default Carousel;
