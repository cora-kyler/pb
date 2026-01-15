<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		date: string;
		author: string;
		email: string;
		shoutout?: string;
		shoutoutHtml?: string;
		children: Snippet;
	}

	let { title, date, author, email, shoutout, shoutoutHtml, children }: Props = $props();
</script>

<svelte:head>
	<title>{title} | Pebblebed Ventures</title>
</svelte:head>

<Header />

<article class="max-w-[900px] mx-auto px-6 md:px-24 py-4 md:py-16">
	<a href="/writing" class="font-mono text-xs text-pink hover:underline transition-colors mb-8 inline-block">← All writing</a>
	<header class="mb-10">
		<h1 class="blog-h1">{title}</h1>
		<p class="text-xs text-dark-grey leading-relaxed">
			{date} · by {author}
			<a href={`mailto:${email}`} class="text-pink hover:underline">({email})</a>
		</p>
	</header>
	<div class="blog-content text-sm leading-[1.4em] text-dark-grey space-y-[1.5em]">
		{@render children()}
	</div>

	{#if shoutout || shoutoutHtml}
		<div class="bg-light-grey/40 border border-dark-grey/10 rounded-lg p-3 md:p-4 mt-10 flex gap-4 items-start leading-[1.4em]">
			<div class="flex-1">
				<p class="text-xs text-dark-grey leading-relaxed">
					{#if shoutoutHtml}
						{@html shoutoutHtml}
					{:else}
						{shoutout}
					{/if}
				</p>
			</div>
			<img src="/marker.svg" alt="" class="w-10 h-10 shrink-0" />
		</div>
	{/if}
</article>
