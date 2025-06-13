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

3. **To add a new city:**
   ```bash
   # Create directory
   mkdir content/locations/temple-city
   
   # Create index.md file
   touch content/locations/temple-city/index.md
   ```

4. **Use this template:**
   ```markdown
   ---
   title: "Pest Control [City Name], CA | [Descriptor] Exterminator"
   description: "[Service description]. Call (626) 256-3200."
   ---

   # Pest Control in **[City Name], California**

   [Opening paragraph with local landmark and common pests]

   ## Common [City] Pest Problems We Solve

   - **[Pest Type]** specific issue
   - **[Pest Type]** specific issue
   - **[Pest Type]** specific issue
   - **[Wildlife]** if applicable

   *(We do not treat termites, mosquitoes, or coyotes.)*

   ## Our Local Services
   [Standard service list]

   > **Same-Day Appointments Available — Call (626) 256-3200**

   ## Why [City] Residents Choose Armed Exterminators
   [List of benefits]

   ### Recent [City] Success Story
   > *"[Testimonial]"*  
   > — **[Name], [Street]**

   [Call to action]

   Serving all [City] ZIP codes — [list ZIPs].

   ---

   *Links to nearby cities*
   ```

### Adding a Blog Post (Future)

1. **Create posts directory:**
   ```bash
   mkdir content/posts
   ```

2. **Create post with date in filename:**
   ```bash
   touch content/posts/2024-01-15-winter-pest-prevention.md
   ```

3. **Add front matter with slug:**
   ```markdown
   ---
   title: "Winter Pest Prevention Tips"
   date: 2024-01-15
   slug: "winter-pest-prevention"
   url: "/winter-pest-prevention/"
   ---
   ```

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

## Contact for Hugo Site Issues

If you need to modify templates or add new functionality beyond content, you may need developer assistance for:
- New page layouts
- Navigation structure changes
- Design modifications
- New features

Remember: Most updates (new services, content changes, contact info) can be done by editing markdown files and `hugo.toml`!