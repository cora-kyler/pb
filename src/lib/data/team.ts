export interface TeamMember {
	name: string;
	role: string;
	description: string; // short description that shows up in the team card
	image: string;
	imageAlt: string;
	bio?: string; //longer bio that shows in the team modal
	email?: string; //idk if you guys want to show this or not..
	links?: Array<{ label: string; url: string }>;
}

export const teamMembers: TeamMember[] = [
	{
		name: "Pamela Vagata",
		role: "Founding Partner",
		description: "Creator of FBLearner Flow, founding member of OpenAI, led AI at Stripe.",
        bio: "Pam was the creator of FBLearner Flow, a founding member of OpenAI, and led AI at Stripe. She likes to ask: \"What happens when this actually works?\"",
		image: "/teamimages/pam.png",
		imageAlt: "Pamela Vagata",
        links: [
            {label: "Website", url: "https://www.vagata.space/"},
            { label: "LinkedIn", url: "https://www.linkedin.com/in/pamela-vagata-8396074/" }
        ]
	},
	{
		name: "Keith Adams",
		role: "Founding Partner",
		description: "Founded Facebook AI Research, Chief Architect at Slack.",
        bio: "Keith founded Facebook AI Research and served as Chief Architect at Slack. He has strong opinions about distributed systems and whiteboards hard.",
		image: "/teamimages/keith.png",
		imageAlt: "Keith Adams",
        links: [
            { label: "X", url: "https://x.com/keithmadams" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/keith-adams-pb/" }
           
        ]
	},
	{
		name: "Tammie Siew",
		role: "Founding Partner",
		description: "Founder-turned-investor, formerly at Sequoia.",
        bio: "Tammie is a founder-turned-investor, bringing experience from Sequoia and building the firm she wished existed.",
		image: "/teamimages/tammie.png",
		imageAlt: "Tammie Siew",
        links: [
            { label: "X", url: "https://x.com/tammiesiew" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/tammie-siew/" }
           
        ]
	},
	{
		name: "Nicole Levin",
		role: "Operations",
		description: "Previously ran ops at AI startups.",
        bio: "Nicole thinks in systems, stories, and social graphs to create bridges between people and ideas. She previously ran ops at AI startups and was a broadcast journalist. Now, she stewards the Pebbleverse.",
		image: "/teamimages/nicole.png",
		imageAlt: "Nicole Levin",
        links: [
            { label: "X", url: "https://x.com/nicilevv" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/nicole-levinn/" }
           
        ]
	},
	{
		name: "Mathew Vanherreweghe",
		role: "Research Alumni",
		description: "AI Researcher studying alternatives to transformers. Now at a portfolio company.",
        bio: "Mathew is an AI Researcher studying alternatives to transformers. He believes AI is like an alien race and we need to understand these creatures.",
		image: "/teamimages/matthew.png",
		imageAlt: "Mathew Vanherreweghe",
        links: [
            { label: "GitHub", url: "https://github.com/Mathewvanh" }
        ]
	},
	{
		name: "Jenny Guanni Qu",
		role: "Research Resident",
		description: "Trained AI to solve math at Caltech, top competitive hacker.",
        bio: "Jenny trained AI to solve math at Caltech and is one of the best competitive hackers in the world. Now she's building AI that finds zero-days first. Jenny is locked in.",
		image: "/teamimages/jenny.png",
		imageAlt: "Jenny Guanni Qu",
        links: [
            { label: "Website", url: "https://quguanni.com/" },
        ],
		
	}
];
