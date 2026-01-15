<!-- displayed on homepage. takes first 7 companies from companies.ts  -->
<script lang="ts">
	interface Props {
		logo: string;
		name: string;
		onclick?: () => void;
	}

	let { logo, name, onclick }: Props = $props();
</script>

<button 
	class="aspect-2/1 bg-white border border-dark-grey/15 rounded-lg flex items-center justify-center p-4 md:p-6 transition-shadow hover:shadow-subtle-glow-strong overflow-hidden cursor-pointer"
	onclick={onclick}
>
	{#if logo}
		<img src={logo} alt={name} class="w-[90%] h-auto object-contain" />
	{:else}
		<span class="text-sm font-sans font-semibold text-dark-grey">{name}</span>
	{/if}
</button>
