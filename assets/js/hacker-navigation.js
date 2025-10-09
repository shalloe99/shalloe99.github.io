/**
 * Hacker-Style Navigation Animation
 * Creates authentic terminal/hacker text effects for navigation
 */

class HackerNavigation {
  constructor() {
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    this.binaryChars = '01';
    this.hexChars = '0123456789ABCDEF';
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupHackerEffect());
    } else {
      this.setupHackerEffect();
    }
  }

  setupHackerEffect() {
    const navLinks = document.querySelectorAll('.font-mono');
    
    navLinks.forEach(link => {
      const originalText = link.textContent.trim();
      
      // Add hover event listener
      link.addEventListener('mouseenter', () => {
        this.hackerShuffle(link, originalText);
      });
      
      // Add click event listener for immediate effect
      link.addEventListener('click', () => {
        this.hackerShuffle(link, originalText);
      });
    });
  }

  hackerShuffle(element, originalText) {
    const totalDuration = 200; // Total animation time
    const phases = [
      { chars: this.binaryChars, duration: 60, name: 'binary' },
      { chars: this.hexChars, duration: 60, name: 'hex' },
      { chars: this.chars, duration: 80, name: 'random' }
    ];
    
    let currentPhase = 0;
    let phaseStartTime = 0;
    let isAnimating = true;

    // Add hacker class for visual feedback
    element.classList.add('hacker-mode');

    const animate = (timestamp) => {
      if (!isAnimating) return;

      const elapsed = timestamp - phaseStartTime;
      const currentPhaseData = phases[currentPhase];
      
      if (elapsed >= currentPhaseData.duration) {
        currentPhase++;
        phaseStartTime = timestamp;
        
        if (currentPhase >= phases.length) {
          // Animation complete
          element.textContent = originalText;
          element.classList.remove('hacker-mode');
          return;
        }
      }

      // Calculate progress within current phase
      const phaseProgress = elapsed / currentPhaseData.duration;
      const textLength = originalText.length;
      
      // Create hacker effect based on phase
      let displayText = '';
      for (let i = 0; i < textLength; i++) {
        if (i < Math.floor(phaseProgress * textLength)) {
          // Show correct character
          displayText += originalText[i];
        } else {
          // Show random character from current phase
          const randomIndex = Math.floor(Math.random() * currentPhaseData.chars.length);
          displayText += currentPhaseData.chars[randomIndex];
        }
      }
      
      element.textContent = displayText;
      
      // Continue animation
      requestAnimationFrame(animate);
    };

    phaseStartTime = performance.now();
    requestAnimationFrame(animate);
  }

  // Terminal-style glitch effect
  glitchEffect(element) {
    const originalText = element.textContent;
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    
    let glitchCount = 0;
    const maxGlitches = 5;
    
    const glitch = () => {
      if (glitchCount >= maxGlitches) {
        element.textContent = originalText;
        return;
      }
      
      const glitchedText = originalText
        .split('')
        .map(char => Math.random() < 0.3 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char)
        .join('');
      
      element.textContent = glitchedText;
      glitchCount++;
      
      setTimeout(glitch, 50);
    };
    
    glitch();
  }
}

// Initialize the hacker navigation animation
new HackerNavigation();
