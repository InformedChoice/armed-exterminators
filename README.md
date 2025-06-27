# Armed Exterminators Hugo Site - Complete Guide

## Quick Start

```bash
# Navigate to project directory
cd /Users/chrisrodgers/Projects/armed-exterminators

# Start local development server
hugo server

# Build for production
hugo
```

## Project Structure

```
armed-exterminators/
├── hugo.toml                    # Main site configuration
├── content/                     # All your content goes here
│   ├── _index.md               # Homepage content
│   ├── about-us/               # About page
│   │   └── _index.md
│   ├── contact-us/             # Contact page
│   │   └── _index.md
│   ├── services/               # Individual service pages
│   │   ├── rodent-control.md
│   │   ├── ant-control.md
│   │   └── ... (other services)
│   ├── pasadena-pest-control.md # Main services page
│   ├── privacy-policy.md        # Privacy policy
│   └── terms-of-service.md      # Terms of service
└── themes/armed-neon/          # Custom theme
    ├── layouts/                # Page templates
    │   ├── _default/          # Default templates
    │   ├── index.html         # Homepage template
    │   ├── partials/          # Reusable components
    │   └── services/          # Service page templates
    └── static/                # Static assets
        └── css/               # Stylesheets
            └── style.css      # Main stylesheet
```

## How to Add Content

### Adding a New Service Page

1. **Create the markdown file** in `/content/services/`
   ```bash
   # Example: Adding termite control
   touch content/services/termite-control.md
   ```

2. **Use this template structure:**
   ```markdown
   ---
   title: "Termite Control Pasadena | Professional Termite Treatment"
   description: "Expert termite control in Pasadena. Protect your home from costly damage. Free inspections. Call (626) 256-3200."
   draft: false
   ---

   # Termite Control in Pasadena, CA

   [Opening paragraph about the pest problem]

   ## Why Pasadena Gets [Pest Name]

   [Local context - climate, housing, seasonal patterns]

   ## Our [Number]-Step Process

   ### 1. [First Step]
   [Details]

   ### 2. [Second Step]
   [Details]

   ## Prevention Tips

   - Tip 1
   - Tip 2

   ## Service Areas

   [List of cities served]

   ---

   ## Frequently Asked Questions

   ### Question 1?
   Answer

   ### Question 2?
   Answer

   ---

   > **Call to action**  
   > ### Call (626) 256-3200 for immediate service.
   ```

3. **The page will be automatically available at:** `/services/[filename]/`
   - Example: `termite-control.md` → `yoursite.com/services/termite-control/`

### Adding a Service Location Page (Future)

1. **Location pages are already set up in:** `/content/locations/`
   
2. **Current location pages:**
   - `/locations/pasadena/` - Primary city
   - `/locations/arcadia/`
   - `/locations/monrovia/`
   - `/locations/san-gabriel/`
   - `/locations/la-canada-flintridge/`
   - `/locations/south-pasadena/`
   - `/locations/rosemead/`
   - `/locations/altadena/`
   - `/locations/san-marino/`
   - `/locations/sierra-madre/`

3. **To add a new city (e.g., Wilshire District):**
   ```bash
   # Use Hugo's archetype to create properly formatted page
   hugo new locations/wilshire-district/index.md
   
   # Or create manually:
   mkdir content/locations/wilshire-district
   touch content/locations/wilshire-district/index.md
   ```

4. **IMPORTANT: Update the data file to make it appear in navigation:**
   - Edit `/data/service_areas/areas.yaml`
   - Add your city under the appropriate area (los_angeles, san_gabriel_valley, or san_fernando_valley)
   - Example for Wilshire District:
   ```yaml
   los_angeles:
     name: "Los Angeles"
     description: "Professional pest control throughout Los Angeles neighborhoods"
     cities:
       # ... existing cities ...
       - name: "Wilshire District"
         slug: "wilshire-district"  # Must match folder name
         zip_codes: ["90010", "90019", "90020", "90036"]
         focus: "Mid-rise apartments, commercial buildings"
         common_pests: ["roaches", "bed bugs", "rodents", "ants"]
   ```

