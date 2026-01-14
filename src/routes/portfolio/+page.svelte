<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import type { PageData } from './$types';
	import type { Company } from '$lib/data/companies';
	import { fade, scale, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let { data }: { data: PageData } = $props();
	const companies = $derived(data.companies);
	
	let selectedCompany = $state<Company | null>(null);
	
	function openModal(company: Company) {
		selectedCompany = company;
		document.body.style.overflow = 'hidden';
	}
	
	function closeModal() {
		selectedCompany = null;
		document.body.style.overflow = '';
	}
	
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && selectedCompany) {
			closeModal();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
	<title>Portfolio | Pebblebed Ventures</title>
</svelte:head>

<Header />

<div class="max-w-[900px] mx-auto px-6 py-10">
	<section>
		<h1 class="font-sans text-xl font-medium text-dark-grey mb-2">
			<span class="text-pink">//</span> portfolio
		</h1>
		<p class="font-mono text-xs text-dark-grey mb-10">companies we're proud to back.</p>

	<div class="flex flex-col divide-y divide-dark-grey/10">
		{#each companies as company, i}
			<button 
				
				onclick={() => openModal(company)}
				class="flex items-center gap-4 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4 w-full text-left cursor-pointer"
			>
				<h3 class="font-sans font-semibold text-dark-grey w-40 shrink-0 group-hover:text-dark-grey/80">{company.name}</h3>
				<p class="text-xs text-dark-grey/60 flex-1">{company.tagline}</p>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</button>
		{/each}
	</div>
	</section>
</div>

<!-- Modal -->
{#if selectedCompany}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div 
		transition:fade={{ duration: 100 }}
		class="fixed inset-0 bg-dark-grey/50 z-50 flex items-center justify-center p-6"
		onclick={closeModal}
	>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div 
			in:scale={{ start: 0.95, duration: 100, easing: quintOut }}
			out:scale={{ start: 1, duration: 200 }}
			class="bg-off-white rounded-lg max-w-[720px] w-full max-h-[80vh] shadow-xl relative flex flex-col"
			onclick={(e) => e.stopPropagation()}
		>
			<!-- Fixed Header -->
			<div class="shrink-0 p-8 pb-0">
				<!-- Close button -->
				<button 
					onclick={closeModal}
					class="absolute top-4 right-4 text-dark-grey/40 hover:text-dark-grey transition-colors text-xl z-10"
					aria-label="Close modal"
				>
					×
				</button>
				
				<!-- Header with Logo -->
				<div class="flex justify-between items-start mb-6">
					<header>
						<h2 class="font-sans text-xl font-medium text-dark-grey mb-2">
							{selectedCompany.name}
						</h2>
						{#if selectedCompany.tagline}
							<p class="font-mono text-sm text-dark-grey/70 mb-2">{selectedCompany.tagline}</p>
						{/if}
						{#if selectedCompany.website}
							<a 
								href={selectedCompany.website} 
								target="_blank" 
								rel="noopener noreferrer"
								class="text-base text-pink hover:underline transition-all duration-200 font-sans"
							>
								{selectedCompany.website.replace('https://', '')} ↗
							</a>
						{/if}
					</header>

					<!-- Logo -->
					{#if selectedCompany.logo}
						<img src={selectedCompany.logo} alt="{selectedCompany.name} logo" class="h-auto w-32 object-contain mt-1" />
					{/if}
				</div>
			</div>

			<!-- Scrollable Content -->
			<div class="flex-1 overflow-y-auto px-8 pt-4 pb-8 border-t border-dark-grey/10 scrollbar-hide">
				<!-- Founders -->
				{#if selectedCompany.founders.length > 0}
					<section class="mb-8">
						<h3 class="font-mono text-[10px] text-dark-grey/50 mb-2">// founders</h3>
						<div class="flex flex-wrap gap-x-3">
							{#each selectedCompany.founders as founder}
								{#if founder.link}
									<a 
										href={founder.link} 
										target="_blank" 
										rel="noopener noreferrer"
										class="text-xs bg-pink text-white px-1 hover:translate-y-[-2px] transition-all duration-200"
									>
										{founder.name} ↗
									</a>
								{:else}
									<span class=" text-pink text-xs bg-white border border-pink px-1">{founder.name}</span>
								{/if}
							{/each}
						</div>
					</section>
				{/if}

				<!-- Description -->
				{#if selectedCompany.description}
					<section class="mb-8 space-y-4">
						{#each selectedCompany.description.split('\n\n') as paragraph}
							<p class="text-sm text-dark-grey leading-[1.8]">{paragraph}</p>
						{/each}
					</section>
				{/if}

				<!-- News -->
				{#if selectedCompany.news && selectedCompany.news.length > 0}
					<section class="mb-8">
						<h3 class="font-mono text-[10px] text-dark-grey/50 mb-3">// in the news</h3>
						<div class="space-y-3 font-sans">
							{#each selectedCompany.news as item}
								<a 
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
									class="block border border-dark-grey/10 rounded-md p-4 bg-white shadow-subtle-glow hover:shadow-subtle-glow-strong hover:border-pink transition-all"
								>
									<p class="text-sm text-dark-grey mb-1">{item.title}</p>
									<p class="text-xs text-dark-grey/50">{item.source} · {item.date}</p>
								</a>
							{/each}
						</div>
					</section>
				{/if}
			</div>
		</div>
	</div>
{/if}
