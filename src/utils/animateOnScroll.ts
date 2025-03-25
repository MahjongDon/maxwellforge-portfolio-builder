
export const initScrollAnimations = () => {
  // Select all elements with the reveal class
  const revealElements = document.querySelectorAll('.reveal');
  
  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    }
  );
  
  // Observe all elements with the reveal class
  revealElements.forEach((el) => {
    observer.observe(el);
  });
  
  return () => {
    revealElements.forEach((el) => {
      observer.unobserve(el);
    });
  };
};
