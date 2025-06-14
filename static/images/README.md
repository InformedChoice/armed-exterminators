# Adding Images to Your Site

## Image Directories

- `/static/images/team/` - Team member photos, truck photos
- `/static/images/services/` - Service-specific images (rodent control, etc.)
- `/static/images/gallery/` - Before/after photos, general gallery images

## How to Add Images

1. **Place images in the appropriate folder** under `/static/images/`
   - For example: `/static/images/team/john-smith.jpg`

2. **Reference images in your content** using the path starting with `/images/`
   - In Markdown: `![Alt text](/images/team/john-smith.jpg)`
   - In HTML: `<img src="/images/team/john-smith.jpg" alt="John Smith">`

## Recommended Image Specifications

- **Format**: JPG for photos, PNG for logos/graphics with transparency
- **Team Photos**: 400x400px square (for profile photos)
- **Service Images**: 800x600px landscape
- **Hero/Banner Images**: 1920x1080px or wider
- **File Size**: Optimize to under 200KB per image when possible

## Example Usage in Content

### In a Markdown file:
```markdown
![Our team at work](/images/team/team-at-work.jpg)
```

### In HTML templates:
```html
<img src="/images/services/rodent-control.jpg" alt="Rodent Control Service" class="service-image">
```

### Adding a team member photo to About page:
```html
<div class="team-member">
    <img src="/images/team/owner-photo.jpg" alt="Owner Name">
    <h3>Owner Name</h3>
    <p>Founder & Lead Technician</p>
</div>
```

## Image Optimization Tips

1. Use tools like TinyPNG or ImageOptim to compress images
2. Save photos as JPG with 80-85% quality
3. Use descriptive filenames (e.g., `pasadena-pest-control-truck.jpg`)
4. Always include alt text for accessibility and SEO
