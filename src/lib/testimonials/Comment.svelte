<script lang="ts">
	import type { GHComment as CommentType } from '$lib/scripts/github';
	import SvelteMarkdown from 'svelte-markdown';
	export let comment: CommentType;
</script>

{#if comment}
	<div class="comment-box">
		<div class="user-info">
			{comment.user.login}
		</div>
		<hr />
		<div class="user-comment">
			{comment.body}
		</div>
	</div>
{/if}

<style lang="scss">
	.user-info {
		font-weight: bold;
	}
	.user-comment {
		margin-top: 1rem;
	}
</style>
