import Vue from 'vue'

// Svg Updates
import svg4everybody from 'svg4everybody'
svg4everybody()

require('./components')
window.app = new Vue({ el: '#app' })