5. **The city page template (use archetype or copy this):**
   ```markdown
   ---
   title: "Pest Control Wilshire District, LA | Urban Pest Experts"
   description: "Professional pest control in Wilshire District. Apartment & commercial specialists. Same-day service. Call (626) 256-3200."
   areas: "Los Angeles"  # Must match area name in data file
   ---

   # Pest Control in **Wilshire District, Los Angeles**

   From Miracle Mile's shops to mid-rise apartments along Wilshire Boulevard, this central LA neighborhood faces urban pest challenges. **German roaches spread between units, bed bugs travel in high-traffic buildings, and rodents exploit older infrastructure.** Armed Exterminators brings specialized urban pest solutions to Wilshire District properties.

   <div class="location-services-box">
   <h3>🎯 Quick Links: Wilshire District Pest Control Services</h3>
   <ul>
   <li><a href="/roach-control-wilshire-district/">Roach Control - Apartment Specialists <span class="arrow">→</span></a></li>
   <li><a href="/bed-bug-treatment-wilshire-district/">Bed Bug Treatment - Discrete Service <span class="arrow">→</span></a></li>
   <li><a href="/rodent-control-wilshire-district/">Rodent Control - Commercial Experts <span class="arrow">→</span></a></li>
   </ul>
   </div>

   ## Common Wilshire District Pest Problems We Solve

   - **German Roaches** in apartment buildings
   - **Bed Bugs** in high-traffic residences
   - **Rats & Mice** in older buildings
   - **Ants** invading commercial spaces

   *(We do not treat termites, mosquitoes, or coyotes.)*

   [Rest of standard template...]
   ```

6. **After creating the page:**
   - The city will automatically appear in the footer dropdown/tabs
   - It will show on the /locations/ page under its area
   - The home page will show it if it's in San Gabriel Valley
   - If no page exists yet, it shows as "Coming Soon"

**Note:** The system is designed to show cities as "Coming Soon" if they're in the data file but don't have a page yet. This lets you plan expansion areas without broken links.

### Adding a Blog Post

