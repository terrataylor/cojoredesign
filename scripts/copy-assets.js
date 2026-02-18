const fs = require('fs')
const path = require('path')

// Copy assets folder to public
const sourceDir = path.join(__dirname, '..', 'assets')
const destDir = path.join(__dirname, '..', 'public', 'assets')

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src)
  const stats = exists && fs.statSync(src)
  const isDirectory = exists && stats.isDirectory()

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true })
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      )
    })
  } else {
    fs.copyFileSync(src, dest)
  }
}

if (fs.existsSync(sourceDir)) {
  console.log('Copying assets to public folder...')
  copyRecursiveSync(sourceDir, destDir)
  console.log('Assets copied successfully!')
} else {
  console.log('Assets folder not found. Please ensure assets folder exists in the root directory.')
}
