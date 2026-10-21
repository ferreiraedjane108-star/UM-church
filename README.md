# UM Church Website - WEDE5020 POE Part 3 Final Submission

## 1. Project Overview
**Organization:** UM Church Cape Town - Hope & Faith
**Student:** Edjane Ferreira
**Module:** WEDE5020 - Web Development
**Date:** 13 May 2026

**KPIs (Measurable Objectives - 2 Required):**
- 50 new visitors per month
- 40% increase in small-group participation

**Problem Identified:** Fragmented service-time, location and pastor information relying only on Instagram and WhatsApp

**Solution:** 5-page foundation website with Google Maps, YouTube, WhatsApp integrations. Design system: blue #2E6BC6 + beige #F8F3EB + white, Inter font family.

## 2. Live Deployment - Final (POE Part 3.1)

| Deliverable | URL - For Lecturer Verification |
| :--- | :--- |
| **Live Website** | https://ferreiraedjane108-star.github.io/UM-church/ |
| **Robots.txt** | https://ferreiraedjane108-star.github.io/UM-church/robots.txt |
| **Sitemap.xml** | https://ferreiraedjane108-star.github.io/UM-church/sitemap.xml |
| **GitHub Repository** | https://github.com/ferreiraedjane108-star/UM-church |
| **Backup Deployment (Part 2)** | https://papaya-melba-e50de9.netlify.app/ - No longer canonical |

**Status:** Live on GitHub Pages, HTTPS Enforced, No Redirect Errors.

## 3. Project Structure (5-Page Foundation)

## 4. POE Part 3 - SEO Implementation (NEW - 2026-05-13)

### 4.1 Sitemap.xml Implementation - POE Requirement 3.1.1
- **Location:** Root directory `/sitemap.xml` (Required)
- **Protocol:** Sitemaps 0.9 - www.sitemaps.org
- **Validation:** Passed - 0 errors on xml-sitemaps.com validator
- **Content:** 5 indexable URLs with loc, lastmod, priority
- **Canonical Domain:** https://ferreiraedjane108-star.github.io/UM-church/

### 4.2 Robots.txt Implementation - POE Requirement 3.1.2
- **Location:** Root directory `/robots.txt` (Required)
- **Content:**
User-agent: *
Allow: /

Sitemap: https://ferreiraedjane108-star.github.io/UM-church/sitemap.xml

### 4.3 Deployment Optimization - POE Requirement 3.1.3
- **Critical Fix:** Migrated canonical domain
    - FROM (Part 2): https://papaya-melba-e50de9.netlify.app/
    - TO (Part 3 Final): https://ferreiraedjane108-star.github.io/UM-church/
- **Removed Files:** CNAME, _redirects, netlify.toml - These files caused robots.txt and sitemap.xml to redirect to Netlify
- **Fixed:** Both SEO files now serve correctly on GitHub Pages with 200 OK

## 5. POE Part 2 - Foundation Fixes (Feedback from Part 1)

### Feedback Received - Part 1:
"The UM Church proposal contains good concept and measurable objectives. However only one proposal evidenced, feature list broader than five-page structure required, no sitemap or wireframe provided. Reference section weak, GitHub does not demonstrate HTML structure, comments, multiple commits, README or changelog. Part 2: reduce scope to coherent five-page foundation first."

### How Fixed for Part 2:
- **v1.1 Fix Scope:** Reduced from 8+ pages (pastors.html, community.html, khayelitsha.html etc) to 5-page coherent foundation: Home, About, Services/Ministries, Enquiry, Contact
- **v1.2 Fix Sitemap & Wireframe:** Added sitemap.txt and wireframe.png - previously missing
- **v1.3 Fix HTML Structure:** Added HTML comments on top of each page, consistent navigation same on all 5 pages
- **v1.4 Fix References:** Replaced generic reference with 8 technical references
- **v1.5 Fix GitHub:** Added external stylesheet, multiple commits, README, changelog
- **v3.0 Fix SEO (Part 3):** Added sitemap.xml and robots.txt in root, fixed GitHub Pages domain

## 6. Features & Integrations
- Google Maps Embed API - Location on contact.html
- YouTube Embed - Sermons on services.html
- WhatsApp Click to Chat API - wa.me/27796658703
- Responsive Design - CSS Media Queries
- SEO Ready - sitemap.xml, robots.txt

## 7. References

### Part 2 - Foundation References:
- MDN Web Docs. (2026). HTML Forms and Inputs. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
- MDN Web Docs. (2026). CSS Variables. https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- W3Schools. (2026). CSS Responsive Breakpoints. https://www.w3schools.com/css/css_rwd_mediaqueries.asp
- Google Fonts - Inter (2026). https://fonts.google.com/specimen/Inter
- Google Maps Embed API (2026). https://developers.google.com/maps/documentation/embed
- WhatsApp Click to Chat API - wa.me/27796658703 (2026). https://faq.whatsapp.com/
- Unsplash/Pexels - Church, Bible, Community images
- GitHub Pages - Deployment Guide (2026). https://docs.github.com/en/pages

### Part 3 - SEO References (Added):
- Google Search Central. (2024). SEO Starter Guide. https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Sitemaps.org. (n.d.). Sitemaps Protocol 0.9. https://www.sitemaps.org/protocol.html
- Google Search Central. (2024). Robots.txt Introduction. https://developers.google.com/search/docs/crawling-indexing/robots/intro

## 8. Changelog
Full version history in CHANGELOG.md

---
Author: Edjane Ferreira - WEDE5020 - 2026