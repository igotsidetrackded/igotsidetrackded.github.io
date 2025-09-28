---
title: "Interior Design Portfolio"
permalink: /projects/
layout: archive
---

{% include feature_row id="portfolio" type="left" %}

{% for project in site.projects %}
- [{{ project.title }}]({{ project.url }})
{% endfor %}

