<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import ExternalHostedWriting from '$lib/components/ExternalHostedWriting.svelte';
</script>

<svelte:head>
	<title>Writing | Pebblebed Ventures</title>
</svelte:head>

<Header />

<div class="container">
	<section class="writing">
		<h1><span class="slash">//</span> from the lab</h1>
		<p class="subtitle">experiments by our team, that made it out alive.</p>

		<div class="entries">
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

<style>
	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 40px 24px;
	}

	.writing h1 {
		font-family: 'Hanken Grotesk', sans-serif;
		font-size: 20px;
		font-weight: 500;
		color: var(--black);
		margin-bottom: 8px;
	}

	.writing h1 .slash {
		color: var(--bright-pink);
	}

	.subtitle {
		font-style: italic;
		font-size: 12px;
		color: var(--dark-grey);
		margin-bottom: 40px;
	}

	.entries {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
</style>