1. **Create blog directory (if it doesn't exist):**
   ```bash
   mkdir content/blog
   ```

2. **Create a blog post:**
   ```bash
   # Example: Create a pest prevention tips post
   touch content/blog/winter-pest-prevention-tips.md
   ```

3. **Use this blog post template:**
   ```markdown
   ---
   title: "Winter Pest Prevention Tips for Pasadena Homeowners"
   date: 2025-01-15
   description: "Expert tips to keep pests out of your home during winter months in Pasadena."
   draft: false
   ---

   ![Winter pest prevention](/images/blog/winter-pest-prevention.jpg)

   Winter in Pasadena might be mild, but pests still seek warmth in your home...

   ## Key Prevention Tips

   ### 1. Seal Entry Points
   [Content here]

   ### 2. Remove Food Sources
   [Content here]

   ## When to Call a Professional

   If you notice signs of pest activity...

   ---

   **Need immediate pest control?** Call Armed Exterminators at (626) 256-3200.
   ```

4. **Blog posts will be available at:** `/blog/[filename]/`
   - Example: `winter-pest-prevention-tips.md` → `/blog/winter-pest-prevention-tips/`

## Updating Existing Content

### Homepage Hero Section
- **File:** `/hugo.toml`
- **Edit these params:**
  ```toml
  heroTitle = "ARMED EXTERMINATORS"
  heroSubtitle = "DEFENDING PASADENA SINCE DAY ONE"
  heroTagline = "When Pests Invade, We Terminate"
  ```

### Contact Information
- **File:** `/hugo.toml`
- **Update:**
  ```toml
  email = "armedex@sbcglobal.net"
  phone = "(626) 256-3200"
  address = "Duarte, CA"
  ```

### Navigation Menu
- **File:** `/hugo.toml`
- **Add new menu items:**
  ```toml
  [[menu.main]]
    name = "New Page"
    url = "/new-page/"
    weight = 5  # Controls order
  ```

### Footer Links
- **File:** `/themes/armed-neon/layouts/partials/footer.html`
- Legal links are at the bottom

## Important URL Structure

To maintain SEO, these URLs must stay exactly the same:

| Page | URL Path |
|------|----------|
| Home | `/` |
| About | `/about-us/` |
| Contact | `/contact-us/` |
| Main Services | `/pasadena-pest-control/` |
| Rodent Control | `/rodent-control-pasadena/` |
| Wildlife | `/wildlife-control-services/` |

**Note:** Some service pages use `/services/[name]/` and others use `/[name]/`. This matches your old site structure for SEO continuity.

## Adding Custom Redirects

If you need to redirect old URLs:

1. **Create `static/_redirects` file:**
   ```bash
   touch static/_redirects
   ```

2. **Add redirects:**
   ```
   /old-url/    /new-url/    301
   ```

## Styling and Design

### Main Stylesheet
- **File:** `/themes/armed-neon/static/css/style.css`
- Sections are clearly commented
- Neon color variables at the top

### Colors Used
```css
--neon-green: #39FF14;
--neon-pink: #FF10F0;
--neon-blue: #00FFFF;
--neon-yellow: #FFFF00;
--neon-orange: #FF6600;
```

## Common Tasks

### Update Service List in Sidebar
- **File:** `/themes/armed-neon/layouts/services/single.html`
- Look for `<ul class="services-list">`

### Add New Trust Badge
- **File:** `/themes/armed-neon/layouts/services/single.html`
- Look for `<div class="badge-list">`

### Change Review Testimonials
- **File:** `/themes/armed-neon/layouts/about-us/list.html`
- Look for `<div class="reviews-grid">`

## Deployment to Cloudflare Pages

1. Push changes to GitHub
2. In Cloudflare Pages:
   - Framework preset: Hugo
   - Build command: `hugo`
   - Build output directory: `public`

## Troubleshooting

### Page Not Found (404)
- Check if the markdown file exists in `content/`
- Ensure `draft: false` in front matter
- Restart hugo server

### Menu Not Updating
- Clear browser cache
- Check weight values for ordering
- Restart hugo server

### Style Changes Not Showing
- Hard refresh browser (Cmd+Shift+R)
- Check CSS syntax
- Ensure CSS file is saved

## Need to Add Something New?

1. **Service Page:** Follow template in `/content/services/`
2. **Info Page:** Create in `/content/` root
3. **Location Page:** Create `/content/locations/` first
4. **Blog Post:** Create `/content/posts/` first

Always use existing pages as templates to maintain consistency!

## Important Files Reference

| What | Where |
|------|-------|
| Site Config | `/hugo.toml` |
| Homepage Hero | `/themes/armed-neon/layouts/index.html` |
| Service Template | `/themes/armed-neon/layouts/services/single.html` |
| Header/Nav | `/themes/armed-neon/layouts/partials/header.html` |
| Footer | `/themes/armed-neon/layouts/partials/footer.html` |
| All Styles | `/themes/armed-neon/static/css/style.css` |
| Shortcodes | `/themes/armed-neon/layouts/shortcodes/` |

## Using Shortcodes (Important for Content Creation)

### Service Areas Grid
When creating service pages that need a grid layout for city listings, use the `service-areas-grid` shortcode instead of raw HTML:

**DON'T DO THIS (Raw HTML - will cause warnings):**
```html
<div class="service-areas-grid">
  ### City content here
</div>
```

**DO THIS (Use the shortcode):**
```markdown
{{< service-areas-grid >}}

### [Pasadena](/link/)
Description of services for this city.

### [Arcadia](/link/)
Description of services for this city.

{{< /service-areas-grid >}}
```

**Why use shortcodes?**
- Hugo blocks raw HTML by default for security
- Shortcodes are the proper way to add custom HTML structures
- Easier to maintain - update the shortcode file to change all instances
- No security warnings in the build process

**Creating new shortcodes:**
1. Create a new file in `/themes/armed-neon/layouts/shortcodes/`
2. Name it `your-shortcode-name.html`
3. Use it in content with `{{< your-shortcode-name >}}content{{< /your-shortcode-name >}}`

## Contact for Hugo Site Issues

If you need to modify templates or add new functionality beyond content, you may need developer assistance for:
- New page layouts
- Navigation structure changes
- Design modifications
- New features

Remember: Most updates (new services, content changes, contact info) can be done by editing markdown files and `hugo.toml`!