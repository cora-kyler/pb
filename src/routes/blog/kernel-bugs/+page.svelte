<script lang="ts">
	import BlogLayout from '$lib/components/BlogLayout.svelte';
	import BlogChart from '$lib/components/BlogChart.svelte';
</script>

<BlogLayout
	title="Kernel bugs hide for 2 years on average. Some hide for 20."
	date="January 7, 2026"
	author="Jenny Guanni Qu"
	email="jenny@pebblebed.com"
	shoutout="If you're working on kernel security, vulnerability detection, or ML for code analysis, I'd love to talk: jenny@pebblebed.com"
>
	<p>There are bugs in your kernel right now that won't be found for years. I know because I analyzed 125,183 of them, every bug with a traceable <span class="tag">Fixes:</span> tag in the Linux kernel's 20-year git history.</p>

	<p>The average kernel bug lives <span class="mono-semibold">2.1 years</span> before discovery. But some subsystems are far worse: CAN bus drivers average <span class="mono-semibold">4.2 years</span>, SCTP networking <span class="mono-semibold">4.0 years.</span> The longest-lived bug in my dataset, a buffer overflow in ethtool, sat in the kernel for <span class="mono-semibold">20.7 years.</span> The one which I'll dissect in detail is refcount leak in netfilter, and it lasted <span class="mono-semibold">19 years.</span></p>

	<p>I built a tool that catches 92% of historical bugs in a held-out test set at commit time. Here's what I learned.</p>

	<BlogChart
		title="Key findings at a glance"
		rows={[
			{ cells: ['125,183', 'Bug-fix pairs with traceable <span class="tag">Fixes:</span> tags'], bold: [0] },
			{ cells: ['123,696', 'Valid records after filtering (0 &lt; lifetime &lt; 27 years)'], bold: [0] },
			{ cells: ['2.1 years', 'Average time a bug hides before discovery'], bold: [0] },
			{ cells: ['20.7 years', 'Longest-lived bug (ethtool buffer overflow)'], bold: [0] },
			{ cells: ['0% → 69%', 'Bugs found within 1 year (2010 vs 2022)'], bold: [0] },
			{ cells: ['92.2%', 'Recall of VulnBERT on held-out 2024 test set'], bold: [0] }
		]}
	/>

	<h2 class="blog-h2">The initial discovery</h2>
	<p>I started by mining the most recent 10,000 commits with <span class="tag">Fixes:</span> tags from the Linux kernel. After filtering out invalid references (commits that pointed to hashes outside the repo, malformed tags, or merge commits), I had <strong>9,876 valid vulnerability records</strong>. For the lifetime analysis, I excluded 27 same-day fixes (bugs introduced and fixed within hours), leaving <strong>9,849 bugs</strong> with meaningful lifetimes.</p>

	<p>The results were striking:</p>

	<BlogChart
		headers={['Metric', 'Value']}
		columnWidths={['w-48', '']}
		rows={[
			{ cells: ['Bugs analyzed', '9,876'], bold: [1] },
			{ cells: ['Average lifetime', '2.8 years'], bold: [1] },
			{ cells: ['Median lifetime', '1.0 year'], bold: [1] },
			{ cells: ['Maximum', '20.7 years'], bold: [1] }
		]}
	/>

	<p>Almost 20% of bugs had been hiding for 5+ years. The networking subsystem looked particularly bad at 5.1 years average. I found a refcount leak in netfilter that had been in the kernel for 19 years.</p>
	<p class="text-xs text-dark-grey/60 italic">Initial Bug Lifetime Distribution — Initial findings: Half of bugs found within a year, but 20% hide for 5+ years.</p>

	<p>But something nagged at me: my dataset only contained fixes from 2025. Was I seeing the full picture, or just the tip of the iceberg?</p>

	<h2 class="blog-h2">Going deeper: Mining the full history</h2>
	<p>I rewrote my miner to capture <strong>every</strong> <span class="tag">Fixes:</span> tag since Linux moved to git in 2005. Six hours later, I had 125,183 vulnerability records which was 12x larger than my initial dataset.</p>

	<p>The numbers changed significantly:</p>

	<BlogChart
		headers={['Metric', '2025 Only', 'Full History (2005-2025)']}
		columnWidths={['w-48', 'w-32', 'w-40']}
		rows={[
			{ cells: ['Bugs analyzed', '9,876', '125,183'], bold: [1, 2] },
			{ cells: ['Average lifetime', '2.8 years', '2.1 years'], bold: [1, 2] },
			{ cells: ['Median lifetime', '1.0 year', '0.7 years'], bold: [1, 2] },
			{ cells: ['5+ year bugs', '19.4%', '13.5%'], bold: [1, 2] },
			{ cells: ['10+ year bugs', '6.6%', '4.2%'], bold: [1, 2] }
		]}
	/>

	<p class="text-xs text-dark-grey/60 italic">Full history: 57% of bugs found within a year. The long tail is smaller than it first appeared.</p>

	<p><strong>Why the difference?</strong> My initial 2025-only dataset was biased. Fixes in 2025 include:</p>
	<ul class="list-disc pl-5 space-y-2">
		<li><strong>New bugs</strong> introduced recently and caught quickly</li>
		<li><strong>Ancient bugs</strong> that finally got discovered after years of hiding</li>
	</ul>

	<p>The ancient bugs skewed the average upward. When you include the full history with all the bugs that were introduced AND fixed within the same year, the average drops from 2.8 to 2.1 years.</p>

	<h2 class="blog-h2">The real story: We're getting faster (but it's complicated)</h2>
	<p>The most striking finding from the full dataset: <strong>bugs introduced in recent years appear to get fixed much faster.</strong></p>

	<BlogChart
		headers={['Year Introduced', 'Bugs', 'Avg Lifetime', '% Found <1yr']}
		columnWidths={['w-32', 'w-32', 'w-40', '']}
		rows={[
			{ cells: ['2010', '1,033', '9.9 years', '0%'], bold: [1, 2, 3] },
			{ cells: ['2014', '3,991', '3.9 years', '31%'], bold: [1, 2, 3] },
			{ cells: ['2018', '11,334', '1.7 years', '54%'], bold: [1, 2, 3] },
			{ cells: ['2022', '11,090', '0.8 years', '69%'], bold: [1, 2, 3] }
		]}
	/>

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

	<h2 class="blog-h2">TL;DR</h2>
	<ul class="list-disc pl-5 space-y-2">
		<li><strong>125,183 bugs</strong> analyzed from 20 years of Linux kernel git history (123,696 with valid lifetimes)</li>
		<li><strong>Average bug lifetime:</strong> 2.1 years (2.8 years in 2025-only data due to survivorship bias in recent fixes)</li>
		<li><strong>0% → 69%</strong> of bugs found within 1 year (2010 vs 2022) (real improvement from better tooling)</li>
		<li><strong>13.5% of bugs hide for 5+ years</strong> (these are the dangerous ones)</li>
		<li>Race conditions hide longest (5.1 years average)</li>
		<li><strong>VulnBERT catches 92.2%</strong> of bugs on held-out 2024 test set with only 1.2% FPR (98.4% AUC)</li>
		<li>Dataset: <a href="https://github.com/quguanni/kernel-vuln-data" target="_blank" rel="noopener noreferrer">github.com/quguanni/kernel-vuln-data</a></li>
	</ul>

</BlogLayout>
