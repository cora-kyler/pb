<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Kernel bugs hide for 2 years on average. Some hide for 20. | Pebblebed Ventures</title>
</svelte:head>

<Header />

<article class="max-w-[900px] mx-auto px-24 py-16">
	<a href="/writing" class="font-mono text-xs text-pink hover:underline transition-colors mb-8 inline-block">← All writing</a>
	<header class="mb-10">
		<h1 class="font-sans text-2xl font-semibold text-dark-grey mb-2">Kernel bugs hide for 2 years on average. Some hide for 20.</h1>
		<p class="text-sm text-dark-grey/70">January 7, 2026 · by Jenny Guanni Qu <span class="text-dark-grey/50">(jenny@pebblebed.com)</span></p>
	</header>

	<div class="text-sm leading-[1.4em] text-dark-grey space-y-[1.5em]">
		<p>There are bugs in your kernel right now that won't be found for years. I know because I analyzed 125,183 of them, every bug with a traceable <code><span class="highlight-pink">Fixes:</span></code> tag in the Linux kernel's 20-year git history.</p>

		<p>The average kernel bug lives <span class="mono-semibold">2.1 years</span> before discovery. But some subsystems are far worse: CAN bus drivers average <span class="mono-semibold">4.2 years</span>, SCTP networking <span class="mono-semibold">4.0 years.</span> The longest-lived bug in my dataset, a buffer overflow in ethtool, sat in the kernel for <span class="mono-semibold">20.7 years.</span> The one which I'll dissect in detail is refcount leak in netfilter, and it lasted <span class="mono-semibold">19 years.</span></p>

		<p>I built a tool that catches 92% of historical bugs in a held-out test set at commit time. Here's what I learned.</p>

		<div class="overflow-x-auto">
			<div class="bg-dark-grey text-off-white rounded-t-lg">
				<div class="p-3 text-left font-semibold">Key findings at a glance</div>
			</div>
			<div class="border border-dark-grey/10 border-t-0 rounded-b-lg overflow-hidden bg-off-white">
				<table class="w-full text-xs border-collapse">
					<tbody>
						<tr class="border-b border-dark-grey/10 bg-light-grey/30">
							<td class="p-3 w-32 font-semibold">125,183</td>
							<td class="p-3">Bug-fix pairs with traceable <span class="highlight-pink">Fixes:</span> tags</td>
						</tr>
						<tr class="border-b border-dark-grey/10">
							<td class="p-3 font-semibold">123,696</td>
							<td class="p-3">Valid records after filtering (0 &lt; lifetime &lt; 27 years)</td>
						</tr>
						<tr class="border-b border-dark-grey/10 bg-light-grey/30">
							<td class="p-3 font-semibold">2.1 years</td>
							<td class="p-3">Average time a bug hides before discovery</td>
						</tr>
						<tr class="border-b border-dark-grey/10">
							<td class="p-3 font-semibold">20.7 years</td>
							<td class="p-3">Longest-lived bug (ethtool buffer overflow)</td>
						</tr>
						<tr class="border-b border-dark-grey/10 bg-light-grey/30">
							<td class="p-3 font-semibold">0% → 69%</td>
							<td class="p-3">Bugs found within 1 year (2010 vs 2022)</td>
						</tr>
						<tr class="bg-light-grey/30">
							<td class="p-3 font-semibold">92.2%</td>
							<td class="p-3">Recall of VulnBERT on held-out 2024 test set</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<h2 class="font-sans text-[20px] font-semibold text-dark-grey mt-10 mb-4">The initial discovery</h2>
		<p>I started by mining the most recent 10,000 commits with <code><span class="highlight-pink">Fixes:</span></code> tags from the Linux kernel. After filtering out invalid references (commits that pointed to hashes outside the repo, malformed tags, or merge commits), I had <strong>9,876 valid vulnerability records</strong>. For the lifetime analysis, I excluded 27 same-day fixes (bugs introduced and fixed within hours), leaving <strong>9,849 bugs</strong> with meaningful lifetimes.</p>

		<p>The results were striking:</p>

		<div class="overflow-x-auto">
			<div class="bg-dark-grey text-off-white rounded-t-lg">
				<table class="w-full text-xs border-collapse">
					<colgroup>
						<col class="w-48" />
						<col />
					</colgroup>
					<thead>
						<tr>
							<th class="p-3 text-left font-semibold">Metric</th>
							<th class="p-3 text-left font-semibold">Value</th>
						</tr>
					</thead>
				</table>
			</div>
			<div class="border border-dark-grey/10 border-t-0 rounded-b-lg overflow-hidden bg-off-white">
				<table class="w-full text-xs border-collapse">
					<colgroup>
						<col class="w-48" />
						<col />
					</colgroup>
					<tbody>
						<tr class="border-b border-dark-grey/10 bg-light-grey/30">
							<td class="p-3 w-48">Bugs analyzed</td>
							<td class="p-3 font-semibold">9,876</td>
						</tr>
						<tr class="border-b border-dark-grey/10">
							<td class="p-3">Average lifetime</td>
							<td class="p-3 font-semibold">2.8 years</td>
						</tr>
						<tr class="border-b border-dark-grey/10 bg-light-grey/30">
							<td class="p-3">Median lifetime</td>
							<td class="p-3 font-semibold">1.0 year</td>
						</tr>
						<tr>
							<td class="p-3">Maximum</td>
							<td class="p-3 font-semibold">20.7 years</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<p>Almost 20% of bugs had been hiding for 5+ years. The networking subsystem looked particularly bad at 5.1 years average. I found a refcount leak in netfilter that had been in the kernel for 19 years.</p>
		<p class="text-xs text-dark-grey/60 italic">Initial Bug Lifetime Distribution — Initial findings: Half of bugs found within a year, but 20% hide for 5+ years.</p>

		<p>But something nagged at me: my dataset only contained fixes from 2025. Was I seeing the full picture, or just the tip of the iceberg?</p>

		<h2 class="font-sans text-[20px] font-semibold text-dark-grey mt-10 mb-4">Going deeper: Mining the full history</h2>
		<p>I rewrote my miner to capture <strong>every</strong> <code><span class="highlight-pink">Fixes:</span></code> tag since Linux moved to git in 2005. Six hours later, I had 125,183 vulnerability records which was 12x larger than my initial dataset.</p>

		<p>The numbers changed significantly:</p>

		<div class="overflow-x-auto">
			<div class="bg-dark-grey text-off-white rounded-t-lg">
				<table class="w-full text-xs border-collapse table-fixed">
					<colgroup>
						<col class="w-48" />
						<col class="w-32" />
						<col class="w-40" />
					</colgroup>
					<thead>
						<tr>
							<th class="p-3 text-left font-semibold whitespace-normal">Metric</th>
							<th class="p-3 text-left font-semibold whitespace-normal">2025 Only</th>
							<th class="p-3 text-left font-semibold whitespace-normal">Full History (2005-2025)</th>
						</tr>
					</thead>
				</table>
			</div>
			<div class="border border-dark-grey/10 border-t-0 rounded-b-lg overflow-hidden bg-off-white">
				<table class="w-full text-xs border-collapse table-fixed">
					<colgroup>
						<col class="w-48" />
						<col class="w-32" />
						<col class="w-40" />
					</colgroup>
					<tbody>
						<tr class="border-b border-dark-grey/10 bg-light-grey/30">
							<td class="p-3 text-left">Bugs analyzed</td>
							<td class="p-3 font-semibold text-left">9,876</td>
							<td class="p-3 font-semibold text-left">125,183</td>
						</tr>
						<tr class="border-b border-dark-grey/10">
							<td class="p-3 text-left">Average lifetime</td>
							<td class="p-3 font-semibold text-left">2.8 years</td>
							<td class="p-3 font-semibold text-left">2.1 years</td>
						</tr>
						<tr class="border-b border-dark-grey/10 bg-light-grey/30">
							<td class="p-3 text-left">Median lifetime</td>
							<td class="p-3 font-semibold text-left">1.0 year</td>
							<td class="p-3 font-semibold text-left">0.7 years</td>
						</tr>
						<tr class="border-b border-dark-grey/10">
							<td class="p-3 text-left">5+ year bugs</td>
							<td class="p-3 font-semibold text-left">19.4%</td>
							<td class="p-3 font-semibold text-left">13.5%</td>
						</tr>
						<tr class="bg-light-grey/30">
							<td class="p-3 text-left">10+ year bugs</td>
							<td class="p-3 font-semibold text-left">6.6%</td>
							<td class="p-3 font-semibold text-left">4.2%</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<p class="text-xs text-dark-grey/60 italic">Full history: 57% of bugs found within a year. The long tail is smaller than it first appeared.</p>

		<p><strong>Why the difference?</strong> My initial 2025-only dataset was biased. Fixes in 2025 include:</p>
		<ul class="list-disc pl-5 space-y-2">
			<li><strong>New bugs</strong> introduced recently and caught quickly</li>
			<li><strong>Ancient bugs</strong> that finally got discovered after years of hiding</li>
		</ul>

		<p>The ancient bugs skewed the average upward. When you include the full history with all the bugs that were introduced AND fixed within the same year, the average drops from 2.8 to 2.1 years.</p>

		<h2 class="font-sans text-[20px] font-semibold text-dark-grey mt-10 mb-4">The real story: We're getting faster (but it's complicated)</h2>
		<p>The most striking finding from the full dataset: <strong>bugs introduced in recent years appear to get fixed much faster.</strong></p>

		<div class="overflow-x-auto">
			<div class="bg-dark-grey text-off-white rounded-t-lg">
				<table class="w-full text-xs border-collapse table-fixed">
					<colgroup>
						<col class="w-32" />
						<col class="w-32" />
						<col class="w-40" />
						<col />
					</colgroup>
					<thead>
						<tr>
							<th class="p-3 text-left font-semibold">Year Introduced</th>
							<th class="p-3 text-left font-semibold">Bugs</th>
							<th class="p-3 text-left font-semibold">Avg Lifetime</th>
							<th class="p-3 text-left font-semibold">% Found &lt;1yr</th>
						</tr>
					</thead>
				</table>
			</div>
			<div class="border border-dark-grey/10 border-t-0 rounded-b-lg overflow-hidden bg-off-white">
				<table class="w-full text-xs border-collapse table-fixed">
					<colgroup>
						<col class="w-32" />
						<col class="w-32" />
						<col class="w-40" />
						<col />
					</colgroup>
					<tbody>
						<tr class="border-b border-dark-grey/10 bg-light-grey/30">
							<td class="p-3">2010</td>
							<td class="p-3 font-semibold">1,033</td>
							<td class="p-3 font-semibold">9.9 years</td>
							<td class="p-3 font-semibold">0%</td>
						</tr>
						<tr class="border-b border-dark-grey/10">
							<td class="p-3">2014</td>
							<td class="p-3 font-semibold">3,991</td>
							<td class="p-3 font-semibold">3.9 years</td>
							<td class="p-3 font-semibold">31%</td>
						</tr>
						<tr class="border-b border-dark-grey/10 bg-light-grey/30">
							<td class="p-3">2018</td>
							<td class="p-3 font-semibold">11,334</td>
							<td class="p-3 font-semibold">1.7 years</td>
							<td class="p-3 font-semibold">54%</td>
						</tr>
						<tr>
							<td class="p-3">2022</td>
							<td class="p-3 font-semibold">11,090</td>
							<td class="p-3 font-semibold">0.8 years</td>
							<td class="p-3 font-semibold">69%</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<p>Bugs introduced in 2010 took nearly 10 years to find and bugs introduced in 2024 are found in 5 months. At first glance it looks like a 20x improvement!</p>

		<p>But here's the catch: <strong>this data is right-censored.</strong> Bugs introduced in 2022 <em>can't</em> have a 10-year lifetime yet since we're only in 2026. We might find more 2022 bugs in 2030 that bring the average up.</p>

		<p>The fairer comparison is "% found within 1 year" and that IS improving: from 0% (2010) to 69% (2022). That's real progress, likely driven by:</p>
		<ul class="list-disc pl-5 space-y-2">
			<li>Syzkaller (released 2015)</li>
			<li>KASAN, KMSAN, KCSAN sanitizers</li>
			<li>Better static analysis</li>
			<li>More contributors reviewing code</li>
		</ul>

		<p><strong>But there's a backlog.</strong> When I look at just the bugs fixed in 2024-2025:</p>
		<ul class="list-disc pl-5 space-y-2">
			<li>60% were introduced in the last 2 years (new bugs, caught quickly)</li>
			<li>18% were introduced 5-10 years ago</li>
			<li><strong>6.5% were introduced 10+ years ago</strong></li>
		</ul>

		<p>We're simultaneously catching new bugs faster AND slowly working through ~5,400 ancient bugs that have been hiding for over 5 years.</p>


		<h2 class="font-sans text-[20px] font-semibold text-dark-grey mt-10 mb-4">TL;DR</h2>
		<ul class="list-disc pl-5 space-y-2">
			<li><strong>125,183 bugs</strong> analyzed from 20 years of Linux kernel git history (123,696 with valid lifetimes)</li>
			<li><strong>Average bug lifetime:</strong> 2.1 years (2.8 years in 2025-only data due to survivorship bias in recent fixes)</li>
			<li><strong>0% → 69%</strong> of bugs found within 1 year (2010 vs 2022) (real improvement from better tooling)</li>
			<li><strong>13.5% of bugs hide for 5+ years</strong> (these are the dangerous ones)</li>
			<li>Race conditions hide longest (5.1 years average)</li>
			<li><strong>VulnBERT catches 92.2%</strong> of bugs on held-out 2024 test set with only 1.2% FPR (98.4% AUC)</li>
			<li>Dataset: <a href="https://github.com/quguanni/kernel-vuln-data" class="text-pink hover:underline" target="_blank" rel="noopener noreferrer">github.com/quguanni/kernel-vuln-data</a></li>
		</ul>

		<p><em>If you're working on kernel security, vulnerability detection, or ML for code analysis, I'd love to talk: jenny@pebblebed.com</em></p>
	</div>
</article>
