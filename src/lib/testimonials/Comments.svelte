<script lang="ts">
	import type { GHComment } from '$lib/scripts/github';
	import Comment from '$lib/testimonials/Comment.svelte';
	export let comments: GHComment[];
</script>

{#if comments && comments.length > 0}
	<ul class="comments">
		{#each comments as comment}
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
