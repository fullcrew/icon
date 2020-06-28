import Icon from './icon.vue'

Icon.install = function(Vue) {
	Vue.component('Icon', Icon)
}
export default Icon

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(Icon)
}
