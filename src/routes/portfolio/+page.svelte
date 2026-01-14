<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Portfolio | Pebblebed Ventures</title>
</svelte:head>

<Header />

<div class="max-w-[900px] mx-auto px-6 py-10">
	<section>
		<h1 class="font-sans text-[20px] font-lg font-semibold text-dark-grey mb-2">
			<span class="text-pink">//</span> portfolio
		</h1>
		<p class="font-mono text-xs text-dark-grey mb-10">companies we're proud to back.</p>

		<div class="flex flex-col divide-y divide-dark-grey/10">
			<a href="/portfolio/adaptive-computer" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Adaptive Computer</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Build apps with natural language</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/aneta" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Aneta</h3>
				<p class="text-xs text-dark-grey/60 flex-1">AI automation for scientific workflows</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/anomaly-bio" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Anomaly Bio</h3>
				<p class="text-xs text-dark-grey/60 flex-1">In stealth mode</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/augment" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Augment</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Enterprise AI coding assistant</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/build" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Build</h3>
				<p class="text-xs text-dark-grey/60 flex-1">AI for commercial real estate reports</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/cedana" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Cedana</h3>
				<p class="text-xs text-dark-grey/60 flex-1">VMware for GPUs</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/datalab" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Datalab</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Document intelligence for enterprise AI</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/dylibso" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Dylibso</h3>
				<p class="text-xs text-dark-grey/60 flex-1">WebAssembly infrastructure for plugins</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/elliptic-ai" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Elliptic AI</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Tools to amplify data scientists</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/headquarters-health" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Headquarters Health</h3>
				<p class="text-xs text-dark-grey/60 flex-1">AI telehealth for concussion care</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/keru" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Keru</h3>
				<p class="text-xs text-dark-grey/60 flex-1">In stealth mode</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/krea" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">KREA</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Adobe for the AI era</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/lemurian" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Lemurian Labs</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Universal compiler and runtime for AI</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/logical-intelligence" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Logical Intelligence</h3>
				<p class="text-xs text-dark-grey/60 flex-1">AI for formal verification</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/lynq" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Lynq</h3>
				<p class="text-xs text-dark-grey/60 flex-1">AI-powered assistants for SMBs</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/northflank" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Northflank</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Self-service PaaS on Kubernetes</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/ona" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Ona</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Mission control for software agents</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/openmind" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">OpenMind</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Decentralized embodied intelligence</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/orbit" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Orbit Engineering</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Non-invasive BCI via vestibular stim</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/orchid" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Orchid</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Whole genome screening for IVF</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/oxen" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Oxen</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Git for ML datasets</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/principia" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Principia Labs</h3>
				<p class="text-xs text-dark-grey/60 flex-1">AI for mathematical discovery</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/resonate" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Resonate</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Distributed async await for cloud</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/select-star" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Select Star</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Automated data catalog for AI</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/spectral" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Spectral Labs</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Generative model for structured CAD</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/storyteller" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Storyteller</h3>
				<p class="text-xs text-dark-grey/60 flex-1">AI voice synthesis for video</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/tau" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Tau Robotics</h3>
				<p class="text-xs text-dark-grey/60 flex-1">General-purpose AI for robotic arms</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/ulysses" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Ulysses</h3>
				<p class="text-xs text-dark-grey/60 flex-1">AUVs for ocean restoration</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/vidoc" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Vidoc Security</h3>
				<p class="text-xs text-dark-grey/60 flex-1">AI Security Engineer</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/wired-labs" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Wired Labs</h3>
				<p class="text-xs text-dark-grey/60 flex-1">In stealth mode</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>

			<a href="/portfolio/zeromatter" class="flex items-center gap-6 py-5 group transition-all duration-200 hover:duration-0 hover:bg-dark-grey/5 -mx-4 px-4">
				<h3 class="font-sans font-semibold text-dark-grey w-40 flex-shrink-0 group-hover:text-dark-grey/80">Zeromatter</h3>
				<p class="text-xs text-dark-grey/60 flex-1">Simulation for autonomous systems</p>
				<span class="font-mono text-[10px] text-dark-grey/40 w-20 text-right">Seed</span>
				<span class="text-dark-grey/30 group-hover:text-dark-grey/60 transition-colors">→</span>
			</a>
		</div>
	</section>
</div>
