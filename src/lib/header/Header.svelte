<script lang="ts">
	export let page: 'manifesto' | 'testimonials' = 'manifesto';
	import Link from './Link.svelte';
</script>

<nav>
	<Link href="/" active={page === 'manifesto'}>manifesto</Link>
	<Link href="/testimonials" active={page === 'testimonials'}>testimonials</Link>
</nav>
