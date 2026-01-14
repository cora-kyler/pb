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

<a href={linkHref} class="entry-link" target="_blank" rel="noopener noreferrer">
	<article class="entry">
		<div class="header-row">
			<div class="tags">
				{#each tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
			<span class="date">{date}</span>
		</div>
		<h2>{title}</h2>
		<p class="authors">{authors}</p>
		<p class="description">{description}</p>
		<span class="link">{linkText} ↗</span>
	</article>
</a>

<style>
	.entry-link {
		text-decoration: none;
		display: block;
	}

	.entry {
		border: 1px solid var(--light-grey);
		border-radius: 8px;
		padding: 24px;
		background: var(--off-white);
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
		transition: box-shadow 0.2s ease, border-color 0.2s ease;
		cursor: pointer;
	}

	.entry-link:hover .entry {
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		border-color: var(--hover-grey);
	}

	.header-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 16px;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.date {
		font-size: 11px;
		color: var(--dark-grey);
		opacity: 0.7;
	}

	.tag {
		font-size: 10px;
		padding: 3px 8px;
		border: 1px solid var(--light-grey);
		border-radius: 4px;
		color: rgba(47, 44, 43, 0.7);
		background-color: var(--light-grey);
		transition: border-color 0.2s ease;
	}

	h2 {
		font-family: 'Hanken Grotesk', sans-serif;
		font-size: 16px;
		font-weight: 500;
		color: var(--black);
		margin-bottom: 6px;
	}

	.authors {
		font-size: 12px;
		color: var(--dark-grey);
		margin-bottom: 12px;
	}

	.description {
		font-size: 12px;
		line-height: 1.7;
		color: var(--dark-grey);
		margin-bottom: 12px;
	}

	.link {
		font-size: 12px;
		color: var(--bright-pink);
		text-decoration: none;
	}

	.link:hover {
		opacity: 0.7;
	}
</style>
