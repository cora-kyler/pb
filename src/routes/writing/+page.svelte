<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import ResearchCard from '$lib/components/ResearchCard.svelte';
</script>

<svelte:head>
	<title>Writing | Pebblebed Ventures</title>
</svelte:head>

<Header />

<div class="max-w-[900px] mx-auto px-6 py-10">
	<section class="mb-16">
		<h1 class="font-sans text-[20px] font-lg font-semibold text-dark-grey mb-2">
			<span class="text-pink">//</span> blog
		</h1>
		<p class="font-mono text-xs text-dark-grey mb-10">thoughts from our team.</p>

		<div class="flex flex-col gap-6">
			<BlogCard
				href="/blog/kernel-bugs"
				title="Kernel bugs hide for 2 years on average. Some hide for 20."
				author="Jenny Guanni Qu"
				email="jenny@pebblebed.com"
				description="What I learned mining 125,000 vulnerabilities from Linux git history. The average kernel bug lives 2.1 years before discovery, but some subsystems are far worse."
				date="Jan 2026"
			/>
			<BlogCard
				href="/blog/krea"
				title="KREA"
				author="Keith Adams"
				email="kma@pebblebed.com"
				description="From a park bench handshake in 2022 to millions of users creating at the speed of imagination. How KREA is collapsing the distance between ideas and their realization."
				date="Apr 2025"
			/>
		</div>
	</section>

	<section>
		<h1 class="font-sans text-[20px] font-lg font-semibold text-dark-grey mb-2">
			<span class="text-pink">//</span> research
		</h1>
		<p class="font-mono text-xs text-dark-grey mb-10">experiments from our team.</p>

		<div class="flex flex-col gap-6">
			<ResearchCard
				tags={['GitHub 2025', 'KAN', 'Transformers', 'Code']}
				title="KANGPT"
				authors="Mathew Vanherreweghe"
				description="A transformer-based language model that replaces traditional MLP layers with Kolmogorov-Arnold Networks (KAN). Instead of Linear → GELU → Linear, KANGPT uses learnable Chebyshev polynomial basis functions—achieving GPT-2 comparable performance with an alternative computational approach."
				linkText="View on GitHub"
				linkHref="https://github.com/Mathewvanh/KANGPT"
				date="Dec 2025"
			/>

			<ResearchCard
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

