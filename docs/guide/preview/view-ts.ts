import {defineComponent, h} from 'vue'
import { message } from './view-ts-include'
import { message as message2 } from './view-ts-include2'

/**
 * docs
 * @param {string} defaultPreviewMode browser
 * @param {array} includes view-ts-include, ./view-ts-include2
 * @param {number} previewHeight 300
 * @param {boolean} defaultCodeCollapse true
 */

export default defineComponent({
  setup(){
    return () => h('div', `${message} ${message2}`)
  }
})