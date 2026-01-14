<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Pebblebed Ventures</title>
</svelte:head>

<Header />

<div class="container">
	<section class="hero">
		<div class="hero-text">
			<p>We are a venture capital firm based in San Francisco, built by and for technologists.</p>
			<p>We invest in the foundational layers of progress: developer platforms that accelerate creation, robot operating systems that make autonomy real, simulation engines training the next generation of AI, and formal verification securing billions in value.</p>
			<p>We work with founders who choose the hard problems — who believe constraints sharpen ideas, and elegance emerges from complexity.</p>
		</div>
	</section>
</div>

<style>
	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 40px 24px;
	}

	.hero h1 {
		font-family: 'Source Serif 4', Georgia, serif;
		font-size: 48px;
		font-weight: 400;
		letter-spacing: -1px;
		margin-bottom: 32px;
	}

	.hero-text {
		font-size: 17px;
		line-height: 1.8;
		color: var(--dark-grey);
		max-width: 720px;
	}

	.hero-text p {
		margin-bottom: 1.5em;
	}

	.hero-text p:last-child {
		margin-bottom: 0;
	}
</style>
