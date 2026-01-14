<script lang="ts">
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

<a href={linkHref} class="block no-underline group" target="_blank" rel="noopener noreferrer">
	<article class="border border-light-grey rounded-lg p-6 bg-off-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all cursor-pointer group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] group-hover:border-dark-grey/30">
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
		<span class="text-xs text-pink no-underline group-hover:opacity-70 transition-opacity">{linkText} ↗</span>
	</article>
</a>
