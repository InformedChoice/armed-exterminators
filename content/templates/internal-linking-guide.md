# Internal Linking Guide for Armed Exterminators

## Overview
This guide shows how to implement strong internal linking across your site to boost SEO and help users find relevant services.

## Core Linking Principles

1. **Every page should link to at least 3-5 other relevant pages**
2. **Use descriptive anchor text (not "click here")**
3. **Link both UP (to parent pages) and ACROSS (to related pages)**
4. **Include contextual links within content, not just in navigation**

## Linking Patterns by Page Type

### 1. Location Pages (/locations/[city]/)

Each location page should include:

```markdown
## Our Services in [City]

Looking for specific pest control services? We offer:

- **[Ant Control in [City]](/ant-control-[city]/)** - Argentine ants, carpenter ants, and more
- **[Rodent Control in [City]](/rodent-control-[city]/)** - Rats, mice, and exclusion services  
- **[Roach Control in [City]](/roach-control-[city]/)** - German roaches, American roaches
- **[Spider Control in [City]](/spider-control-[city]/)** - Black widows, brown recluses
- **[Wildlife Removal in [City]](/wildlife-removal-[city]/)** - Raccoons, opossums, skunks

---

### Serving Nearby Communities

Also providing pest control in:
- **[[Nearby City 1]](/locations/[nearby-city-1]/)** - [X] miles away
- **[[Nearby City 2]](/locations/[nearby-city-2]/)** - [X] miles away
- **[[Nearby City 3]](/locations/[nearby-city-3]/)** - [X] miles away

[View all service areas →](/locations/)
```

### 2. Service Pages (/services/[service]/)

Each main service page should include:

```markdown
## Service Areas

Fast, reliable [service] throughout:
- **[Pasadena](/[service]-pasadena/)** - Old Town to the Rose Bowl
- **[Arcadia](/[service]-arcadia/)** - Santa Anita area  
- **[Monrovia](/[service]-monrovia/)** - Foothill communities
- **[San Gabriel](/[service]-san-gabriel/)** - Mission District
- [View all locations →](/locations/)

---

## Related Pest Control Services

- **[Related Service 1]** - [Why they might need this too]
- **[Related Service 2]** - [Connection to current problem]
- **[Related Service 3]** - [Complementary service]

[See all services →](/services/)
```

### 3. Service + Location Combo Pages

These pages need the most strategic linking:

```markdown
<!-- Within the content -->
[Location]'s proximity to [landmark] means residents often need both 
**[current service]** and [related service in same city](/[related-service]-[city]/). 

<!-- After main content -->
## Other [City] Pest Control Services

Dealing with multiple pests? We also offer:
- **[Spider Control in [City]](/spider-control-[city]/)** 
- **[Ant Control in [City]](/ant-control-[city]/)**
- **[Wildlife Removal in [City]](/wildlife-removal-[city]/)**

[View all [City] services →](/locations/[city]/)

---

## [Service] in Nearby Cities

- **[[Service] in [Nearby City 1]](/[service]-[nearby-city-1]/)** - Serving [notable area]
- **[[Service] in [Nearby City 2]](/[service]-[nearby-city-2]/)** - Including [neighborhood]
- **[[Service] in [Nearby City 3]](/[service]-[nearby-city-3]/)** - Fast response times

[See all service areas →](/locations/)
```

## Contextual Linking Examples

### Within Problem Description
```markdown
Argentine ants in Arcadia often enter homes seeking water during our hot summers. 
These persistent invaders differ from [carpenter ants](/ant-control-arcadia/#carpenter-ants), 
which actually damage wood structures similar to [termites](link-to-termite-info).
```

### Within Solution Text
```markdown
Our technicians serving [South Pasadena](/locations/south-pasadena/) use the same 
proven methods we've perfected over 28 years in [Pasadena](/locations/pasadena/) 
and [San Marino](/locations/san-marino/).
```

### In Prevention Tips
```markdown
While treating your current ant problem, consider our [quarterly maintenance plans](/services/#maintenance) 
to prevent future invasions. Many Arcadia customers near [Santa Anita Park](/ant-control-arcadia/#santa-anita) 
find this especially valuable during racing season.
```

## Homepage Linking Strategy

Your homepage should link to:
1. **Primary service hubs** (/services/rodent-control/, /services/ant-control/, etc.)
2. **Main location pages** (/locations/pasadena/, /locations/arcadia/, etc.)
3. **High-value combo pages** (/rat-control-pasadena/, /ant-control-arcadia/)

## Footer Link Structure

```html
Services                 Service Areas              Pests We Handle
--------                 -------------              ---------------
Rodent Control          Pasadena                   Rats & Mice
Ant Control             Arcadia                    Ants
Spider Control          Monrovia                   Spiders  
Roach Control           San Gabriel                Cockroaches
Bed Bug Treatment       San Marino                 Bed Bugs
Wildlife Removal        South Pasadena             Wildlife
[All Services →]        [All Locations →]          [Pest Library →]

Quick Links             Resources                  Company
-----------             ---------                  -------
Emergency Service       Pest Prevention Tips       About Us
Free Inspection        Seasonal Pest Guide        Contact
Service Plans          FAQ                        Reviews
```

## Link Implementation Checklist

For each new page you create:

- [ ] Link to main service hub (/services/[type]/)
- [ ] Link to main location page (/locations/[city]/)  
- [ ] Link to 2-3 nearby city variations
- [ ] Link to 2-3 related services in same city
- [ ] Add contextual links within content (3-5)
- [ ] Include in relevant existing pages' link lists
- [ ] Add to footer if high-priority page
- [ ] Update sitemap

## Anchor Text Best Practices

DO:
- "ant control in Arcadia"
- "emergency rodent removal Pasadena"  
- "South Pasadena pest control services"

DON'T:
- "click here"
- "learn more"
- "this page"
- Over-optimize: "best pest control Arcadia exterminator Arcadia pest removal Arcadia"

## Monitoring Link Health

Monthly checks:
1. Run broken link checker
2. Verify all service+location combos link correctly
3. Check that new pages are linked from relevant existing pages
4. Monitor click-through rates on internal links
5. Update seasonal links as needed