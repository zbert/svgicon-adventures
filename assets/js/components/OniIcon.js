import Vue from 'vue'

Vue.component('OniIcon', {
  render () {
    return <svg class={`svg ${this.classes}`} xmlns: xlink='http://www.w3.org/1999/xlink' aria-hidden='true'>
      <use xlink:href={'public/sprite.svg#' + this.iconName} />
    </svg>
  },
  props: ['classes', 'iconName']
})