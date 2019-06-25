
const { series } = require('gulp')
const svgToSprite = require('./tasks/svgsprite')
const path = require('path')

// Paths
const paths = {
  svg: {
    src: path.join(__dirname, 'svgs', '**', '*.svg'),
    dest: path.join(__dirname, 'public')
  }
}

exports.svg = series(svgToSprite({ ...paths.svg }))
exports.default = series(svgToSprite({ ...paths.svg }))
