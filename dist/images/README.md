# NeuroCompliance Images

This folder contains all images used throughout the NeuroCompliance website.

## Required Images

Please replace the placeholder files with your actual images:

### Logo Files
- `logo.png` - Main NeuroCompliance logo (dark version for light backgrounds)
- `logo-white.png` - White version of logo (for dark backgrounds like footer)

### Certification & Award Badges
Located in `/certifications/`:
- `stevie-award.png` - 2025 Stevie Winner badge
- `tips-vendor.png` - TIPS Awarded Vendor badge
- `camsc.png` - CAMSC certification badge
- `pme-mtl.png` - PME MTL certification badge
- `nc-sheriffs.png` - North Carolina Sheriffs' Association badge
- `fluxx-award.png` - Fluxx Award badge

## Image Format Guidelines
- Use PNG format for logos and badges (supports transparency)
- Recommended logo height: 64-128px (will be scaled automatically)
- Recommended badge height: 80-120px (will be scaled automatically)
- Optimize images for web (compress without losing quality)

## Adding New Images
Simply place new image files in the appropriate folder and reference them in your code using:
```tsx
<img src="/images/your-image.png" alt="Description" />
```
