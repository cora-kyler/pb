<script lang="ts">
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

{@render children()}

<style>
	@font-face {
		font-family: 'IBM Plex Mono';
		src: url('/fonts/IBMPlexMono-Regular.ttf') format('truetype');
		font-weight: 400;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Hanken Grotesk';
		src: url('/fonts/HankenGrotesk-VariableFont_wght.ttf') format('truetype');
		font-weight: 100 900;
		font-style: normal;
		font-display: swap;
	}

	:global(:root) {
		--dark-grey: #2F2C2B;
		--off-white: #FEFEFE;
		--light-grey: #e5e5e5;
		--bright-pink: #E223DC;
		--black: #110301;
		--hover-grey: #D4D1D1;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: 'IBM Plex Mono', monospace;
		background-color: var(--off-white);
		color: var(--dark-grey);
		line-height: 1.6;
		min-height: 100vh;
	}
</style>
