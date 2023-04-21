<script lang="ts">
	import type { GHIssue } from '$lib/scripts/github';
	import SvelteMarkdown from 'svelte-markdown';
	export let issue: GHIssue;
</script>

{#if issue}
	<SvelteMarkdown source={issue.body} />
{/if}
