/**
 * Gallery Order Manager - PERFORMANCE OPTIMIZED
 * Handles consistent randomization of gallery items using localStorage caching
 * and optimizes image loading performance
 */

(function() {
  'use strict';

  // Performance optimizations
  const STORAGE_KEY = 'gallery_order_seed';
  const GALLERY_GRID_ID = 'gallery-grid';
  
  // Cache DOM elements for better performance
  let galleryGrid = null;
  let galleryItems = null;

  // Seeded random number generator for consistent randomization
  class SeededRandom {
    constructor(seed) {
      this.seed = seed;
    }

    // Optimized Linear Congruential Generator
    next() {
      this.seed = (this.seed * 9301 + 49297) % 233280;
      return this.seed / 233280;
    }
  }

  // Optimized Fisher-Yates shuffle with seeded random
  function seededShuffle(array, seed) {
    const rng = new SeededRandom(seed);
    const shuffled = array.slice(); // Use slice() instead of spread for better performance
    
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(rng.next() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
  }

  // Get or create a random seed for this gallery - optimized
  function getGallerySeed() {
    let seed = localStorage.getItem(STORAGE_KEY);
    
    if (!seed) {
      // Generate a new seed based on current date
      seed = Date.now();
      localStorage.setItem(STORAGE_KEY, seed);
    }
    
    return parseInt(seed, 10);
  }

  // Optimized shuffle gallery items
  function shuffleGallery() {
    if (!galleryGrid) return;

    // Use cached items if available
    if (!galleryItems) {
      galleryItems = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
    }
    
    if (galleryItems.length === 0) return;

    // Get consistent seed from localStorage
    const seed = getGallerySeed();
    
    // Create shuffled order
    const shuffledItems = seededShuffle(galleryItems, seed);
    
    // Use DocumentFragment for better performance
    const fragment = document.createDocumentFragment();
    shuffledItems.forEach(item => {
      fragment.appendChild(item);
    });
    
    // Single DOM operation
    galleryGrid.appendChild(fragment);
  }

  // Optimized image loading with Intersection Observer
  function setupImageLoading() {
    const images = document.querySelectorAll('.gallery-image[loading="lazy"]');
    
    // Use Intersection Observer for better performance
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.complete) {
              img.classList.add('loaded');
            } else {
              img.addEventListener('load', function() {
                this.classList.add('loaded');
              });
              
              img.addEventListener('error', function() {
                this.classList.add('loaded'); // Still show with error state
              });
            }
            observer.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px', // Start loading 50px before image comes into view
        threshold: 0.01
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for older browsers
      images.forEach(img => {
        if (img.complete) {
          img.classList.add('loaded');
        } else {
          img.addEventListener('load', function() {
            this.classList.add('loaded');
          });
          
          img.addEventListener('error', function() {
            this.classList.add('loaded');
          });
        }
      });
    }
  }

  // Optimized initialization
  function initGallery() {
    // Cache DOM elements
    galleryGrid = document.getElementById(GALLERY_GRID_ID);
    
    // Only shuffle if categories are disabled (non-categorized view)
    if (galleryGrid && !galleryGrid.closest('.gallery-section')) {
      shuffleGallery();
    }
    
    setupImageLoading();
    // Gallery displays instantly like projects page - no animations
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }

  // Expose function to reset gallery order (useful for debugging)
  // Developers can call this from browser console: resetGalleryOrder()
  window.resetGalleryOrder = function() {
    localStorage.removeItem('gallery_order_seed');
    console.log('Gallery order has been reset. Page will reload with a new random order.');
    location.reload();
  };
  
  // Expose function to check current seed
  window.getGalleryOrderInfo = function() {
    const seed = localStorage.getItem('gallery_order_seed');
    if (seed) {
      const date = new Date(parseInt(seed));
      console.log('Gallery order was set on:', date.toLocaleString());
      console.log('Seed value:', seed);
      console.log('To reset and see a new random order, call: resetGalleryOrder()');
    } else {
      console.log('No gallery order set yet. It will be set on first visit.');
    }
  };

})();

