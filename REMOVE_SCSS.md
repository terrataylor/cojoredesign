# Removing SCSS Files (Optional Cleanup)

The SCSS files in this project are **not being used** by the Next.js application. They are legacy source files that were compiled to CSS.

## Current Status

- ✅ **App uses regular CSS only** (`public/assets/css/main.css` and `style.css`)
- ✅ **No SCSS compilation** in the build process
- ✅ **No SCSS dependencies** in package.json
- ⚠️ **SCSS files exist** but are not processed

## Optional: Remove SCSS Files

If you want to clean up and remove the unused SCSS files, you can delete:

```
assets/scss/          ← Can be deleted
public/assets/scss/   ← Can be deleted
```

**Note:** These are just source files. The compiled CSS in `public/assets/css/` is what's actually being used.

## What to Keep

**Keep these CSS files:**
- `public/assets/css/main.css` - Main stylesheet
- `public/assets/css/style.css` - Custom overrides
- `app/globals.css` - CSS imports

Everything else (SCSS files) is optional and can be removed if you want a cleaner project structure.
