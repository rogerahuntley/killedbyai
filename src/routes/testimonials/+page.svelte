<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Issue from '$lib/testimonials/Issue.svelte';
	import Comments from '$lib/testimonials/Comments.svelte';
	import type { GHComment, GHIssue } from '$lib/scripts/github';

	export let data: { issue: GHIssue; comments: GHComment[] };
	const { issue, comments } = data;
</script>

<Header page="testimonials" />
<Issue {issue} />
<Comments {comments} />
