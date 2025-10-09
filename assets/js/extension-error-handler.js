/**
 * Extension Error Handler
 * Handles and suppresses browser extension-related errors
 */

(function() {
  'use strict';
  
  // Store original console methods
  const originalError = console.error;
  const originalWarn = console.warn;
  
  // Function to check if error is from browser extension
  function isExtensionError(error) {
    if (typeof error !== 'string') return false;
    
    // Common extension error patterns
    const extensionPatterns = [
      'chrome-extension://',
      'moz-extension://',
      'safari-extension://',
      'pageViewId',
      'message port closed',
      'runtime.lastError',
      'Cannot destructure property',
      'The message port closed before a response was received'
    ];
    
    return extensionPatterns.some(pattern => error.includes(pattern));
  }
  
  // Override console.error to filter extension errors
  console.error = function(...args) {
    const errorMessage = args.join(' ');
    
    if (!isExtensionError(errorMessage)) {
      originalError.apply(console, args);
    }
  };
  
  // Override console.warn to filter extension warnings
  console.warn = function(...args) {
    const warningMessage = args.join(' ');
    
    if (!isExtensionError(warningMessage)) {
      originalWarn.apply(console, args);
    }
  };
  
  // Handle uncaught errors from extensions
  window.addEventListener('error', function(event) {
    if (isExtensionError(event.message) || 
        (event.filename && event.filename.includes('chrome-extension://'))) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  });
  
  // Handle unhandled promise rejections from extensions
  window.addEventListener('unhandledrejection', function(event) {
    if (isExtensionError(event.reason?.toString() || '')) {
      event.preventDefault();
      return false;
    }
  });
  
})();
