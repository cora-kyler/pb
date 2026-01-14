<script lang="ts">
	interface Props {
		href: string;
		title: string;
		author: string;
		email: string;
		description: string;
		date: string;
	}

	let { href, title, author, email, description, date }: Props = $props();
</script>

<a {href} class="block no-underline group">
	<article class="border border-dark-grey/15 rounded-lg p-6 bg-white shadow-subtle-glow transition-all cursor-pointer hover:shadow-subtle-glow-strong hover:border-pink">
		<div class="flex justify-between items-start gap-4 mb-1.5">
			<h2 class="font-sans text-base font-medium text-dark-grey">{title}</h2>
			<span class="text-[11px] text-dark-grey/70 shrink-0">{date}</span>
		</div>
		<p class="text-xs text-dark-grey mb-3">{author} <span class="text-dark-grey/50">({email})</span></p>
		<p class="text-xs leading-[1.7] text-dark-grey mb-3">{description}</p>
		<span class="text-xs text-pink no-underline">Read more →</span>
	</article>
</a>
