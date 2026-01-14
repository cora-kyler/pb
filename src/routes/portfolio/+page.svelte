<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import CompanyModal from '$lib/components/CompanyModal.svelte';
	import type { PageData } from './$types';
	import type { Company } from '$lib/data/companies';

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
		<p class="font-mono text-xs text-dark-grey mb-10">companies we've invested in.</p>

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
	<CompanyModal company={selectedCompany} onClose={closeModal} />
{/if}
