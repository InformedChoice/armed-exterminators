# Armed Exterminators - HTML Warning Fixes and New Location Pages

## Issues Fixed

### 1. **Raw HTML Warnings Resolved** ✅
- Removed `<div>` tags from `/content/services/bed-bug-treatment.md`
- Removed inline HTML with styles from `/content/about-us/_index.md`
- Replaced with proper Markdown formatting
- Added CSS styling to maintain visual appearance

### 2. **Google PageSpeed Insights Contrast Issues** ✅
- Changed `.title-accent` color from `#ff6600` to `#cc4400` (darker orange)
- Changed `.title-main` color from `#000000` to `#1a1a1a` (slightly darker)
- Improves accessibility score and readability

### 3. **New Location Pages Created** ✅

#### Temple City (`/locations/temple-city/`)
- Focus on wildlife and rodent control
- Highlights:
  - Roof rats in mature fruit trees
  - Skunks under raised foundations
  - Bats with rabies risk
  - West Nile virus detection (October 2024)
  - Permit requirements via SGV Humane Society
- No coyote removal services (per your uncle's note)

#### El Monte (`/locations/el-monte/`)
- Focus on river-area pest problems
- Highlights:
  - Norway rats from flood channels
  - Gopher and ground squirrel issues
  - Urban wildlife near schools
  - West Nile virus detection (August 2024)
  - All ZIP codes covered (91731-91735)

### 4. **Site Navigation Updated** ✅
- Added both cities to:
  - Homepage service areas grid
  - Locations index page
  - HTML sitemap
  - Footer navigation
  - Schema markup

## Technical Details

### Files Modified:
1. `/content/services/bed-bug-treatment.md` - Removed raw HTML
2. `/content/about-us/_index.md` - Replaced HTML with Markdown
3. `/themes/armed-neon/static/css/style.css` - Fixed contrast, updated styling
4. `/themes/armed-neon/layouts/index.html` - Added new cities
5. `/themes/armed-neon/layouts/partials/footer.html` - Added new cities
6. `/themes/armed-neon/layouts/partials/schema.html` - Added new cities
7. `/content/locations/_index.md` - Added new cities
8. `/content/sitemap.md` - Added new cities

### Files Created:
1. `/content/locations/temple-city/index.md`
2. `/content/locations/el-monte/index.md`

## Benefits:

1. **No More HTML Warnings** - Site builds cleanly without warnings
2. **Better Accessibility** - Improved contrast ratios for PageSpeed Insights
3. **Expanded Service Area** - Now covering Temple City and El Monte
4. **Better SEO** - Location-specific content for two more cities
5. **Consistent Navigation** - All areas properly linked throughout site

The site should now build without any warnings and have better PageSpeed Insights scores!