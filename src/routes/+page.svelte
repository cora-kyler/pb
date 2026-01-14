<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Pebblebed Ventures</title>
</svelte:head>

<Header />

<div class="mx-auto max-w-[900px] px-6 py-10">
	<section class="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
		<div class="text-sm leading-[1.8] text-dark-grey space-y-[1.5em] md:max-w-[720px]">
			<p>We are a venture capital firm based in San Francisco, built by and for technologists.</p>
			<p>We invest in the foundational layers of progress: developer platforms that accelerate creation, robot operating systems that make autonomy real, simulation engines training the next generation of AI, and formal verification securing billions in value.</p>
			<p>We work with founders who choose the hard problems — who believe constraints sharpen ideas, and elegance emerges from complexity.</p>
		</div>
		<div class="w-[200px] md:w-[280px] shrink-0">
			<img src="/pebbles1.png" alt="Pebblebed illustration" class="w-full h-auto" />
		</div>
	</section>

	<hr class="border-t border-dark-grey/20 my-8 md:my-12" />

	<section class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
		<div class="aspect-2/1 bg-white border border-dark-grey/15 rounded-lg flex items-center justify-center p-4 md:p-6 transition-shadow hover:shadow-md overflow-hidden">
			<img src="/portfolioimages/augment.svg" alt="Augment" class="w-[95%] h-auto object-contain" />
		</div>
		<div class="aspect-2/1 bg-white border border-dark-grey/15 rounded-lg flex items-center justify-center p-4 md:p-6 transition-shadow hover:shadow-md overflow-hidden">
			<img src="/portfolioimages/krea.svg" alt="Krea" class="w-[80%] h-auto object-contain" />
		</div>
		<div class="aspect-2/1 bg-white border border-dark-grey/15 rounded-lg flex items-center justify-center p-4 md:p-6 transition-shadow hover:shadow-md overflow-hidden">
			<img src="/portfolioimages/lemurian.svg" alt="Lemurian" class="w-[90%] h-auto object-contain" />
		</div>
		<div class="aspect-2/1 bg-white border border-dark-grey/15 rounded-lg flex items-center justify-center p-4 md:p-6 transition-shadow hover:shadow-md overflow-hidden">
			<img src="/portfolioimages/openmind.svg" alt="OpenMind" class="w-[90%] h-auto object-contain" />
		</div>
		<div class="aspect-2/1 bg-white border border-dark-grey/15 rounded-lg flex items-center justify-center p-4 md:p-6 transition-shadow hover:shadow-md overflow-hidden">
			<img src="/portfolioimages/orchid.svg" alt="Orchid" class="w-[70%] h-auto object-contain" />
		</div>
		<div class="aspect-2/1 bg-white border border-dark-grey/15 rounded-lg flex items-center justify-center p-4 md:p-6 transition-shadow hover:shadow-md overflow-hidden">
			<img src="/portfolioimages/zeromatter.svg" alt="ZeroMatter" class="w-[90%] h-auto object-contain" />
		</div>
		<div class="aspect-2/1 bg-white border border-dark-grey/15 rounded-lg flex items-center justify-center p-4 md:p-6 transition-shadow hover:shadow-md">
		</div>
		<div class="aspect-2/1 bg-white border border-dark-grey/15 rounded-lg flex items-center justify-center p-4 md:p-6 transition-shadow hover:shadow-md">
		</div>
	</section>

	<hr class="border-t border-dark-grey/20 my-8 md:my-12" />

	<section>
		<div class="flex justify-between items-baseline mb-8">
			<h2 class="font-sans text-2xl font-semibold text-dark-grey">Team</h2>
			<a href="/careers" class="font-mono text-xs text-dark-grey/60 hover:text-dark-grey transition-colors">Interested in joining the team?</a>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
			<a href="/team/pam" class="flex gap-5 items-start p-4 -m-4 rounded-lg cursor-pointer transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 group">
				<div class="flex-1">
					<h3 class="font-sans font-semibold text-dark-grey group-hover:text-dark-grey/80">Pamela Vagata</h3>
					<span class="font-mono text-xs text-dark-grey/60 block mb-2">Founding Partner</span>
					<p class="text-xs text-dark-grey/80 leading-relaxed">Creator of FBLearner Flow, founding member of OpenAI, led AI at Stripe.</p>
				</div>
				<img src="/teamimages/pam.png" alt="Pam" class="w-32 aspect-square object-cover bg-white border border-dark-grey/15 shadow-invert shrink-0 rounded-sm transition-transform group-hover:scale-[1.02]" />
			</a>
			<a href="/team/keith" class="flex gap-5 items-start p-4 -m-4 rounded-lg cursor-pointer transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 group">
				<div class="flex-1">
					<h3 class="font-sans font-semibold text-dark-grey group-hover:text-dark-grey/80">Keith Adams</h3>
					<span class="font-mono text-xs text-dark-grey/60 block mb-2">Founding Partner</span>
					<p class="text-xs text-dark-grey/80 leading-relaxed">Founded Facebook AI Research, Chief Architect at Slack.</p>
				</div>
				<img src="/teamimages/keith.png" alt="Keith" class="w-32 aspect-square object-cover bg-white border border-dark-grey/15 shadow-invert shrink-0 rounded-sm transition-transform group-hover:scale-[1.02]" />
			</a>
			<a href="/team/tammie" class="flex gap-5 items-start p-4 -m-4 rounded-lg cursor-pointer transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 group">
				<div class="flex-1">
					<h3 class="font-sans font-semibold text-dark-grey group-hover:text-dark-grey/80">Tammie Siew</h3>
					<span class="font-mono text-xs text-dark-grey/60 block mb-2">Founding Partner</span>
					<p class="text-xs text-dark-grey/80 leading-relaxed">Founder-turned-investor, formerly at Sequoia.</p>
				</div>
				<img src="/teamimages/tammie.png" alt="Tammie" class="w-32 aspect-square object-cover bg-white border border-dark-grey/15 shadow-invert shrink-0 rounded-sm transition-transform group-hover:scale-[1.02]" />
			</a>
			<a href="/team/nicole" class="flex gap-5 items-start p-4 -m-4 rounded-lg cursor-pointer transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 group">
				<div class="flex-1">
					<h3 class="font-sans font-semibold text-dark-grey group-hover:text-dark-grey/80">Nicole Levin</h3>
					<span class="font-mono text-xs text-dark-grey/60 block mb-2">Operations</span>
					<p class="text-xs text-dark-grey/80 leading-relaxed">Previously ran ops at AI startups.</p>
				</div>
				<img src="/teamimages/nicole.png" alt="Nicole" class="w-32 aspect-square object-cover bg-white border border-dark-grey/15 shadow-invert shrink-0 rounded-sm transition-transform group-hover:scale-[1.02]" />
			</a>
			<a href="/team/matthew" class="flex gap-5 items-start p-4 -m-4 rounded-lg cursor-pointer transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 group">
				<div class="flex-1">
					<h3 class="font-sans font-semibold text-dark-grey group-hover:text-dark-grey/80">Mathew Vanherreweghe</h3>
					<span class="font-mono text-xs text-dark-grey/60 block mb-2">Research Resident</span>
					<p class="text-xs text-dark-grey/80 leading-relaxed">AI Researcher studying alternatives to transformers.</p>
				</div>
				<img src="/teamimages/matthew.png" alt="Matthew" class="w-32 aspect-square object-cover bg-white border border-dark-grey/15 shadow-invert shrink-0 rounded-sm transition-transform group-hover:scale-[1.02]" />
			</a>
			<a href="/team/jenny" class="flex gap-5 items-start p-4 -m-4 rounded-lg cursor-pointer transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 group">
				<div class="flex-1">
					<h3 class="font-sans font-semibold text-dark-grey group-hover:text-dark-grey/80">Jenny Guanni Qu</h3>
					<span class="font-mono text-xs text-dark-grey/60 block mb-2">Research Resident</span>
					<p class="text-xs text-dark-grey/80 leading-relaxed">Trained AI to solve math at Caltech, top competitive hacker.</p>
				</div>
				<img src="/teamimages/jenny.png" alt="Jenny" class="w-32 aspect-square object-cover bg-white border border-dark-grey/15 shadow-invert shrink-0 rounded-sm transition-transform group-hover:scale-[1.02]" />
			</a>
		</div>
	</section>
</div>
