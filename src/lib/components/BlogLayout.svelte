<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		date: string;
		author: string;
		email: string;
		children: Snippet;
	}

	let { title, date, author, email, children }: Props = $props();
</script>

<svelte:head>
	<title>{title} | Pebblebed Ventures</title>
</svelte:head>

<Header />

<article class="max-w-[900px] mx-auto px-24 py-16">
	<a href="/writing" class="font-mono text-xs text-pink hover:underline transition-colors mb-8 inline-block">← All writing</a>
	<header class="mb-10">
		<h1 class="font-sans text-2xl font-semibold text-dark-grey mb-2">{title}</h1>
		<p class="text-xs text-dark-grey">{date} · by {author} ({email})</p>
	</header>
	<div class="blog-content text-sm leading-[1.4em] text-dark-grey space-y-[1.5em]">
		{@render children()}
	</div>
</article>
