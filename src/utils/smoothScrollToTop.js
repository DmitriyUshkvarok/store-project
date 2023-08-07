export const smoothScrollToTop = () => {
  const scrollStep = -window.scrollY / (500 / 15);

  const scrollToTop = () => {
    if (window.scrollY > 200) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(scrollToTop);
    }
  };

  requestAnimationFrame(scrollToTop);
};
