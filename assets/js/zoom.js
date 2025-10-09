// Initialize medium zoom.
document.addEventListener('DOMContentLoaded', function() {
  if (typeof $ !== 'undefined' && typeof mediumZoom !== 'undefined') {
    medium_zoom = mediumZoom("[data-zoomable]", {
      background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
    });
  }
});
