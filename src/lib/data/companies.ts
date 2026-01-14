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

// Ordered by stage: Acquired → Late Stage → Series B → Series A → Seed → Pre-Seed → Stealth
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
		description: 'Select Star operates as a modern data governance platform specializing in automated data catalog and discovery solutions. The platform integrates directly with data warehouses and BI tools to extract metadata, query history, and activity logs. It delivers features including Google-like search functionality, data dictionaries, business glossaries, popularity metrics, lineage tracking, and entity relationship mapping—consolidated in a single interface.',
		website: 'https://selectstar.com',
		founders: [{ name: 'Shinji Kim' }]
	},
	'elliptic-ai': {
		slug: 'elliptic-ai',
		name: 'Elliptic',
		tagline: 'AI Tools to amplify data scientists',
		logo: '',
		description: 'Elliptic transforms how organizations harness specialized expertise by leveraging artificial intelligence. The company develops AI-powered tools enabling businesses to better utilize their domain knowledge and technical capabilities.',
		website: 'https://elliptic.ai',
		founders: [{ name: 'Christian Griset' }]
	},
	'augment': {
		slug: 'augment',
		name: 'Augment',
		tagline: 'Enterprise AI coding assistant',
		logo: '/portfolioimages/augment.svg',
		description: 'Augment develops an enterprise-focused AI coding assistant tailored for large software teams managing extensive codebases. The platform emphasizes on-premise deployment options, enabling organizations to maintain code within their own infrastructure for security and compliance purposes.\n\nFounded in 2022, the platform has demonstrated >40% increase in developer productivity for enterprise customers.\n\nRaised $252M at $977M valuation. Selected Claude on Google Cloud\'s Vertex AI for their platform after extensive model testing.',
		website: 'https://augmentcode.com',
		founders: [
			{ name: 'Igor Ostrovsky', link: 'https://linkedin.com/in/igorostrovsky' },
			{ name: 'Guy Gur-Ari', link: 'https://linkedin.com/in/guygurari' }
		]
	},
	'krea': {
		slug: 'krea',
		name: 'KREA',
		tagline: 'Adobe for the AI era',
		logo: '/portfolioimages/krea.svg',
		description: 'KREA is a unified AI platform designed for creative professionals. The company integrates tools from multiple AI models through a custom interface that streamlines queries and enables easier, more customizable edits.\n\nFounded March 2022 in San Francisco with an 8-person team. Over 50 major product updates launched within 14 months, organic user growth exceeding 20 million, and 20-fold revenue increase.\n\nRaised $83M at $500M valuation. Users include creators at Perplexity AI, Pixar, LEGO, and Samsung.',
		website: 'https://krea.ai',
		founders: [
			{ name: 'Victor Perez', link: 'https://twitter.com/victorperez' },
			{ name: 'Diego Rodriguez', link: 'https://twitter.com/diegorodriguez' }
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
		description: 'Ona, rebranded from Gitpod in September 2025, represents an evolution from cloud development environments to an AI-powered software development platform. The company enables developers to collaborate with autonomous software engineering agents throughout the complete software development lifecycle.\n\nAgents co-author 60% of merged pull requests and contribute 72% of lines of code within their own operations.\n\nOriginally established in July 2017 as Gitpod, the platform achieved substantial adoption, reaching 2 million developers.',
		website: 'https://ona.com',
		founders: [
			{ name: 'Johannes Landgraf' },
			{ name: 'Sven Efftinge' },
			{ name: 'Moritz Eysholdt' },
			{ name: 'Dr. Jan Koehnlein' }
		]
	},
	'zeromatter': {
		slug: 'zeromatter',
		name: 'Zeromatter',
		tagline: 'Simulation for autonomous systems',
		logo: '/portfolioimages/zeromatter.svg',
		description: 'Zeromatter offers a comprehensive platform designed to build, test, and train autonomous systems via high-fidelity simulation. The offering encompasses high-performance sensor simulation, automatic environment generation, multi-agent co-simulation frameworks, execution infrastructure, and comprehensive tooling for simulation workflows.\n\nEstablished in 2021 and headquartered in Mountain View, California. Founded by Ian Glow, a former Tesla engineer who worked for years on Autopilot driver assistance software.\n\nSecured $45M in funding led by Two Sigma Ventures. Currently employs 48 people.',
		website: 'https://zeromatter.com',
		founders: [{ name: 'Ian Glow' }]
	},
	'spectral': {
		slug: 'spectral',
		name: 'Spectral Labs',
		tagline: 'Generative model for structured CAD',
		logo: '',
		description: 'Spectral Labs developed SGS-1, a foundation model that generates fully manufacturable and parametric 3D geometry, producing CAD B-Rep parts in STEP format.\n\nThe platform can create parametric geometry within assembly contexts, convert sketches and drawings into 3D CAD files, and transform scans, STL files, or mesh data into parametric STEP files. This functionality automates reverse engineering workflows.\n\nThe model is accessible on Hugging Face and can generate 3D CAD models from images.',
		website: 'https://spectrallabs.ai',
		founders: [
			{ name: 'Pranav Parthasarathy' },
			{ name: 'Rahul Iyer' }
		]
	},
	'lemurian': {
		slug: 'lemurian',
		name: 'Lemurian Labs',
		tagline: 'Universal compiler and runtime for AI',
		logo: '/portfolioimages/lemurian.svg',
		description: 'Lemurian Labs develops infrastructure for the autonomy economy by creating a universal software layer that abstracts hardware heterogeneity. The platform enables code written once to execute across diverse chips, configurations, clouds, and scales seamlessly.\n\nThe company tackles a fundamental constraint: AI systems remain locked within proprietary hardware ecosystems and fragmented software environments. Their solution reimagines compilers and runtimes from first principles, making disparate systems operate as a unified whole.\n\nKey benefits include 2-30x performance gains alongside reduced costs, vendor independence, and workflow simplification.',
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
		description: 'Northflank provides a self-service Platform as a Service (PaaS) built on Kubernetes, allowing developers to deploy any project in seconds, either in Northflank\'s cloud or the customer\'s own cloud infrastructure (BYOC).\n\nThe platform abstracts Kubernetes complexity while maintaining infrastructure control for platform engineers. It supports deployments across six-plus cloud providers and processes substantial scale—over 10 billion monthly public egress requests and 1.3 million monthly container deployments.\n\nNotable clients include NFL.com, Sentry, Writer, and Chai Discovery.',
		website: 'https://northflank.com',
		founders: [
			{ name: 'Will Stewart' },
			{ name: 'Frederik Brix' }
		]
	},
	'openmind': {
		slug: 'openmind',
		name: 'OpenMind',
		tagline: 'Decentralized embodied intelligence',
		logo: '/portfolioimages/openmind.svg',
		description: 'OpenMind develops OM1, an open-source AI software platform designed to enable robots to develop cognitive capabilities and work together. The system operates across different robot types including quadrupeds, humanoids, wheeled platforms, and aerial drones without being locked to specific hardware.\n\nThe company\'s distinguishing innovation is the FABRIC protocol—a decentralized architecture that facilitates robot identity verification, information sharing, and autonomous coordination across multiple units.\n\nSecured $20 million in Series funding led by Pantera Capital, with support from Ribbit Capital, Coinbase Ventures, and Pebblebed Ventures.',
		website: 'https://openmind.org',
		founders: [{ name: 'Jan Liphardt' }]
	},
	'orchid': {
		slug: 'orchid',
		name: 'Orchid',
		tagline: 'Whole genome screening for IVF',
		logo: '/portfolioimages/orchid.svg',
		description: 'Orchid is a reproductive technology company offering the world\'s first whole genome report for embryos during IVF.\n\nThe platform sequences over 99% of an embryo\'s genome, substantially more than existing alternatives that sequence less than 1%. It uses the same 4-6 cells required for traditional embryo screening, identifies variants associated with more than 1,200 monogenic disorders, and evaluates polygenic disease risks.\n\nThe test can detect birth defects, neurodevelopmental disorders, chromosomal abnormalities, and predispositions to both pediatric and adult-onset cancers before pregnancy begins.',
		website: 'https://orchidhealth.com',
		founders: [{ name: 'Noor Siddiqui', link: 'https://twitter.com/noorsiddiqui' }],
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
		description: 'Lynq.ai develops AI-powered assistants that streamline operations for fund managers and analysts by automating routine tasks through intelligent workflows. The platform is specifically designed for the finance sector, with particular emphasis on venture capital firms, offering custom AI-powered workflows and search capabilities.\n\nBeyond the VC space, the company extends its offerings to small and medium-sized businesses with AI agents designed to support continuous 24/7 operations.\n\nSecured $2 million in funding and launched a beta platform for VC firms.',
		website: 'https://lynq.ai',
		founders: [{ name: 'Paul Sheridan' }]
	},
	'keru': {
		slug: 'keru',
		name: 'Keru',
		tagline: 'In stealth mode',
		logo: '',
		description: 'In stealth mode.',
		website: 'https://keru.ai',
		founders: [
			{ name: 'Vinoo Ganesh' },
			{ name: 'John McRaven' }
		]
	},
	'adaptive-computer': {
		slug: 'adaptive-computer',
		name: 'Adaptive Computer',
		tagline: 'Build apps with natural language',
		logo: '',
		description: 'Adaptive Computer is transforming personal computer software to allow non-programmers to develop full-featured applications through text prompts. Their platform, AC1, lets users without coding skills construct web applications using natural language—eliminating the need for API keys, configuration, or technical expertise.\n\nThe company operates in the "vibe coding" category but focuses specifically on serving non-technical users from inception.\n\nSecured $7 million in seed funding led by Pebblebed Ventures. Additional investors included Conviction, Weekend Fund, Anti Fund (Jake Paul), and Roblox CEO Dave Baszucki.',
		website: 'https://adaptive.ai',
		founders: [
			{ name: 'Dennis Xu' },
			{ name: 'Mike Soylu' }
		]
	},
	'oxen': {
		slug: 'oxen',
		name: 'Oxen',
		tagline: 'Git for ML datasets',
		logo: '',
		description: 'Oxen is a data version control system designed to simplify dataset management in machine learning workflows. The platform handles both structured and unstructured data, from single CSV files to repositories containing millions of images, videos, audio, and text files.\n\nKey features include a Git-like interface tailored for ML operations with significant performance advantages: 40x faster than Git-LFS and 6.5x faster than simple S3 copy operations.\n\nEnables cross-functional collaboration among ML engineers, data scientists, product managers, and legal teams for shared data review and editing.',
		website: 'https://oxen.ai',
		founders: [
			{ name: 'Greg Schoeninger' },
			{ name: 'Scott Howard' }
		]
	},
	'dylibso': {
		slug: 'dylibso',
		name: 'Dylibso',
		tagline: 'WebAssembly infrastructure for plugins',
		logo: '',
		description: 'Dylibso creates WebAssembly infrastructure enabling plugin systems and user-defined code execution. Their offerings span XTP (a plugin system platform), Extism (an open-source universal plugin system), Chicory (a Java WebAssembly runtime), and mcp.run (an AI tools registry for the Model Context Protocol).\n\nThe company works with Axiom and Figma (through their Observe SDK), plus engagements involving WordPress/Automattic, BigCommerce, and Confluent.',
		website: 'https://dylibso.com',
		founders: [
			{ name: 'Steve Manuel' },
			{ name: 'Zach Gray' },
			{ name: 'Benjamin Eckel' }
		]
	},
	'datalab': {
		slug: 'datalab',
		name: 'Datalab',
		tagline: 'Document intelligence for enterprise AI',
		logo: '',
		description: 'Datalab specializes in developing AI models for document intelligence tasks. The company focuses on three core areas: OCR, layout analysis, and PDF to markdown conversion. They create compact foundation models ranging from 100-500M parameters that convert complex documents into structured, machine-readable data while operating efficiently on standard consumer GPUs.\n\nTheir open-source models are state-of-the-art, easy to use, and have been adopted by hundreds of teams and researchers at leading institutions like Anthropic, Harvard, Stanford, and MIT.\n\nCompleted a $3.5M seed round led by Pebblebed Ventures, with additional backing from Peak XV Partners and notable angel investors including Balaji Srinivasan, Jeff Hammerbacher, and co-founders of Hugging Face.',
		website: 'https://datalab.to',
		founders: [
			{ name: 'Vik Paruchuri' },
			{ name: 'Sandy Kwon' }
		]
	},
	'vidoc': {
		slug: 'vidoc',
		name: 'Vidoc Security',
		tagline: 'AI Security Engineer',
		logo: '',
		description: 'Vidoc Security Lab develops an AI-powered security platform that combines machine speed with human expertise. The platform detects, validates, and fixes security issues, monitoring organizations from a hacker\'s perspective to catch misconfigurations and vulnerabilities in real-time.\n\nThe company specifically addresses security vulnerabilities that emerge from AI-generated code.\n\nSecured $2.4 million in October 2024 led by Pebblebed and Firestreak Ventures, with additional support from XFactor Ventures and 500 Emerging Europe.',
		website: 'https://vidocsecurity.com',
		founders: [
			{ name: 'Klaudia Kloc' },
			{ name: 'Dawid Moczadlo' }
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
			{ name: 'Armaan Dhanda' },
			{ name: 'Samyak Baid' }
		]
	},
	'ulysses': {
		slug: 'ulysses',
		name: 'Ulysses',
		tagline: 'AUVs for ocean restoration',
		logo: '',
		description: 'Ulysses creates autonomous underwater vehicles designed for ocean ecosystem restoration, specifically targeting seagrass restoration projects. The company manufactures fully autonomous, low-cost maritime robots that function across surface and subsea environments.\n\nSeagrass restoration is 100x faster than manual volunteer planting with 10x reduction in costs compared to alternative robotic solutions. Seagrass acts as a carbon sink capturing 35 times more carbon than rainforests.\n\nFounded in 2023. Secured $2M seed led by Lowercarbon Capital.',
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
		description: 'Cedana (YC S23) specializes in GPU orchestration infrastructure for AI workloads. The company\'s foundational technology enables live migration and checkpoint/restore infrastructure for GPU-heavy workloads, enabling stateful reliability even through catastrophic GPU failures.\n\nTheir system operates at the Driver API level to reliably, transparently, and deterministically capture and restore GPU state for multi-GPU workloads.\n\nKey metrics: up to 80% cost savings, 2-10x acceleration of time to first token, and cold starts restored an order of magnitude faster than native implementations.',
		website: 'https://cedana.ai',
		founders: [
			{ name: 'Neel Master' },
			{ name: 'Niranjan Ravichandra' }
		]
	},
	'principia': {
		slug: 'principia',
		name: 'Principia Labs',
		tagline: 'AI for mathematical discovery',
		logo: '',
		description: 'Principia Labs aims to develop artificial intelligence systems for creating novel mathematical discoveries, rather than excelling at applying existing mathematical techniques. The organization emphasizes building AI capable of generating fresh mathematical insights instead of merely solving established problems.',
		website: 'https://principialabs.org',
		founders: [{ name: 'Harrison Sanders' }]
	},
	'aneta': {
		slug: 'aneta',
		name: 'Aneta',
		tagline: 'AI automation for scientific workflows',
		logo: '',
		description: 'Aneta is automating the legacy tools scientists use every day. The company leverages AI capabilities like Claude Computer Use to enable AI systems to interact with and automate scientific workflows, allowing researchers to focus on their work rather than manual tool operation.',
		website: 'https://aneta.company',
		founders: [{ name: 'Yasyf Mohamedali' }]
	},
	'build': {
		slug: 'build',
		name: 'Build',
		tagline: 'AI for commercial real estate reports',
		logo: '',
		description: 'AI for commercial real estate reports.',
		website: '',
		founders: []
	},
	'headquarters-health': {
		slug: 'headquarters-health',
		name: 'Headquarters Health',
		tagline: 'AI telehealth for concussion care',
		logo: '',
		description: 'Headquarters Health operates an AI-powered telehealth platform targeting youth sports concussion management. The company addresses a significant regulatory gap: U.S. high schools and youth sports organizations must provide proper return-to-play protocols following traumatic brain injuries, yet many lack adequate medical oversight.\n\nTheir solution enables sports organizations to fulfill compliance requirements while delivering remote medical assessment and care for student athletes with concussions.',
		website: 'https://headquarters.health',
		founders: [
			{ name: 'Orestis Skoutellas' },
			{ name: 'Lucas Johnston' }
		]
	},
	'logical-intelligence': {
		slug: 'logical-intelligence',
		name: 'Logical Intelligence',
		tagline: 'AI for formal verification',
		logo: '/portfolioimages/logicalintelligence.png',
		description: 'Logical Intelligence operates as a fundamental AI research organization focused on advancing reasoning capabilities in automated theorem-proving systems. Their primary goal involves enabling theorem-provers to verify large-scale computer programs reliably.\n\nThe organization has developed an AI system called Aleph that transforms source code into mathematical proofs capable of being verified with complete accuracy. Their approach utilizes formal verification techniques—a rigorous method for proving software correctness mathematically rather than through testing alone.\n\nThe team includes a Fields Medal laureate and an international programming competition champion.',
		website: 'https://logicalintelligence.com',
		founders: [
			{ name: 'Eve Bodnia' },
			{ name: 'Vladislav Isenbaev' }
		]
	},
	'orbit': {
		slug: 'orbit',
		name: 'Orbit Engineering',
		tagline: 'Non-invasive BCI via vestibular stim',
		logo: '',
		description: 'Orbit Engineering develops brain-computer interface technology through vestibular stimulation methods. Their wearable device, worn behind the ears, delivers electrical signals to create deeply immersive experiences for entertainment applications including gaming and television.\n\nThe technology works by transmitting artificial electrical impulses to the vestibular system, which triggers the brain to perceive realistic movement sensations, resulting in hyper-immersive illusions of movement.\n\nEarly findings suggest potential sleep benefits, with preliminary data indicating users could reduce sleep duration from 8 hours to approximately 6.5 hours while maintaining normal function.',
		website: 'https://orbit.engineering',
		founders: [
			{ name: 'Steven Pang' },
			{ name: 'Colton El-Habr' }
		]
	},
	'resonate': {
		slug: 'resonate',
		name: 'Resonate',
		tagline: 'Distributed async await for cloud',
		logo: '',
		description: 'Resonate develops a programming framework designed for distributed systems that eliminates fragile integration patterns. The platform introduces Distributed Async Await—a procedural async/await model functioning across multiple distributed processes. This enables teams to construct dependable and scalable cloud solutions.\n\nThe platform emphasizes three key qualities: dead simple, formally verified, and deterministically tested. Primary applications include orchestrating microservices, building transactional systems, and creating autonomous agents.',
		website: 'https://resonatehq.io',
		founders: [{ name: 'Dominik Tornow' }]
	},
	'storyteller': {
		slug: 'storyteller',
		name: 'Storyteller',
		tagline: 'AI voice synthesis for video',
		logo: '',
		description: 'Storyteller.AI is a platform offering AI-driven tools for video content creators. The service enables users to generate synthetic voices and audio through features like text-to-speech, voice-to-voice conversion, and voice designer tools.\n\nThe platform leverages text-to-speech and deep fake technology to transform speech into unique characters, facilitating the creation of custom voice content for storytelling and video production purposes.\n\nFounded in 2022 in Atlanta.',
		website: 'https://storyteller.ai',
		founders: [{ name: 'Brandon Thomas' }]
	},
	'tau': {
		slug: 'tau',
		name: 'Tau Robotics',
		tagline: 'General-purpose AI for robotic arms',
		logo: '',
		description: 'Tau Robotics develops artificial intelligence technology designed for robotic arms that learns autonomously in real-world environments with minimal human direction. The company targets versatile applications spanning delicate surgical procedures, high-speed manufacturing operations, and agricultural automation.\n\nTheir methodology emphasizes autonomous data collection by robots, capturing both failures and successful recoveries while reducing dependence on human guidance and manual control. The technical foundation centers on world-model based reinforcement learning approaches.',
		website: 'https://tau-robotics.com',
		founders: [
			{ name: 'Cornelia Weinzierl' },
			{ name: 'Alexander Koch' }
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
			{ name: 'Cora Kyler' , link: 'https://cora.page' },

			{ name: 'Alena Titova' , link: 'https://alena.page' }
		]
	},
};

export function getCompany(slug: string): Company | undefined {
	return companies[slug];
}

export function getAllCompanies(): Company[] {
	return companyOrder.map(slug => companies[slug]).filter(Boolean);
}
