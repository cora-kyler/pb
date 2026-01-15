<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		class?: string;
		rel?: string;
		target?: string;
		children: Snippet;
	}

	let { href, class: className = '', rel, target, children }: Props = $props();

	let isExternal = false;
	let finalTarget = $state<string | undefined>(undefined);
	let finalRel = $state<string | undefined>(undefined);

	$effect(() => {
		isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');
		finalTarget = target ?? (isExternal ? '_blank' : undefined);
		finalRel = rel ?? (finalTarget === '_blank' ? 'noopener noreferrer' : undefined);
	});
</script>

<a href={href} class={className} target={finalTarget} rel={finalRel}>
	{@render children()}
</a>
