<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { issueStore } from '$lib/scripts/github';
</script>

{#if $issueStore}
	<SvelteMarkdown source={$issueStore.body} />
{/if}
