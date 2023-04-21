<script lang="ts">
	import { onMount } from 'svelte';
	import { issueStore, commentsStore, loadEverything } from '$lib/scripts/github';
	import Issue from '$lib/testimonials/Issue.svelte';
	import Comments from '$lib/testimonials/Comments.svelte';

	let error = false;
	let errorTimeout: number;
	let loadingPromise = new Promise((resolve) => {
		errorTimeout = setTimeout(() => {
			error = true;
			resolve('done');
		}, 9000);
	});
	onMount(async () => {
		loadingPromise = loadEverything();
		await loadingPromise;
		clearTimeout(errorTimeout);
	});
</script>

testimonials

{#await loadingPromise}
	<div>loading...</div>
{:then}
	{#if error || !$issueStore || !$commentsStore}
		<div>error</div>
	{:else}
		<Issue />
		<Comments />
	{/if}
{/await}
