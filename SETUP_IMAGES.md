# Image Setup Guide for NeuroCompliance

The application has been updated to use local images from the `/public/images/` folder instead of Figma assets. Follow these steps to add your actual images.

## 📁 Folder Structure

```
/public/images/
├── logo.png              # Main logo (dark version)
├── logo-white.png        # White logo for dark backgrounds
└── certifications/       # Certification & award badges
    ├── stevie-award.png
    ├── tips-vendor.png
    ├── camsc.png
    ├── pme-mtl.png
    ├── nc-sheriffs.png
    └── fluxx-award.png
```

## 🖼️ Image Requirements

### Logo Files
- **logo.png** (Main logo - dark version)
  - Used in: Header navigation
  - Recommended size: 128px height (auto-scales to 32px)
  - Format: PNG with transparency
  - Background: Transparent

- **logo-white.png** (White logo)
  - Used in: Footer
  - Recommended size: 128px height (auto-scales to 32px)
  - Format: PNG with transparency
  - Background: Transparent

### Certification Badges
All badge files should be:
- Format: PNG with transparency
- Recommended height: 80-120px
- Background: Transparent or white
- Optimized for web

Files needed:
1. **stevie-award.png** - 2025 Stevie Winner badge
2. **tips-vendor.png** - TIPS Awarded Vendor badge
3. **camsc.png** - CAMSC certification
4. **pme-mtl.png** - PME MTL certification
5. **nc-sheriffs.png** - NC Sheriffs' Association badge
6. **fluxx-award.png** - Fluxx Award badge

## 🚀 How to Add Your Images

### Option 1: Replace Placeholder Files
1. Navigate to `/public/images/` in your project
2. Replace each placeholder file with your actual image
3. Make sure to keep the exact same filename

### Option 2: Export from Figma
If you have the original Figma files:
1. Select each logo/badge in Figma
2. Export as PNG (2x resolution)
3. Save with the corresponding filename
4. Place in `/public/images/` or `/public/images/certifications/`

### Option 3: Download from Current Site
If you have an existing website:
1. Right-click on each image → "Save image as..."
2. Rename to match the required filename
3. Place in the appropriate folder

## 📋 Checklist

Before running the app, make sure you have:
- [ ] logo.png (Header logo)
- [ ] logo-white.png (Footer logo)
- [ ] stevie-award.png
- [ ] tips-vendor.png
- [ ] camsc.png
- [ ] pme-mtl.png
- [ ] nc-sheriffs.png
- [ ] fluxx-award.png

## 🔧 Testing

After adding your images:
1. Run `npm run dev` (or your dev command)
2. Check that all images load correctly
3. Verify the header logo appears
4. Scroll to the footer to check the white logo
5. View the "Certifications & Awards" section

## 💡 Tips

- **Image Optimization**: Use tools like TinyPNG or ImageOptim to reduce file sizes
- **Retina Support**: Export at 2x resolution for crisp display on high-DPI screens
- **Alt Text**: The alt text is already configured in the code
- **Troubleshooting**: If an image doesn't appear, check:
  - Filename matches exactly (case-sensitive)
  - File is in the correct folder
  - File extension is `.png`
  - Browser cache (try hard refresh: Ctrl+Shift+R or Cmd+Shift+R)

## 🎨 Image Locations in the App

| Image | Component | Location |
|-------|-----------|----------|
| logo.png | Header | Top navigation bar |
| logo-white.png | Footer | Footer section |
| stevie-award.png | LogoStrip | Scrolling certification strip |
| tips-vendor.png | LogoStrip | Scrolling certification strip |
| camsc.png | LogoStrip | Scrolling certification strip |
| pme-mtl.png | LogoStrip | Scrolling certification strip |
| nc-sheriffs.png | LogoStrip | Scrolling certification strip |
| fluxx-award.png | LogoStrip | Scrolling certification strip |

## 🆘 Need Help?

If you encounter issues:
1. Check the browser console for errors (F12 → Console tab)
2. Verify file paths match exactly
3. Ensure images are in `/public/images/` (not `/src/images/`)
4. Try a different browser to rule out caching issues
