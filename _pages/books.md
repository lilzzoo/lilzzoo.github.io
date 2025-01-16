---
layout: page
title: 读读
permalink: /books/
description:
nav: true
---

{% assign books_by_rating = site.books | group_by_exp: "book", "book.rating" %}
{% assign sorted_ratings = books_by_rating | sort: "name" | reverse %}

<div class="books">
    {% for rating in sorted_ratings %}
        <h2 class="rating">
            {% for i in (1..5) %}
              {% if i <= rating.name %}
                <span class="full">★</span>
              {% endif %}
            {% endfor %}
            {% if rating.name == 6 %}
              <span class="overflow">❤</span>
            {% endif %}
        </h2>
        {% assign books = rating.items %}
        <div class="grid">
        {% for book in books %}
            {% include book_cover.liquid book=book %}
        {% endfor %}
        </div>
    {% endfor %}
</div>
