const { src, dest } = require('gulp')
const svgSprite = require('gulp-svg-sprite')


// SVGS
const config = {
  log: true, // Logging verbosity (default: no logging)
  shape: { // SVG shape related options
    transform: [
      {
        svgo: {
          plugins: [
            { convertColors: { currentColor: true } }
          ]
        }
      }
    ]
  },
  mode: {
    symbol: { // symbol mode to build the SVG
      dest: '.',
      sprite: 'sprite.svg', // Sprite name
      example: true // Build sample page
    }
  },

  svg: {
    xmlDeclaration: false, // strip out the XML attribute
    doctypeDeclaration: false // don't include the !DOCTYPE declaration
  }
}

const svg = (paths) => (cb) =>
  src(paths.src)
    .pipe(svgSprite(config))
    .pipe(dest(paths.dest))

module.exports = svg
