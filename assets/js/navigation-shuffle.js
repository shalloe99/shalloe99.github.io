/**
 * Character Shuffle Animation for Navigation
 * Creates a dynamic text effect where characters shuffle before settling
 */

class NavigationShuffle {
  constructor() {
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupShuffle());
    } else {
      this.setupShuffle();
    }
  }

  setupShuffle() {
    const navLinks = document.querySelectorAll('.font-mono');
    
    navLinks.forEach(link => {
      const originalText = link.textContent.trim();
      
      // Add hover event listener
      link.addEventListener('mouseenter', () => {
        this.shuffleText(link, originalText);
      });
      
      // Add click event listener for immediate effect
      link.addEventListener('click', () => {
        this.shuffleText(link, originalText);
      });
    });
  }

  shuffleText(element, originalText) {
    const shuffleDuration = 25; // Slightly slower for more elegant effect
    let iteration = 0;

    // Add shuffling class for visual feedback
    element.classList.add('shuffling');

    const interval = setInterval(() => {
      element.textContent = originalText
        .split('')
        .map((char, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          return this.chars[Math.floor(Math.random() * this.chars.length)];
        })
        .join('');

      if (iteration >= originalText.length) {
        clearInterval(interval);
        element.textContent = originalText;
        // Remove shuffling class after animation completes
        setTimeout(() => {
          element.classList.remove('shuffling');
        }, 50); // Slightly longer for smoother transition
      }

      iteration += 1 / 3;
    }, shuffleDuration);
  }
}

// Initialize the navigation shuffle animation
new NavigationShuffle();
