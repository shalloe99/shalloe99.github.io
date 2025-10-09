/**
 * Gallery Image Optimization Script - Maximum Performance
 * Eliminates all image rendering lag with aggressive optimizations
 */

(function() {
  'use strict';

  // Force immediate image rendering
  function optimizeImages() {
    const images = document.querySelectorAll('.gallery-image');
    
    images.forEach(img => {
      // Force immediate rendering
      img.style.opacity = '1';
      img.style.transform = 'translateZ(0)';
      img.style.backfaceVisibility = 'hidden';
      img.style.imageRendering = 'optimizeSpeed';
      img.style.willChange = 'transform';
      img.style.contain = 'layout style paint';
      
      // Force GPU layer
      img.style.transform = 'translateZ(0)';
      
      // If image is already loaded, ensure it's visible
      if (img.complete) {
        img.style.opacity = '1';
      } else {
        // Handle loading
        img.addEventListener('load', function() {
          this.style.opacity = '1';
        }, { once: true });
        
        img.addEventListener('error', function() {
          this.style.opacity = '1'; // Show even if error
        }, { once: true });
      }
    });
  }

  // Run immediately
  optimizeImages();
  
  // Run again after DOM is ready (in case images load later)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', optimizeImages);
  } else {
    optimizeImages();
  }

  // Run on window load as final optimization
  window.addEventListener('load', optimizeImages);

})();
