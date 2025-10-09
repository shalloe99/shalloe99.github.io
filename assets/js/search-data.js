// Search data for Jekyll site with categorized tabs
// This file loads search data from search.json and configures ninja-keys with categories

document.addEventListener('DOMContentLoaded', function() {
  // Load search data from search.json
  fetch('/search.json')
    .then(response => response.json())
    .then(data => {
      console.log('Search data loaded:', data.length, 'items');
      
      // Make search data available globally
      window.searchData = data;
      
      // Initialize ninja-keys with categorized data
      const ninjaKeys = document.querySelector('ninja-keys');
      if (ninjaKeys) {
        // Create categorized data structure for ninja-keys
        const categorizedData = createCategorizedData(data);
        
        // Configure ninja-keys with categorized data
        ninjaKeys.data = categorizedData;
        
        // Set up ninja-keys configuration
        ninjaKeys.setAttribute('placeholder', 'Search...');
        ninjaKeys.setAttribute('hideBreadcrumbs', '');
        ninjaKeys.setAttribute('noAutoLoadMdIcons', '');
        
        console.log('Ninja-keys configured with categorized data:', categorizedData.length, 'items');
      }
    })
    .catch(error => {
      console.warn('Could not load search data:', error);
      // Fallback empty data
      window.searchData = [];
    });
});

// Create categorized data structure for ninja-keys
function createCategorizedData(data) {
  const categorizedItems = [];
  
  // Group data by categories
  const groups = {};
  data.forEach(item => {
    const category = item.category || 'Other';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
  });
  
  // Define category order
  const categoryOrder = ['About', 'Projects', 'Research', 'Gallery', 'Blog', 'News', 'Service', 'Pages', 'Other'];
  
  // Create categorized items for ninja-keys in specified order
  categoryOrder.forEach(category => {
    if (groups[category] && groups[category].length > 0) {
      // Add items in this category
      groups[category].forEach(item => {
        categorizedItems.push({
          id: item.url,
          title: item.title,
          section: category,
          handler: () => {
            window.location.href = item.url;
          }
        });
      });
    }
  });
  
  return categorizedItems;
}

// Make openSearchModal globally available
window.openSearchModal = function() {
  const ninjaKeys = document.querySelector('ninja-keys');
  if (ninjaKeys) {
    ninjaKeys.open();
  }
};