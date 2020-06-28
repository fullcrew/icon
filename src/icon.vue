<template functional>
	<svg
		viewBox="0 0 24 24"
		class="icon"
		:class="$options.methods.getStyleClasses(props)"
		role="img"
		v-bind="data.attrs"
		v-on="listeners"
	>
		<title>{{ props.title || props.name }}</title>
		<desc v-if="props.desc">{{ props.desc }}</desc>
		<path :d="$options.methods.getPath(props)" />
	</svg>
</template>

<script>
import icons from './icons.json'

export default {
	name: 'Icon',
	props: {
		name: {
			type: String,
			required: true
		},
		// eslint-disable-next-line vue/require-default-prop
		color: {
			type: String
		},
		// eslint-disable-next-line vue/require-default-prop
		size: {
			type: String
		},
		// eslint-disable-next-line vue/require-default-prop
		title: {
			type: String
		},
		// eslint-disable-next-line vue/require-default-prop
		desc: {
			type: String
		},
		// eslint-disable-next-line vue/require-default-prop
		rotate: {
			type: Number
		}
	},
	methods: {
		getPath(props) {
			return icons[props.name]
		},
		getStyleClasses(props) {
			return [props.size, props.color].map(val => val)
		}
	}
}
</script>
