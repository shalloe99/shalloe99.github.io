---
layout: page
permalink: /blog/
title: blog
description: Welcome to my blog. It's great to have you here.
nav: true
---

<div class="post-list">
  {% for post in site.posts %}
    <div class="post-item">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
      <p>{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
    </div>
  {% endfor %}
</div>
