<script lang="ts">
	import ExternalLink from '$lib/components/ExternalLink.svelte';

	interface Props {
		tags: string[];
		title: string;
		authors: string;
		description: string;
		linkText: string;
		linkHref: string;
		date: string;
	}

	let { tags, title, authors, description, linkText, linkHref, date }: Props = $props();
</script>

<ExternalLink href={linkHref} class="block no-underline group">
	<article class="border border-dark-grey/15 rounded-lg p-6 bg-white shadow-subtle-glow transition-all cursor-pointer hover:shadow-subtle-glow-strong hover:border-pink">
		<div class="flex justify-between items-start mb-4">
			<div class="flex flex-wrap gap-2">
				{#each tags as tag}
					<span class="text-[10px] px-2 py-[3px] border border-light-grey rounded bg-light-grey text-dark-grey/70 transition-colors">{tag}</span>
				{/each}
			</div>
			<span class="text-[11px] text-dark-grey/70">{date}</span>
		</div>
		<h2 class="font-sans text-base font-medium text-dark-grey mb-1.5">{title}</h2>
		<p class="text-xs text-dark-grey mb-3">{authors}</p>
		<p class="text-xs leading-[1.7] text-dark-grey mb-3">{description}</p>
		<span class="text-xs text-pink no-underline">{linkText} ↗</span>
	</article>
</ExternalLink>
