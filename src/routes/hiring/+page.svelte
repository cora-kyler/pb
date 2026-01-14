<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Join Our Investment Team | Pebblebed</title>
</svelte:head>

<Header />

<div class="mx-auto max-w-[900px] px-6 py-10">
	<h2 class="font-sans text-2xl font-semibold text-dark-grey mb-8">Join Our Investment Team</h2>

	<section class="bg-light-grey rounded-lg p-6 md:p-10">
		<div class="text-sm leading-[1.8] text-dark-grey space-y-[1.5em]">
			<p>Our investment team is growing, and we're looking for early-career engineers to join us.</p>

			<p>You can code. You've studied CS or built real systems. You're curious about AI and startups — not just watching from the sidelines, but eager to help shape how we find, evaluate, and support founders building at the frontier.</p>

			<p>This isn't a typical "junior role." You'll work directly with partners, design sourcing systems, stress-test ideas with founders, and sharpen how we invest. We care more about clarity, curiosity, and first-principles judgment than pedigree.</p>
		</div>

		<div class="bg-white rounded-lg p-4 md:p-6 mt-16">
			<h2 class="font-sans font-semibold text-dark-grey mb-4">
				<span class="text-pink">//</span> how to apply
			</h2>
			<div class="text-xs text-dark-grey/80 leading-relaxed space-y-3">
				<p>If this sounds like you, send us a note at <a href="mailto:jobs@pebblebed.com" class="text-pink hover:underline">jobs@pebblebed.com</a> with:</p>
				<ul class="space-y-2 list-disc list-inside ml-1">
					<li>A 150–200 word reflection on one AI startup you admire (and why).</li>
					<li>Links you'd like to share (LinkedIn, GitHub, Twitter, personal site — whatever best shows your work/curiosity).</li>
				</ul>
				<p class="text-xs text-dark-grey/80 leading-relaxed">We'll read everything.</p>
			</div>
		</div>
	</section>
</div>

<style>
	.font-serif {
		font-family: 'Source Serif 4', serif;
	}
</style>
