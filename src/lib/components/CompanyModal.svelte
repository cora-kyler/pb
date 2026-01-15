<script lang="ts">
	import type { Company } from '$lib/data/companies';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let { company, onClose }: { company: Company; onClose: () => void } = $props();

	// Manage body overflow when modal is open
	$effect(() => {
		document.body.style.overflow = 'hidden';
		
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div 
	transition:fade={{ duration: 100 }}
	class="fixed inset-0 bg-dark-grey/50 z-50 flex items-center justify-center p-6"
	onclick={onClose}
>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div 
		in:scale={{ start: 0.95, duration: 100, easing: quintOut }}
		class="bg-off-white rounded-lg max-w-[720px] w-full max-h-[80vh] shadow-xl relative flex flex-col"
		onclick={(e) => e.stopPropagation()}
	>
		<!-- Fixed Header -->
		<div class="shrink-0 p-4 md:p-8 pb-0">
			<!-- Close button -->
			<button 
				onclick={onClose}
				class="absolute top-3 right-3 md:top-4 md:right-4 text-dark-grey/40 hover:text-dark-grey transition-colors text-xl z-10"
				aria-label="Close modal"
			>
				×
			</button>
			
			<!-- Header with Logo -->
			<div class="flex justify-between items-start mb-4">
				<header>
					<h2 class="font-sans text-xl font-medium text-dark-grey mb-2">
						{company.name}
					</h2>
					{#if company.tagline}
						<p class="font-mono text-sm text-dark-grey/70 mb-2">{company.tagline}</p>
					{/if}
					{#if company.website}
						<ExternalLink
							href={company.website}
							class="text-base text-pink hover:underline transition-all duration-200 font-sans"
						>
							{company.website.replace('https://', '')} <span class="no-emoji">↗</span>
						</ExternalLink>
					{/if}
				</header>

				<!-- Logo -->
				{#if company.logo}
					<img src={company.logo} alt="{company.name} logo" class="h-auto w-24 md:w-32 object-contain mt-1 mr-6" />
				{/if}
			</div>
		</div>

		<!-- Scrollable Content -->
		<div class="flex-1 overflow-y-auto px-4 md:px-8 pt-4 pb-8 border-t border-dark-grey/10 scrollbar-hide">
			<!-- Founders -->
			{#if company.founders.length > 0}
				<section class="mb-4">
					<h3 class="font-mono text-xs text-dark-grey/50 mb-2">// {company.founders.length === 1 ? 'founder' : 'founders'}</h3>
					<div class="flex flex-wrap gap-x-3 gap-y-2">
						{#each company.founders as founder}
							{#if founder.link}
								<ExternalLink
									href={founder.link}
									class="text-xs bg-pink text-white px-1 hover:translate-y-[-2px] transition-all duration-200"
								>
									{founder.name} <span class="no-emoji">↗</span>
								</ExternalLink>
							{:else}
								<span class=" text-pink text-xs bg-white border border-pink px-1">{founder.name}</span>
							{/if}
						{/each}
					</div>
				</section>
			{/if}

			<!-- Description -->
			{#if company.description}
				<section class="mb-4 space-y-4">
					{#each company.description.split('\n\n') as paragraph}
						<p class="text-xs sm:text-sm leading-[1.4em] text-dark-grey space-y-[1.5em]">{paragraph}</p>
					{/each}
				</section>
			{/if}

			<!-- News -->
			{#if company.news && company.news.length > 0}
				<section class="mb-4">
					<h3 class="font-mono text-xs text-dark-grey/50 mb-3">// in the news</h3>
					<div class="space-y-3 font-sans">
						{#each company.news as item}
							<ExternalLink
								href={item.url}
								class="block border border-dark-grey/10 rounded-md p-4 bg-white shadow-subtle-glow hover:shadow-subtle-glow-strong hover:border-pink transition-all"
							>
								<p class="text-sm text-dark-grey mb-1">{item.title}</p>
								<p class="text-xs text-dark-grey/50">{item.source} · {item.date}</p>
							</ExternalLink>
						{/each}
					</div>
				</section>
			{/if}
		</div>
	</div>
</div>
