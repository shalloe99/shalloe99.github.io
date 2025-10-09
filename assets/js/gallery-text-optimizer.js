/**
 * Gallery Text Optimizer
 * Dynamically adjusts text truncation based on available space
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  // Optimize text display for gallery items
  function optimizeGalleryText() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
      const description = item.querySelector('.gallery-description');
      if (!description) return;

      // Create a clone to measure text without affecting layout
      const clone = description.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.visibility = 'hidden';
      clone.style.height = 'auto';
      clone.style.maxHeight = 'none';
      clone.style.overflow = 'visible';
      clone.style.whiteSpace = 'nowrap';
      clone.style.width = description.offsetWidth + 'px';
      
      document.body.appendChild(clone);
      
      // Get the natural height of the text
      const naturalHeight = clone.scrollHeight;
      const availableHeight = description.offsetHeight;
      
      document.body.removeChild(clone);
      
      // If text overflows, add truncated class for fade effect
      if (naturalHeight > availableHeight) {
        description.classList.add('truncated');
      } else {
        description.classList.remove('truncated');
      }
    });
  }

  // Handle resize events
  let resizeTimeout;
  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(optimizeGalleryText, 150);
  }

  // Initialize on page load
  ready(function() {
    // Initial optimization
    setTimeout(optimizeGalleryText, 100);
    
    // Re-optimize on resize
    window.addEventListener('resize', handleResize);
    
    // Re-optimize when images load (in case they affect layout)
    const images = document.querySelectorAll('.gallery-image');
    images.forEach(img => {
      if (img.complete) {
        optimizeGalleryText();
      } else {
        img.addEventListener('load', optimizeGalleryText);
      }
    });
  });

  // Expose function for manual optimization if needed
  window.optimizeGalleryText = optimizeGalleryText;

})();
