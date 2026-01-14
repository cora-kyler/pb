export interface Founder {
	name: string;
	link?: string;
}

export interface NewsItem {
	title: string;
	source: string;
	date: string;
	url: string;
}

export interface Company {
	slug: string;
	name: string;
	tagline: string;
	logo: string;
	description: string;
	website: string;
	founders: Founder[];
	news?: NewsItem[];
}

// Ordered by stage / vibe.. obviously change the order here as you please :)
const companyOrder = [
	
    'augment',
    'orchid',
	'krea',
	'zeromatter',
    'openmind',
	'lemurian',
    'logical-intelligence',
    'spectral',
    'ona',
	'northflank',
    'elliptic-ai',
    'select-star',
    'adaptive-computer',
	'dylibso',
	'datalab',
    'oxen',
    'ulysses',
	'orbit',
	'lynq',
    'anomaly-bio',
	'vidoc',
	'cedana',
	'principia',
	'aneta',
	'build',
	'headquarters-health',
    'keru',
	'resonate',
	'storyteller',
	'tau',
	'wired-labs',
];

export const companies: Record<string, Company> = {
	'select-star': {
		slug: 'select-star',
		name: 'Select Star',
		tagline: 'Automated data catalog for AI',
		logo: '',
		description: 'Select Star is a modern data governance platform that provides an automated data catalog and discovery solution for making data AI-ready. The platform automatically catalogs and documents database tables and BI dashboards, connects to data warehouses and BI tools to gather metadata and activity logs, and offers features such as Google-like search, data dictionaries, business glossaries, popularity metrics, lineage tracking, and entity relationships in a unified interface.',
		website: 'https://selectstar.com',
		founders: [{ name: 'Shinji Kim', link: 'https://www.linkedin.com/in/shinjikim/' }]
	},
	'elliptic-ai': {
		slug: 'elliptic-ai',
		name: 'Elliptic',
		tagline: 'AI Tools to amplify data scientists',
		logo: '',
		description: 'Elliptic is revolutionizing how businesses amplify domain expertise through AI. The company is building AI tools that enable businesses to leverage their specialized knowledge more effectively.\n\nFunded by FirstRound, Pebblebed, Afore, Stripe, Slack and others.',
		website: 'https://elliptic.ai',
		founders: [{ name: 'Christian Griset', link: 'https://www.linkedin.com/in/christian-griset-6b662749/' }]
	},
	'augment': {
		slug: 'augment',
		name: 'Augment',
		tagline: 'Enterprise AI coding assistant',
		logo: '/portfolioimages/augment.svg',
		description: 'AugmentCode (Augment) is building an enterprise AI coding assistant designed for large software teams working on millions of lines of code. The company focuses on on-premise deployments for organizations that require code to stay within their infrastructure.\n\nFounded in 2022, the platform has demonstrated >40% increase in developer productivity for enterprise customers.\n\nRaised $252M at $977M valuation. Selected Claude on Google Cloud\'s Vertex AI for their platform after extensive model testing.',
		website: 'https://augmentcode.com',
		founders: [
			{ name: 'Igor Ostrovsky', link: 'https://www.linkedin.com/in/igoro/' },
			{ name: 'Guy Gur-Ari', link: 'https://www.linkedin.com/in/guy-gur-ari/' }
		]
	},
	'krea': {
		slug: 'krea',
		name: 'KREA',
		tagline: 'Adobe for the AI era',
		logo: '/portfolioimages/krea.svg',
		description: 'KREA provides a unified AI platform for creatives, integrating tooling from multiple AI models with a custom interface that makes queries and subsequent edits significantly easier and more customizable. Founded in March 2022, the company aims to be "Adobe for the AI era."\n\nIn the last 14 months, KREA rolled out over 50 major product updates, grew to over 20 million users organically, and 20x\'d their revenue—all with a team of 8 working from San Francisco.',
		website: 'https://krea.ai',
		founders: [
			{ name: 'Victor Perez', link: 'https://www.linkedin.com/in/iamvictorperez/' },
			{ name: 'Diego Rodriguez', link: 'https://www.linkedin.com/in/asciidiego/' }
		],
		news: [
			{
				title: 'Krea raises $83M to be the one-stop shop for GenAI creatives',
				source: 'TechCrunch',
				date: 'April 7, 2025',
				url: 'https://techcrunch.com/2025/04/07/kreas-founders-snubbed-postgrad-grants-from-the-king-of-spain-to-build-their-ai-startup-now-its-valued-at-500m/'
			}
		]
	},
	'ona': {
		slug: 'ona',
		name: 'Ona',
		tagline: 'Mission control for software agents',
		logo: '',
		description: 'Ona (formerly Gitpod) is mission control for software projects and software engineering agents. Originally founded in July 2017 as Gitpod, the company rebranded to Ona in September 2025 to reflect its evolution from cloud development environments to an AI-powered platform for software development.\n\nOna provides an AI agent platform where developers work alongside autonomous software engineering agents across the entire software development lifecycle. Within Ona\'s own engineering organization, agents co-author 60% of PRs merged and contribute 72% of lines of code.\n\nThe company grew Gitpod to 2 million developers using cloud development environments with native integrations for GitLab, GitHub, and Bitbucket.',
		website: 'https://ona.com',
		founders: [
			{ name: 'Johannes Landgraf', link: 'https://www.linkedin.com/in/johanneslandgraf' },
			{ name: 'Sven Efftinge', link: 'https://de.linkedin.com/in/efftinge' },
			{ name: 'Moritz Eysholdt' },
			{ name: 'Dr. Jan Koehnlein', link: 'https://de.linkedin.com/in/dr-jan-k%C3%B6hnlein-7895038' }
		]
	},
	'zeromatter': {
		slug: 'zeromatter',
		name: 'Zeromatter',
		tagline: 'Simulation for autonomous systems',
		logo: '/portfolioimages/zeromatter.svg',
		description: 'Zeromatter provides a unified platform to build, test, and train autonomous systems through high-fidelity simulation. The platform offers high-performance sensor simulation, automatic environment generation, multi-agent co-simulation frameworks, execution infrastructure, and comprehensive tooling for simulation workflows.\n\nFounded in 2021 and based in Mountain View, CA, Zeromatter was started by Ian Glow, who worked for years on Autopilot driver assistance software at Tesla.\n\nRaised $45M led by Two Sigma Ventures. The company has 48 employees.',
		website: 'https://zeromatter.com',
		founders: [{ name: 'Ian Glow', link: 'https://www.linkedin.com/in/ianglow/' }]
	},
	'spectral': {
		slug: 'spectral',
		name: 'Spectral Labs',
		tagline: 'Generative model for structured CAD',
		logo: '',
		description: 'Spectral Labs created SGS-1, the first generative model for structured CAD. SGS-1 is a foundation model that generates fully manufacturable and parametric 3D geometry, producing CAD B-Rep parts in STEP format for engineering use cases.\n\nSGS-1 capabilities include creating new parametric geometry within assembly contexts, transforming sketches and drawings into 3D CAD files, and converting scans, STL files, or mesh files to parametric STEP files—automating reverse engineering workflows.\n\nThe model is available on Hugging Face and can generate 3D CAD models from images.',
		website: 'https://spectrallabs.ai',
		founders: [
			{ name: 'Pranav Parthasarathy', link: 'https://www.linkedin.com/in/pranav-parthasarathy-82674811b/' },
			{ name: 'Rahul Iyer', link: 'https://www.linkedin.com/in/rahul8iyer/' }
		]
	},
	'lemurian': {
		slug: 'lemurian',
		name: 'Lemurian Labs',
		tagline: 'Universal compiler and runtime for AI',
		logo: '/portfolioimages/lemurian.svg',
		description: 'Lemurian Labs is building the software foundation for the autonomy economy, solving the single biggest constraint on AI progress by creating a universal software layer that makes every chip, in every configuration, in every cloud, at every scale, usable as if it were one machine.\n\nThe company addresses a critical problem: AI is trapped behind walls of proprietary hardware and fragmented software. Lemurian\'s breakthrough lies in a first principles rethink of compilers and runtimes that makes heterogeneous systems feel like one seamless machine.\n\nDevelopers write code once and it runs anywhere—faster, cheaper, and without lock-in—while simplifying workflows and delivering 2-30x performance gains.',
		website: 'https://lemurianlabs.com',
		founders: [
			{ name: 'Jay Dawani' },
			{ name: 'Vassil Dimitrov' },
			{ name: 'Chris Vick' }
		]
	},
	'northflank': {
		slug: 'northflank',
		name: 'Northflank',
		tagline: 'Self-service PaaS on Kubernetes',
		logo: '',
		description: 'Northflank is a self-service Platform as a Service (PaaS) built on Kubernetes that enables developers to deploy any project in seconds, either in Northflank\'s cloud or the customer\'s own cloud infrastructure (BYOC). The platform provides a powerful abstraction layer over Kubernetes, delivering a PaaS-like deployment experience for developers while giving platform engineers full control of underlying infrastructure.\n\nThe platform empowers tens of thousands of developers to deploy production workloads across more than six cloud providers, handling over 10 billion public egress requests monthly and orchestrating more than 1.3 million container deployments per month.\n\nNotable customers include NFL.com, Sentry, Writer, and Chai Discovery.',
		website: 'https://northflank.com',
		founders: [
			{ name: 'Will Stewart', link: 'https://www.linkedin.com/in/william-j-stewart/' },
			{ name: 'Frederik Brix' }
		]
	},
	'openmind': {
		slug: 'openmind',
		name: 'OpenMind',
		tagline: 'Decentralized embodied intelligence',
		logo: '/portfolioimages/openmind.svg',
		description: 'OpenMind is building OM1, an open-source, AI-native software stack that enables robots to think, learn, and coordinate with each other. The platform is hardware-agnostic, running across quadrupeds, humanoids, wheeled robots, and drones.\n\nThe key innovation is FABRIC protocol, a decentralized system that allows robots to verify identity, share context, and coordinate autonomously with other robots—creating a network of embodied intelligence that grows more capable as more robots join.\n\nRaised $20M led by Pantera Capital, with participation from Ribbit, Coinbase Ventures, and Pebblebed.',
		website: 'https://openmind.org',
		founders: [{ name: 'Jan Liphardt', link: 'https://www.linkedin.com/in/jan-liphardt/' }]
	},
	'orchid': {
		slug: 'orchid',
		name: 'Orchid',
		tagline: 'Whole genome screening for IVF',
		logo: '/portfolioimages/orchid.svg',
		description: 'Orchid is a reproductive technology company offering the world\'s first whole genome report for embryos during IVF. The test can identify birth defects, neurodevelopmental disorders, chromosomal abnormalities, and pediatric and adult-onset cancers before a pregnancy begins.\n\nOrchid\'s 30x whole genome reports sequence over 99% of an embryo\'s genome (compared to existing options that sequence less than 1%), using the same 4-6 cells required for traditional embryo screening. The platform screens for variants linked to more than 1,200 monogenic disorders and assesses polygenic disease risks.',
		website: 'https://orchidhealth.com',
		founders: [{ name: 'Noor Siddiqui', link: 'https://www.linkedin.com/in/noorsiddiqui/' }],
		news: [
			{
				title: 'Should human life be optimized?',
				source: 'The New York Times',
				date: 'April 1, 2025',
				url: 'https://www.nytimes.com/interactive/2025/04/01/opinion/ivf-gene-selection-fertility.html'
			},
			{
				title: 'How Much Should You Know About Your Child Before He\'s Born?',
				source: 'The New Yorker',
				date: 'April 28, 2025',
				url: 'https://www.newyorker.com/magazine/2025/04/28/how-much-should-you-know-about-your-child-before-hes-born'
			}
		]
	},
	'lynq': {
		slug: 'lynq',
		name: 'Lynq',
		tagline: 'AI-powered assistants for SMBs',
		logo: '',
		description: 'Lynq.ai provides AI-powered assistants that automate routine tasks for fund managers and analysts through intelligent workflows. The platform specializes in custom AI-powered workflows and search functionalities tailored to the finance industry, particularly venture capital firms. The company also offers AI agents for SMBs, built to run operations 24/7. Raised $2M in funding and launched beta platform for VC firms.',
		website: 'https://lynq.ai',
		founders: [{ name: 'Paul Sheridan', link: 'https://ie.linkedin.com/in/paulfsheridan' }]
	},
	'keru': {
		slug: 'keru',
		name: 'Keru',
		tagline: 'In stealth mode',
		logo: '',
		description: 'In stealth mode.',
		website: 'https://keru.ai',
		founders: [
			{ name: 'Vinoo Ganesh', link: 'https://www.linkedin.com/in/vinoo-ganesh' },
			{ name: 'John McRaven', link: 'https://www.linkedin.com/in/john-mcraven-1188324b/' }
		]
	},
	'adaptive-computer': {
		slug: 'adaptive-computer',
		name: 'Adaptive Computer',
		tagline: 'Build apps with natural language',
		logo: '',
		description: 'Adaptive Computer is reimagining personal computer software to enable non-programmers to create full-featured apps simply by entering text prompts. The platform, called AC1, enables anyone with no programming skills to build robust web applications using natural language commands—no API keys, no configurations, no technical understanding required.\n\nAdaptive competes in the "vibe coding" space but is specifically designed for non-programmers from the ground up.\n\nRaised $7M seed round led by Pebblebed, with participation from Conviction, Weekend Fund, Anti Fund (Jake Paul), and Roblox CEO Dave Baszucki.',
		website: 'https://adaptive.ai',
		founders: [
			{ name: 'Dennis Xu', link: 'https://www.linkedin.com/in/xudennis' },
			{ name: 'Mike Soylu' }
		]
	},
	'oxen': {
		slug: 'oxen',
		name: 'Oxen',
		tagline: 'Git for ML datasets',
		logo: '',
		description: 'Oxen is a lightning-fast data version control system for structured and unstructured machine learning datasets that aims to make versioning datasets as easy as versioning code. The platform is built to track and store changes for everything from a single CSV to data repositories with millions of unstructured images, videos, audio, or text files.\n\nOxen\'s interface mirrors Git but is optimized for ML workflows. Performance benchmarks show Oxen is 40x faster than Git-LFS and 6.5x faster than simple S3 copy operations.\n\nThe platform enables collaboration across ML engineering, data science, product, and legal teams to share, review, and edit data together.',
		website: 'https://oxen.ai',
		founders: [
			{ name: 'Greg Schoeninger', link: 'https://www.linkedin.com/in/greg-schoeninger/' },
			{ name: 'Scott Howard' }
		]
	},
	'dylibso': {
		slug: 'dylibso',
		name: 'Dylibso',
		tagline: 'WebAssembly infrastructure for plugins',
		logo: '',
		description: 'Dylibso builds WebAssembly infrastructure and developer tools that enable plugin systems and user-defined code execution in platforms. Key products include XTP (platform for building plugin systems), Extism (open-source universal plugin system), Chicory (Java-native WebAssembly runtime), and mcp.run (registry of AI tools for the Model Context Protocol).\n\nBusiness partnerships include Axiom, Figma (using Observe SDK), and engagements with WordPress/Automattic, BigCommerce, Confluent, and others.',
		website: 'https://dylibso.com',
		founders: [
			{ name: 'Steve Manuel', link: 'https://www.linkedin.com/in/stevemanuel/' },
			{ name: 'Zach Gray' },
			{ name: 'Benjamin Eckel', link: 'https://www.linkedin.com/in/benjamin-eckel-b025831a3/' }
		]
	},
	'datalab': {
		slug: 'datalab',
		name: 'Datalab',
		tagline: 'Document intelligence for enterprise AI',
		logo: '',
		description: 'Datalab trains specialized AI models for document intelligence, focusing on OCR, layout analysis, and PDF to markdown conversion. The company develops smaller foundation models (100-500M parameters) capable of transforming complex documents into machine-readable structured data at scale, while running on consumer-grade GPUs.\n\nTheir open-source models are state-of-the-art, easy to use, and have been adopted by hundreds of teams and researchers at leading institutions like Anthropic, Harvard, Stanford, and MIT.\n\nRaised $3.5M seed round led by Pebblebed, with participation from Peak XV and angels including Balaji Srinivasan, Jeff Hammerbacher, and founding members of Hugging Face.',
		website: 'https://datalab.to',
		founders: [
			{ name: 'Vik Paruchuri', link: 'https://www.linkedin.com/in/vikparuchuri' },
			{ name: 'Sandy Kwon', link: 'https://www.linkedin.com/in/sandykwon' }
		]
	},
	'vidoc': {
		slug: 'vidoc',
		name: 'Vidoc Security',
		tagline: 'AI Security Engineer',
		logo: '',
		description: 'Vidoc Security Lab is building an AI Security Engineer that matches the speed of AI with the precision of human security engineers. The company detects, validates, and fixes security issues, monitoring organizations from a hacker\'s perspective to catch misconfigurations and vulnerabilities in real-time.\n\nVidoc addresses the security challenges created by AI-generated code.\n\nRaised $2.4M in October 2024 led by Pebblebed and Firestreak Ventures, with participation from XFactor Ventures and 500 Emerging Europe.',
		website: 'https://vidocsecurity.com',
		founders: [
			{ name: 'Klaudia Kloc', link: 'https://www.linkedin.com/in/klaudia-kloc-/' },
			{ name: 'Dawid Moczadło', link: 'https://www.linkedin.com/in/dawid-moczadlo/' }
		]
	},
	'anomaly-bio': {
		slug: 'anomaly-bio',
		name: 'Anomaly Bio',
		tagline: 'In stealth mode',
		logo: '',
		description: 'In stealth mode.',
		website: 'https://anomalybio.com',
		founders: [
			{ name: 'Armaan Dhanda', link: 'https://www.linkedin.com/in/armaandh' },
			{ name: 'Samyak Baid', link: 'https://www.linkedin.com/in/samyak-baid/' }
		]
	},
	'ulysses': {
		slug: 'ulysses',
		name: 'Ulysses',
		tagline: 'AUVs for ocean restoration',
		logo: '',
		description: 'Ulysses Ecosystem Engineering makes "cheap and cheerful" autonomous underwater vehicles that operate across both surface and subsea domains. Founded in 2023, the company is transforming ocean ecosystem restoration with fully autonomous, low-cost maritime robots.\n\nThe company\'s first focus is seagrass restoration—a vital habitat for biodiversity, fisheries, and coastal resilience—and a powerful carbon sink capturing 35 times more carbon than rainforests. Their robots speed up restoration by 100x compared to manual planting by volunteers and at a fraction of the cost of other robots, reducing restoration costs by 10x while making projects 100 times larger and faster.\n\nUlysses raised $2M led by Lowercarbon Capital.',
		website: 'https://ulysses.eco',
		founders: [
			{ name: 'Akhil Voorakkara' },
			{ name: 'Will O\'Brien' },
			{ name: 'Colm O\'Brien' },
			{ name: 'Jamie Wedderburn' }
		]
	},
	'cedana': {
		slug: 'cedana',
		name: 'Cedana',
		tagline: 'VMware for GPUs',
		logo: '',
		description: 'Cedana (YC S23) brings hyperscaler and frontier-lab orchestration capabilities for AI workflows, with GPU live migration as their core capability. Described as "VMware for GPUs," Cedana enables enterprises to orchestrate AI workloads precisely, reliably, and efficiently.\n\nThe company builds live migration and checkpoint/restore infrastructure for GPU-heavy workloads, enabling stateful reliability even through catastrophic GPU failures. Their technology interposes at the Driver API to reliably, transparently, and deterministically capture and restore GPU state for multi-GPU workloads.\n\nPerformance: Increases cost savings up to 80%, accelerates time to first token 2-10x, and restored cold starts are an order of magnitude faster than native cold starts.',
		website: 'https://cedana.ai',
		founders: [
			{ name: 'Neel Master', link: 'https://www.linkedin.com/in/neelmaster1/' },
			{ name: 'Niranjan Ravichandra', link: 'https://www.linkedin.com/in/niranjanravichandra/' }
		]
	},
	'principia': {
		slug: 'principia',
		name: 'Principia Labs',
		tagline: 'AI for mathematical discovery',
		logo: '',
		description: 'Principia Labs has the ambition to build AIs for making new mathematical discoveries, as opposed to scoring well on tests of human virtuosity at applying existing mathematical tools (like the Putnam, etc.). The company focuses on AI systems capable of generating novel mathematical insights rather than just solving known problems.',
		website: 'https://principialabs.org',
		founders: [{ name: 'Harrison (Harry) Sanders' }]
	},
	'aneta': {
		slug: 'aneta',
		name: 'Aneta',
		tagline: 'AI automation for scientific workflows',
		logo: '',
		description: 'Aneta is automating the legacy tools scientists use every day. The company leverages AI capabilities like Claude Computer Use to enable AI systems to interact with and automate scientific workflows, allowing researchers to focus on their work rather than manual tool operation.',
		website: 'https://aneta.company',
		founders: [{ name: 'Yasyf Mohamedali', link: 'https://www.linkedin.com/in/yasyf/' }]
	},
	'build': {
		slug: 'build',
		name: 'Build',
		tagline: 'AI for commercial real estate reports',
		logo: '',
		description: 'Build specializes in high-tech, high-touch development services tailored for mission-critical projects, ensuring reliable and innovative solutions for complex challenges. The company is building an AI agent for commercial real estate report generation.\n\nBased in Chicago, Illinois, Build provides technology solutions for the construction and real estate industries, combining automated report generation with expert development services for complex, mission-critical projects.',
		website: 'https://www.build.inc',
		founders: [
			{ name: 'James Stirrat-Ellis' },
			{ name: 'Ben McClusky' }
		]
	},
	'headquarters-health': {
		slug: 'headquarters-health',
		name: 'Headquarters Health',
		tagline: 'AI telehealth for concussion care',
		logo: '',
		description: 'Headquarters Health improves concussion care through AI-assisted telehealth. The company addresses the compliance burden faced by all youth sports sponsors in the US, including every high school, which are required to provide better return-to-play protocols than "go home and sleep it off" after youth traumatic brain injuries (TBIs).\n\nHeadquarters Health provides AI-powered telehealth services that enable youth sports organizations to meet their compliance obligations while ensuring proper medical assessment and care for student athletes who experience concussions. Based in San Francisco, the company focuses on improving outcomes for young athletes.',
		website: 'https://headquarters.health',
		founders: [
			{ name: 'Orestis Skoutellas', link: 'https://www.linkedin.com/in/orestisskoutellas/' },
			{ name: 'Lucas Johnston', link: 'https://www.linkedin.com/in/lucas-johnston1/' }
		]
	},
	'logical-intelligence': {
		slug: 'logical-intelligence',
		name: 'Logical Intelligence',
		tagline: 'AI for formal verification',
		logo: '/portfolioimages/logicalintelligence.png',
		description: 'Logical Intelligence is a fundamental AI research organization that uses new techniques in reasoning to make theorem-provers capable of verifying large computer programs. Their early commercial traction is in the crypto space, where billions of dollars might be at stake for software errors.\n\nThe company uses a process called "formal verification" and has developed a model that allows an AI agent called Aleph to convert code into mathematical proofs that can be verified to 100% accuracy. The team includes a Fields Medal winner and programming world champion.',
		website: 'https://logicalintelligence.com',
		founders: [
			{ name: 'Eve Bodnia' },
			{ name: 'Vladislav Isenbaev', link: 'https://www.linkedin.com/in/isenbaev/' }
		]
	},
	'orbit': {
		slug: 'orbit',
		name: 'Orbit Engineering',
		tagline: 'Non-invasive BCI via vestibular stim',
		logo: '',
		description: 'Orbit Engineering builds non-invasive brain-computer interface technology using vestibular stimulation. The company\'s device, placed behind users\' ears, uses electrical stimulation to create immersive experiences for video games, TV shows, and other media. Orbit\'s novel brain-computer-interface decodes emotion, making technology empathetic.\n\nWhen Orbit sends artificial electrical signals to the brain\'s vestibular system, simulating movement patterns, the brain interprets them as real, creating hyper-immersive illusions of movement. Early research shows promise for increasing sleep efficacy, with normal subjects potentially requiring 6.5 hours of sleep instead of 8.',
		website: 'https://orbit.engineering',
		founders: [
			{ name: 'Steven Pang', link: 'https://www.linkedin.com/in/steven-pang-625004218/' },
			{ name: 'Colton El-Habr', link: 'https://www.linkedin.com/in/colton-el-habr-7b7159223/' }
		]
	},
	'resonate': {
		slug: 'resonate',
		name: 'Resonate',
		tagline: 'Distributed async await for cloud',
		logo: '',
		description: 'Resonate is building a developer-friendly programming model for distributed execution that replaces brittle integrations in distributed systems. The platform provides Distributed Async Await, a procedural async/await programming model that works across distributed processes, enabling developers to build reliable and scalable cloud applications.\n\nResonate offers distributed, durable, and composable functions that are "dead simple, formally verified, and deterministically tested." Use cases include service orchestration, transactional applications, and autonomous systems.',
		website: 'https://resonatehq.io',
		founders: [{ name: 'Dominik Tornow', link: 'https://www.linkedin.com/in/dtornow/' }]
	},
	'storyteller': {
		slug: 'storyteller',
		name: 'Storyteller',
		tagline: 'AI voice synthesis for video',
		logo: '',
		description: 'Storyteller.AI provides AI-powered storytelling tools for video content creation. Founded in 2022 and based in Atlanta, the platform enables users to create synthetic voices and audio with features including text-to-speech, voice-to-voice conversion, and voice designer capabilities.\n\nThe company\'s technology combines text-to-speech and deep fake technology to transform speech into unique characters, making it easy for creators to generate custom voice content for storytelling and video production.',
		website: 'https://storyteller.ai',
		founders: [{ name: 'Brandon Thomas', link: 'https://www.linkedin.com/in/possibilistic' }]
	},
	'tau': {
		slug: 'tau',
		name: 'Tau Robotics',
		tagline: 'General-purpose AI for robotic arms',
		logo: '',
		description: 'Tau Robotics builds general AI for robots that learns in the real world with minimal human supervision. The company focuses on developing general-purpose AI for robotic arms, making them versatile and effective across different industries including delicate surgeries, fast-paced manufacturing lines, and automated farming.\n\nTau Robotics\' approach enables robots to collect massive amounts of data autonomously, containing valuable failures and recoveries while minimizing unscalable human language advice and teleoperation. The company develops world-model based reinforcement learning algorithms.',
		website: 'https://tau-robotics.com',
		founders: [
			{ name: 'Cornelia Weinzierl', link: 'https://www.linkedin.com/in/cornelia-weinzierl/' },
			{ name: 'Alexander Koch', link: 'https://www.linkedin.com/in/alexkoch-ai/' }
		]
	},
	'wired-labs': {
		slug: 'wired-labs',
		name: 'Wired Labs',
		tagline: 'Consumer social',
		logo: '',
		description: 'In stealth mode.',
		website: 'https://wiredlabs.so',
		founders: [
			{ name: 'Cora Kyler', link: 'https://www.linkedin.com/in/cora-k' },
			{ name: 'Alena Titova', link: 'https://www.linkedin.com/in/a-titova/' }
		]
	},
};

export function getCompany(slug: string): Company | undefined {
	return companies[slug];
}

export function getAllCompanies(): Company[] {
	return companyOrder.map(slug => companies[slug]).filter(Boolean);
}
