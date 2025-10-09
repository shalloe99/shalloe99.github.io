/**
 * Gallery Performance Script - Minimal Static Generation Version
 * Only handles essential functionality for maximum performance
 */

(function() {
  'use strict';

  // Only run if gallery exists
  const galleryGrid = document.querySelector('.gallery-grid');
  if (!galleryGrid) return;

  // Minimal hover effects for better UX (optional)
  function initHoverEffects() {
    const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
      // Add subtle hover effect without transitions for instant response
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) translateZ(0)';
        this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateZ(0)';
        this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHoverEffects);
  } else {
    initHoverEffects();
  }

})();
