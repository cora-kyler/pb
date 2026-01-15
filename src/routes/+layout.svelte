<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;1,8..60,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header />

<div class="pt-24">
	{@render children()}
</div>

<Footer />
