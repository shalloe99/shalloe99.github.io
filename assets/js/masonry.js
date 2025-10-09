document.addEventListener('DOMContentLoaded', function() {
  if (typeof $ !== 'undefined') {
    // Init Masonry
    var $grid = $(".grid").masonry({
      gutter: 10,
      horizontalOrder: true,
      itemSelector: ".grid-item",
    });
    // Layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
      $grid.masonry("layout");
    });
  }
});
