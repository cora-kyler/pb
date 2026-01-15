<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import TeamCard from '$lib/components/TeamCard.svelte';
	import TeamModal from '$lib/components/TeamModal.svelte';
	import CompanyModal from '$lib/components/CompanyModal.svelte';
	import PreviewWritingCard from '$lib/components/PreviewWritingCard.svelte';
	import CompanyCard from '$lib/components/CompanyCard.svelte';
	import { teamMembers, type TeamMember } from '$lib/data/team';
	import { getAllCompanies, type Company } from '$lib/data/companies';

	let selectedMember = $state<TeamMember | null>(null);
	let selectedCompany = $state<Company | null>(null);

	afterNavigate(({ to }) => {
		selectedMember = null;
		selectedCompany = null;
		if (to?.url.hash) {
			setTimeout(() => {
				const el = document.querySelector(to.url.hash);
				if (el) window.scrollTo({ top: el.offsetTop - 96, behavior: 'smooth' });
			}, 50);
		}
	});

	const featuredCompanies = getAllCompanies().slice(0, 7);

	function openTeamModal(member: TeamMember) {
		selectedMember = member;
	}

	function closeTeamModal() {
		selectedMember = null;
	}

	function openCompanyModal(company: Company) {
		selectedCompany = company;
	}

	function closeCompanyModal() {
		selectedCompany = null;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			if (selectedMember) closeTeamModal();
			if (selectedCompany) closeCompanyModal();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
	<title>Pebblebed Ventures</title>
</svelte:head>

<div id="home" class="scroll-mt-24"></div>

<div class="mx-auto max-w-[900px] px-6 py-10">
	<section class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
		<div class="text-sm leading-[1.8] text-dark-grey space-y-[1.5em] md:max-w-[720px]">
			<p class="text-lg text-pink text-balance">We are a venture capital firm based in <span class="whitespace-nowrap">San Francisco</span>, built by and for technologists.</p>
			<p class="text-balance">We invest in the foundational layers of progress: developer platforms that accelerate creation, robot operating systems that make autonomy real, simulation engines training the next generation of AI, and formal verification securing billions in value.</p>
			<p>We work with founders who choose the hard problems — who believe constraints sharpen ideas, and elegance emerges from complexity.</p>
		</div>
		<div class="w-full md:w-[280px] shrink-0">
			<div class="flex items-center gap-4 md:block">
				<img src="/pebbles1.png" alt="Pebblebed illustration" class="w-[45%] md:w-full h-auto shrink-0" />
				<p class="text-[10px] text-dark-grey/50 leading-relaxed md:hidden">A pebblebed reactor can't melt down. This is a guarantee made by physics, not intervention. We named our firm after this principle.</p>
			</div>
			<div class="hidden md:flex items-start gap-2 mt-3">
				<img src="/arrow.svg" alt="" class="w-auto h-12 shrink-0 -mt-12 rotate-15" />
				<p class="text-[10px] text-dark-grey/50 leading-relaxed">A pebblebed reactor can't melt down.<br />This is a guarantee made by physics, not intervention. We named our firm after this principle.</p>
			</div>
		</div>
	</section>
	<hr class="border-t border-dark-grey/20 my-8 md:my-12" />

	<section>
		<h2 class="font-sans text-2xl font-semibold text-dark-grey mb-8">Portfolio</h2>
		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
			{#each featuredCompanies as company}
			<!-- take first 7 companies from companies.ts and display them on the homepage -->
				<CompanyCard logo={company.logo} name={company.name} onclick={() => openCompanyModal(company)} />
			{/each}
			<button class="aspect-2/1 bg-white rounded-lg border-dashed flex items-center justify-center p-4 md:p-6 cursor-pointer group"
			onclick={() => goto('/portfolio')}
			>
				<p class="text-xs text-pink w-full text-center group-hover:underline">View more →</p>
				
			</button>
		</div>
	</section>

	<hr class="border-t border-dark-grey/20 my-8 md:my-12" />

	<section id="team" class="scroll-mt-24">
		<div class="flex justify-between items-baseline mb-8">
			<h2 class="font-sans text-2xl font-semibold text-dark-grey">Team</h2>
			<a href="/hiring" class="font-mono text-xs text-pink hover:underline transition-colors">Join our team →</a>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
			{#each teamMembers as member}
				<TeamCard
					name={member.name}
					role={member.role}
					description={member.description}
					image={member.image}
					imageAlt={member.imageAlt}
					onclick={() => openTeamModal(member)}
				/>
			{/each}
		</div>
	</section>

	<hr class="border-t border-dark-grey/15 my-8 md:my-12" />

	<section>
		<div class="flex justify-between items-baseline mb-8">
			<h2 class="font-sans text-2xl font-semibold text-dark-grey">Writing</h2>
			<a href="/writing" class="font-mono text-xs text-pink hover:underline transition-colors">View more →</a>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<PreviewWritingCard
				href="/blog/kernel-bugs"
				type="blog"
				date="Jan 2026"
				title="Kernel bugs hide for 2 years on average"
				description="What I learned mining 125,000 vulnerabilities from Linux git history."
				isNew
			/>
			<PreviewWritingCard
				href="/blog/krea"
				type="blog"
				date="Apr 2025"
				title="KREA"
				description="From a park bench handshake in 2022 to millions of users creating at the speed of imagination."
			/>
			<PreviewWritingCard
				href="https://github.com/Mathewvanh/KANGPT"
				type="research"
				date="Dec 2025"
				title="KANGPT"
				description="A transformer-based language model replacing MLP layers with Kolmogorov-Arnold Networks."
				external
			/>
			<PreviewWritingCard
				href="https://arxiv.org/abs/2511.21626"
				type="research"
				date="Nov 2025"
				title="Scale-Agnostic Kolmogorov-Arnold Geometry"
				description="Research extending geometric structures in neural networks to high-dimensional settings."
				external
			/>
		</div>
	</section>
</div>

<!-- Team Modal -->
{#if selectedMember}
	<TeamModal member={selectedMember} onClose={closeTeamModal} />
{/if}

<!-- Company Modal -->
{#if selectedCompany}
	<CompanyModal company={selectedCompany} onClose={closeCompanyModal} />
{/if}
