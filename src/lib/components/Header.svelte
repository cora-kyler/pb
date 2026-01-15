<script lang="ts">
	import { page } from '$app/state';
</script>

<header class="fixed w-full top-0 bg-off-white z-50 overflow-x-hidden">
	<div class="flex items-center justify-between max-w-[900px] mx-auto px-6 pt-6 pb-4 overflow-x-hidden">
		<a href="/" class="flex items-center gap-2 no-underline hover:opacity-70 transition-opacity ">
			<div class="w-[18px] h-[18px]">
				<img src="/pb_logo.svg" alt="Pebblebed logo" class="w-full h-full" />
			</div>
			<span class="font-sans text-[22px] font-semibold tracking-tight text-dark-grey">pebblebed</span>
		</a>
		<nav class="flex gap-0 overflow-visible">
			<a href="/portfolio" class="font-sans text-sm font-medium text-dark-grey no-underline hover:opacity-70 transition-opacity relative px-4 sm:px-8 py-4 overflow-visible">
				portfolio
				{#if page.url.pathname === '/portfolio'}
				<img
				src="/markercircle.svg"
				alt=""
				class="pointer-events-none absolute top-1/2 left-1/2 w-24 -translate-x-1/2 -translate-y-1/2"
			/>
				{/if}
			</a>
			<a href="/#team" class="font-sans text-sm font-medium text-dark-grey no-underline hover:opacity-70 transition-opacity relative px-4 sm:px-8 py-4">
				team
				{#if page.url.pathname === '/' && page.url.hash === '#team'}
				<img
				src="/markercircle.svg"
				alt=""
				class="pointer-events-none absolute top-1/2 left-1/2 w-24 -translate-x-1/2 -translate-y-1/2"
			/>
				{/if}
			</a>
			<a href="/writing" class="font-sans text-sm font-medium text-dark-grey no-underline hover:opacity-70 transition-opacity relative inline-block px-4 sm:px-8 py-4 overflow-visible">
				<span class="relative z-10">writing</span>
				{#if page.url.pathname === '/writing'}
					<img
						src="/markercircle.svg"
						alt=""
						class="pointer-events-none absolute top-1/2 left-1/2 w-24 -translate-x-1/2 -translate-y-1/2"
					/>
				{/if}
			</a>
		</nav>
	</div>
</header>
