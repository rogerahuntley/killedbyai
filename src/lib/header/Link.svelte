<script lang="ts">
	export let href: string;
	export let active = false;
</script>

<a {href} class="link" class:active>
	<slot />
</a>

<style lang="scss">
	.link {
		color: #000;
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 1rem;
		&.active {
			font-size: 1.75rem;
			color: #000;
			text-decoration: underline;
		}
	}
</style>
