# Changelog - UM Church Website

## [3.0.0] - 2026-05-13 - POE PART 3 FINAL

### POE Part 3 - SEO & Deployment
Requirement: Implement sitemap.xml, robots.txt and GitHub Pages optimization

#### Added
- sitemap.xml - XML Sitemap Protocol 0.9 - 5 URLs (Home, About, Services, Enquiry, Contact)
    - Structure: loc, lastmod 2026-05-13, priority
    - Canonical: https://ferreiraedjane108-star.github.io/UM-church/
- robots.txt - Root crawler file
    - User-agent: *
    - Allow: /
    - Sitemap: https://ferreiraedjane108-star.github.io/UM-church/sitemap.xml
- 3 New SEO References for Part 3

#### Changed
- Domain Migration for POE Compliance:
    - FROM: https://papaya-melba-e50de9.netlify.app/
    - TO: https://ferreiraedjane108-star.github.io/UM-church/
- Updated sitemap.xml URLs from Netlify to GitHub Pages
- Updated robots.txt Sitemap directive to GitHub Pages

#### Removed
- CNAME (papaya-melba-e50de9.netlify.app)
- _redirects and netlify.toml (causing redirect conflict)

#### Fixed
- Fixed robots.txt and sitemap.xml 404/redirect to Netlify
- Sitemap.xml validated - 0 errors

## [2.0.0] - 2026-05-10 - POE PART 2 FOUNDATION

#### Feedback Received - Part 1:
"The UM Church proposal contains good concept and measurable objectives. However only one proposal evidenced, feature list broader than five-page structure required, no sitemap or wireframe provided. Reference section weak, GitHub does not demonstrate HTML structure, comments, multiple commits, README or changelog. Part 2: reduce scope to coherent five-page foundation first."

#### How Fixed:
- v1.1 Fix Scope: Reduced from 8+ pages (pastors.html, community.html, khayelitsha.html etc) to 5-page foundation: Home, About, Services/Ministries, Enquiry, Contact
- v1.2 Fix Sitemap & Wireframe: Added sitemap.txt and wireframe.png - Previously Missing
- v1.3 Fix HTML Structure: Added HTML comments on top of each page, proper navigation same on all 5 pages
- v1.4 Fix References: Replaced generic Meta AI reference with 5 technical references
- v1.5 Fix GitHub: Added external stylesheet, multiple commits with descriptive messages, README with changelog entries

#### Added
- 5-page foundation structure completed
- Google Maps Embed API, YouTube embed, WhatsApp Click to Chat (wa.me/27796658703)
- Palette: blue #2E6BC6 + beige #F8F3EB + white - Inter font
- GitHub Pages: https://github.com/ferreiraedjane108-star

## [1.0.0] - 2026-05-01 - POE PART 1 PROPOSAL
- Initial proposal: UM Church Cape Town - Hope & Faith
- KPIs: 50 new visitors per month, 40% increase in small-group participation
- Problem: Fragmented service-time, location and pastor information relying only on Instagram and WhatsApp
- Solution: 5-page foundation website proposal