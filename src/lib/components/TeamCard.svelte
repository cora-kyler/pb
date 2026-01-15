<script lang="ts">
	interface Props {
		name: string;
		role: string;
		description: string;
		image: string;
		imageAlt: string;
		onclick?: () => void;
	}

	let { name, role, description, image, imageAlt, onclick }: Props = $props();
</script>

<!-- svelte-ignore a11y_missing_attribute -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<a onclick={onclick} class="flex gap-5 items-start p-4 -m-4 rounded-lg cursor-pointer transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 group">
	<div class="flex-1">
		<h3 class="font-sans font-semibold text-dark-grey group-hover:text-dark-grey/80">{name}</h3>
		<span class="font-mono text-xs text-dark-grey/60 block mb-2">{role}</span>
		<p class="text-xs text-dark-grey/80 leading-relaxed">{description}</p>
	</div>
	<img src={image} alt={imageAlt} class="w-32 aspect-square object-cover bg-white border border-dark-grey/15 shadow-invert shrink-0 rounded-sm transition-transform group-hover:scale-[1.02]" />
</a>
