# CSS Structure - Regular CSS Only

This application uses **regular CSS files only** - no SCSS/SASS compilation needed.

## Current CSS Files

### Main CSS Files (in `public/assets/css/`)

1. **`main.css`** - Main stylesheet with all component styles
   - Contains all section styles (hero, about, services, etc.)
   - Contains layout styles (header, footer, navigation)
   - Contains global variables and base styles
   - ~1846 lines

2. **`style.css`** - Custom overrides and additional styles
   - Custom logo sizing
   - Header padding adjustments
   - Nav menu underline removal
   - Hero section overrides
   - Service item styles
   - Team section styles
   - ~155 lines

### How CSS is Loaded

The CSS is imported in `app/globals.css`:

```css
@import url('../assets/css/main.css');
@import url('../assets/css/style.css');
```

## SCSS Files (Not Used)

The SCSS files in `assets/scss/` and `public/assets/scss/` are **legacy source files** that are **NOT being used** by the Next.js application. They were the original source files that were compiled to `main.css`, but the app only uses the compiled CSS.

You can safely:
- Ignore the SCSS files (they're not processed)
- Delete them if you want to clean up
- Keep them as reference if needed

## Making CSS Changes

### To modify existing styles:

1. **Edit `public/assets/css/main.css`** - For main component styles
2. **Edit `public/assets/css/style.css`** - For custom overrides (recommended for new changes)

### Best Practice:

Add new custom styles to `public/assets/css/style.css` rather than modifying `main.css`, as it's easier to maintain and won't conflict with the main stylesheet.

## No Build Step Required

Since we're using regular CSS:
- ✅ No SCSS compilation needed
- ✅ No CSS preprocessor required
- ✅ Changes take effect immediately after saving
- ✅ Just refresh the browser to see changes

## File Structure

```
public/assets/css/
├── main.css      ← Main stylesheet (all components)
└── style.css     ← Custom overrides (your custom styles)

app/
└── globals.css   ← Imports the CSS files above
```

## Adding New Styles

Simply add to `public/assets/css/style.css`:

```css
/* Your new styles */
.my-custom-class {
    color: #5846f9;
    padding: 20px;
}
```

No compilation, no build step - just save and refresh!
