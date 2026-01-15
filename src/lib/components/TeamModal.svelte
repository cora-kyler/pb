<script lang="ts">
	import type { TeamMember } from '$lib/data/team';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let { member, onClose }: { member: TeamMember; onClose: () => void } = $props();

	function handleCloseClick() {
		onClose();
	}

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
		out:scale={{ start: 1, duration: 200 }}
		class="bg-off-white rounded-lg max-w-[720px] w-full max-h-[80vh] shadow-xl relative flex flex-col"
		onclick={(e) => e.stopPropagation()}
	>
		<!-- Fixed Header -->
		<div class="shrink-0 p-8 pb-0">
			<!-- Close button -->
			<button 
				onclick={handleCloseClick}
				class="absolute top-6 right-6 text-dark-grey/40 hover:text-dark-grey transition-colors text-xl z-10"
				aria-label="Close modal"
			>
				×
			</button>
			
			<!-- Header with Image -->
			<div class="flex justify-between items-start mb-6">
				<header class="flex-1">
					<!-- Name -->
					<h2 class="font-sans text-xl font-medium text-dark-grey mb-2">
						{member.name}
					</h2>
					
					<!-- Title/Role -->
					<p class="font-mono text-sm text-dark-grey/70 mb-3">{member.role}</p>
					
					
					<!-- Links -->
					{#if member.links && member.links.length > 0}
						<div class="mb-3">

							<div class="flex flex-wrap gap-2">
								{#each member.links as link}
									<a 
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										class="text-xs bg-pink text-white px-2 py-1 hover:translate-y-[-2px] transition-all duration-200"
									>
										{link.label} ↗
									</a>
								{/each}
							</div>
						</div>
					{/if}

                   <!-- Contact (if it exists, add in team.ts if you would like to show it)-->
					{#if member.email}
                    <div class="mb-3">
                        <p class="text-xs text-dark-grey font-mono">
                            {member.email.replace('@', ' [at] ').replace('.com', ' [dot] com')}
                        </p>
                    </div>
                {/if}
				</header>

			<!-- Profile Image -->
			<img src={member.image} alt={member.imageAlt} class="w-48 aspect-square object-cover bg-white border border-dark-grey/15 shadow-invert shrink-0 rounded-sm mr-4" />
			</div>
		</div>

		<!-- Scrollable Content - Bio -->
		<div class="flex-1 overflow-y-auto px-8 pt-4 pb-8 border-t border-dark-grey/10 scrollbar-hide">
			{#if member.bio}
				<section class="mb-8 space-y-4">
					{#each member.bio.split('\n\n') as paragraph}
						<p class="text-sm leading-[1.4em] text-dark-grey">{paragraph}</p>
					{/each}
				</section>
			{:else}
				<section class="mb-8">
					<p class="text-sm leading-[1.4em] text-dark-grey">{member.description}</p>
				</section>
			{/if}

			
		</div>
	</div>
</div>
