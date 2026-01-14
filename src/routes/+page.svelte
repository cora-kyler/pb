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
		<div class="hero-image">
			<img src="/pebbles1.png" alt="Pebblebed illustration" />
		</div>
	</section>
</div>

<style>
	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 40px 24px;
	}

	.hero {
		display: flex;
		align-items: center;
		gap: 48px;
		padding-bottom: 48px;
		border-bottom: 1px solid var(--light-grey);
	}

	.hero-text {
		font-size: 15px;
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

	.hero-image {
		flex-shrink: 0;
		width: 280px;
	}

	.hero-image img {
		width: 100%;
		height: auto;
	}
</style>
