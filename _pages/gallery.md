---
layout: page
permalink: /gallery/
title: gallery
description: A collection of creative works.
nav: true
nav_order: 2
display_categories: [abstract, realism, idealism, nature]
horizontal: false
---

<!-- Critical CSS - Inline for instant loading -->
<style>
/* Critical CSS - Aggressive optimization for instant rendering */
.gallery-grid {
  min-height: 200px;
  contain: layout style paint;
  transform: translateZ(0);
  column-count: 3;
  column-gap: 2rem;
  margin-bottom: 3rem;
}
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: #fff;
  break-inside: avoid;
  margin-bottom: 2rem;
  display: inline-block;
  width: 100%;
  opacity: 1 !important;
  contain: layout style paint;
  transform: translateZ(0);
  backface-visibility: hidden;
}
.gallery-image {
  width: 100%;
  height: auto;
  display: block;
  background-color: #f0f0f0;
  object-fit: cover;
  min-height: 200px;
  transform: translateZ(0) !important;
  backface-visibility: hidden !important;
  image-rendering: optimizeSpeed !important;
  opacity: 1 !important;
  will-change: transform;
  contain: layout style paint;
}
.gallery-image-container {
  position: relative;
  overflow: hidden;
  background: #f8f9fa;
  display: block;
  width: 100%;
  min-height: 200px;
  contain: layout style paint;
}
@media (max-width: 1400px) { .gallery-grid { column-count: 3; column-gap: 1.5rem; } }
@media (max-width: 1200px) { .gallery-grid { column-count: 2; column-gap: 1.5rem; } }
@media (max-width: 768px) { .gallery-grid { column-count: 1; column-gap: 1rem; } }
</style>

<!-- Preload ALL gallery images for instant display -->
<link rel="preload" as="image" href="{{ '/assets/img/chromatic-reverie.jpg' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/realm-of-gods-main.jpg' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/threshold-of-displacement.jpg' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/sanctum-of-azure-skies.jpg' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/celestial-convergence.png' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/sentinel-peaks.png' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/genesis-light.png' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/gilded-cage.jpg' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/studies-in-luminosity.jpg' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/untamed-ambition.jpg' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/euphoric-nocturne.jpg' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/tempest-of-migration.jpg' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/threshold-of-madness.jpg' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/metamorphic-wisdom.jpg' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/instruments-of-eloquence.jpg' | relative_url }}">
<link rel="preload" as="image" href="{{ '/assets/img/evolution-of-violence.jpg' | relative_url }}">

<!-- Load full CSS asynchronously -->
<link rel="preload" href="{{ '/assets/css/gallery.css' | relative_url }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="{{ '/assets/css/gallery.css' | relative_url }}"></noscript>

<!-- Minimal JavaScript for hover effects only -->
<script defer src="{{ '/assets/js/gallery-static.js' | relative_url }}"></script>

<!-- Aggressive image optimization script -->
<script src="{{ '/assets/js/gallery-image-optimizer.js' | relative_url }}"></script>

<!-- Text optimization script for better hover content display -->
<script src="{{ '/assets/js/gallery-text-optimizer.js' | relative_url }}"></script>

<div class="gallery-intro">
  <div class="gallery-intro-content">
    <p class="gallery-subtitle">Volo non quod peto; cogito, ergo sum; cor meum Domino meo.<br>意为："我所愿非我所求；我思，故我在；我心归于我主。"</p>
  </div>
</div>

<div class="gallery-container">
  {% if site.enable_gallery_categories and page.display_categories %}
    <!-- Display categorized projects with static ordering -->
    {% for category in page.display_categories %}
      <div class="gallery-section">
        <div class="gallery-section-header">
          <h2 class="gallery-category-title">{{ category | capitalize }}</h2>
          <div class="gallery-category-line"></div>
        </div>
        {% assign categorized_gallery = site.gallery | where: "category", category %}
        {% assign sorted_gallery = categorized_gallery | sort: "gallery_order" %}
        <div class="gallery-grid">
          {% for project in sorted_gallery %}
            {% include gallery_item.html %}
          {% endfor %}
        </div>
      </div>
    {% endfor %}
  {% else %}
    <!-- Display projects without categories - statically ordered -->
    {% assign all_gallery = site.gallery | sort: "gallery_order" %}
    <div class="gallery-grid">
      {% for project in all_gallery %}
        {% include gallery_item.html %}
      {% endfor %}
    </div>
  {% endif %}
</div>