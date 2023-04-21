<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Comment from '$lib/testimonials/Comment.svelte';
	import { commentsStore } from '$lib/scripts/github';
</script>

{#if $commentsStore}
	<ul class="comments">
		{#each $commentsStore as comment}
			<li class="comment-box">
				<Comment {comment} />
			</li>
		{/each}
	</ul>
{/if}

<style lang="scss">
	.comments {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.comment-box {
		margin: 2rem 0;
	}
</style>
