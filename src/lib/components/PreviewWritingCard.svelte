<script lang="ts">
	interface Props {
		href: string;
		type: 'blog' | 'research';
		date: string;
		title: string;
		description: string;
		isNew?: boolean;
		external?: boolean;
	}

	let { href, type, date, title, description, isNew = false, external = false }: Props = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="block p-5 bg-white border border-dark-grey/15 rounded-lg transition-shadow hover:shadow-subtle-glow-strong group relative overflow-visible"
>
	{#if isNew}
		<div class="absolute -top-3 -right-3">
			<div class="relative">
				<img src="/newwritingzigzag.svg" alt="" class="w-20 h-14" />
				<span class="absolute inset-0 flex items-center justify-center font-mono text-xs text-pink">NEW</span>
			</div>
		</div>
	{/if}
	<div class="flex items-center gap-2 mb-2">
		<span class="font-mono text-[10px] text-dark-grey">// {type}</span>
		<span class="font-mono text-[10px] text-dark-grey">·</span>
		<span class="font-mono text-[10px] text-dark-grey/50">{date}</span>
	</div>
	<h3 class="font-sans font-semibold text-dark-grey mb-2 group-hover:text-dark-grey/80">{title}</h3>
	<p class="text-xs text-dark-grey/70 leading-relaxed">{description}</p>
</a>
