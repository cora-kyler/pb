<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import ExternalHostedWriting from '$lib/components/ExternalHostedWriting.svelte';
</script>

<svelte:head>
	<title>Writing | Pebblebed Ventures</title>
</svelte:head>

<Header />

<div class="max-w-[900px] mx-auto px-6 py-10">
	<section>
		<h1 class="font-sans text-xl font-medium text-dark-grey mb-2"><span class="text-pink">//</span> from the lab</h1>
		<p class="font-mono text-xs text-dark-grey mb-10">experiments by our team, that made it out alive.</p>

		<div class="flex flex-col gap-6">
			<ExternalHostedWriting
				tags={['GitHub 2025', 'KAN', 'Transformers', 'Code']}
				title="KANGPT"
				authors="Mathew Vanherreweghe"
				description="A transformer-based language model that replaces traditional MLP layers with Kolmogorov-Arnold Networks (KAN). Instead of Linear → GELU → Linear, KANGPT uses learnable Chebyshev polynomial basis functions—achieving GPT-2 comparable performance with an alternative computational approach."
				linkText="View on GitHub"
				linkHref="https://github.com/Mathewvanh/KANGPT"
				date="Jan 2025"
			/>

			<ExternalHostedWriting
				tags={['arXiv 2025', 'Neural Networks', 'Geometry']}
				title="Scale-Agnostic Kolmogorov-Arnold Geometry in Neural Networks"
				authors="Mathew Vanherreweghe, Michael H. Freedman, Keith M. Adams"
				description="This research extends previous findings about geometric structures in neural networks to realistic, high-dimensional settings. We examined how 2-layer MLPs learn MNIST digit classification and discovered that KAG (Kolmogorov-Arnold Geometry) emerges during training and appears consistently across spatial scales."
				linkText="Read on arXiv"
				linkHref="https://arxiv.org/abs/2511.21626"
				date="Nov 2025"
			/>
		</div>
	</section>
</div>

