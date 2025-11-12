// All 100 items with cost, impact, and context
const ITEMS = [
  // 🌱 Micro Actions ($1K – $10K)
  {
    id: 1,
    name: "Plant 1,000 trees",
    cost: 1000,
    category: "micro",
    emoji: "🌳",
    description: "Absorb CO₂ and restore habitats",
    totalNeed: "3 trillion trees needed to offset global carbon",
    impactPerPurchase: "Removes 250 tons of CO₂ over lifetime",
    funFact: "That's roughly one tree for every person in San Francisco",
    organizations: [
      { name: "One Tree Planted", url: "https://onetreeplanted.org" },
      { name: "The Nature Conservancy", url: "https://www.nature.org/en-us/get-involved/how-to-help/plant-a-billion/" }
    ]
  },
  {
    id: 2,
    name: "Fund clean drinking water for a village",
    cost: 2000,
    category: "micro",
    emoji: "💧",
    description: "Build a well and water filtration system",
    totalNeed: "2 billion people lack safe drinking water",
    impactPerPurchase: "Provides water for ~500 people for 20 years",
    funFact: "That's cheaper than a decent laptop",
    organizations: [
      { name: "Charity: Water", url: "https://www.charitywater.org" },
      { name: "Water.org", url: "https://water.org" }
    ]
  },
  {
    id: 3,
    name: "Buy 100 mosquito nets to prevent malaria",
    cost: 3000,
    category: "micro",
    emoji: "🦟",
    description: "Treated nets that prevent disease transmission",
    totalNeed: "Half of the world's population at risk of malaria",
    impactPerPurchase: "Protects 200 people, prevents ~50 cases of malaria",
    funFact: "More effective than most medicine",
    organizations: [
      { name: "Against Malaria Foundation", url: "https://www.againstmalaria.com" },
      { name: "Malaria No More", url: "https://www.malarianomore.org" }
    ]
  },
  {
    id: 4,
    name: "Sponsor school lunches for 100 kids for a year",
    cost: 5000,
    category: "micro",
    emoji: "🍎",
    description: "Nutritious meals that improve learning",
    totalNeed: "73 million children go to school hungry daily",
    impactPerPurchase: "18,000 meals provided, better grades for 100 kids",
    funFact: "Well-fed kids learn 20% better"
  },
  {
    id: 5,
    name: "Provide laptops for a rural classroom",
    cost: 8000,
    category: "micro",
    emoji: "💻",
    description: "Bridge the digital divide",
    totalNeed: "2.9 billion people have never used the internet",
    impactPerPurchase: "30 students gain computer skills",
    funFact: "Digital literacy = economic opportunity"
  },
  {
    id: 6,
    name: "Build a community playground",
    cost: 10000,
    category: "micro",
    emoji: "🛝",
    description: "Safe space for kids to play and grow",
    totalNeed: "Millions of communities lack safe play areas",
    impactPerPurchase: "Serves 500+ children, reduces childhood obesity",
    funFact: "Play is scientifically proven to boost development"
  },
  {
    id: 7,
    name: "Supply hearing aids for 50 children",
    cost: 10000,
    category: "micro",
    emoji: "👂",
    description: "Transform lives through sound",
    totalNeed: "34 million children have hearing loss",
    impactPerPurchase: "50 kids can hear, speak, and learn normally",
    funFact: "Hearing loss is 90% treatable but often ignored"
  },
  {
    id: 8,
    name: "Buy textbooks for an entire school",
    cost: 9000,
    category: "micro",
    emoji: "📚",
    description: "Give students learning materials",
    totalNeed: "617 million youth lack basic reading skills",
    impactPerPurchase: "500 students gain access to knowledge",
    funFact: "In some countries, 40 kids share one textbook"
  },
  {
    id: 9,
    name: "Vaccinate 2,000 children",
    cost: 5000,
    category: "micro",
    emoji: "💉",
    description: "Protect against preventable diseases",
    totalNeed: "20 million children miss basic vaccines annually",
    impactPerPurchase: "Saves an estimated 20 lives",
    funFact: "Vaccines are humanity's best ROI in health"
  },
  {
    id: 10,
    name: "Rescue and rehabilitate 10 shelter dogs",
    cost: 4000,
    category: "micro",
    emoji: "🐕",
    description: "Give abandoned animals a second chance",
    totalNeed: "6.5 million animals enter shelters each year in the US alone",
    impactPerPurchase: "10 dogs find loving homes",
    funFact: "Dogs make humans healthier and happier"
  },

  // 💧 Community Projects ($10K – $250K)
  {
    id: 11,
    name: "Build a public library",
    cost: 150000,
    category: "community",
    emoji: "📖",
    description: "A hub of knowledge and community",
    totalNeed: "Thousands of rural communities lack libraries",
    impactPerPurchase: "Serves 10,000+ residents for 50+ years",
    funFact: "Libraries = free education for life"
  },
  {
    id: 12,
    name: "Install solar panels for a small town",
    cost: 200000,
    category: "community",
    emoji: "☀️",
    description: "Clean, renewable energy for all",
    totalNeed: "1 billion people lack electricity",
    impactPerPurchase: "Powers 500 homes, cuts CO₂ by 400 tons/year",
    funFact: "Solar is now cheaper than coal"
  },
  {
    id: 13,
    name: "Fund a local food bank for one year",
    cost: 75000,
    category: "community",
    emoji: "🥫",
    description: "Fight hunger in your backyard",
    totalNeed: "42 million Americans face food insecurity",
    impactPerPurchase: "Feeds 5,000 families for a year",
    funFact: "40% of food in the US is wasted while people starve"
  },
  {
    id: 14,
    name: "Rebuild 5 homes after a natural disaster",
    cost: 200000,
    category: "community",
    emoji: "🏠",
    description: "Help families recover and restart",
    totalNeed: "Climate disasters displace millions annually",
    impactPerPurchase: "5 families get their lives back",
    funFact: "Natural disasters are increasing 5x due to climate change"
  },
  {
    id: 15,
    name: "Provide microloans to 1,000 entrepreneurs",
    cost: 250000,
    category: "community",
    emoji: "💰",
    description: "Seed money for small businesses",
    totalNeed: "3 billion people live on less than $2.50/day",
    impactPerPurchase: "Creates ~300 permanent jobs",
    funFact: "Microloans have 98% repayment rates"
  },
  {
    id: 16,
    name: "Construct a water purification plant",
    cost: 150000,
    category: "community",
    emoji: "🚰",
    description: "Turn dirty water into safe drinking water",
    totalNeed: "80% of wastewater flows back into ecosystems untreated",
    impactPerPurchase: "Provides clean water for 20,000 people",
    funFact: "Clean water = 50% reduction in disease"
  },
  {
    id: 17,
    name: "Launch a coral reef restoration project",
    cost: 180000,
    category: "community",
    emoji: "🪸",
    description: "Rebuild underwater ecosystems",
    totalNeed: "50% of coral reefs have died since 1980",
    impactPerPurchase: "Restores 1 acre, supports 1000s of marine species",
    funFact: "Reefs protect coastlines and feed 1 billion people"
  },
  {
    id: 18,
    name: "Build a rural health clinic",
    cost: 200000,
    category: "community",
    emoji: "🏥",
    description: "Bring healthcare to remote areas",
    totalNeed: "Half the world lacks access to essential health services",
    impactPerPurchase: "Serves 15,000 patients per year",
    funFact: "Distance is the #1 barrier to healthcare globally"
  },
  {
    id: 19,
    name: "Sponsor 100 scholarships for college students",
    cost: 250000,
    category: "community",
    emoji: "🎓",
    description: "Make higher education accessible",
    totalNeed: "$1.7 trillion in US student debt",
    impactPerPurchase: "100 students graduate debt-free",
    funFact: "Each degree increases lifetime earnings by $1M+"
  },
  {
    id: 20,
    name: "Create an urban green park",
    cost: 100000,
    category: "community",
    emoji: "🌳",
    description: "Green space for mental and physical health",
    totalNeed: "100M Americans lack access to parks",
    impactPerPurchase: "Improves health for 25,000 residents",
    funFact: "Parks reduce crime and increase property values"
  },

  // 🌾 Regional Development ($250K – $5M)
  {
    id: 21,
    name: "Fund an anti-malnutrition program in one region",
    cost: 1000000,
    category: "regional",
    emoji: "🌾",
    description: "End hunger at a regional scale",
    totalNeed: "822 million people are chronically undernourished",
    impactPerPurchase: "Saves 5,000 children from stunting and death",
    funFact: "Malnutrition causes 45% of child deaths"
  },
  {
    id: 22,
    name: "Electrify a rural area with renewable energy",
    cost: 2000000,
    category: "regional",
    emoji: "⚡",
    description: "Power that changes everything",
    totalNeed: "770 million people have no electricity",
    impactPerPurchase: "Brings power to 50,000 people",
    funFact: "Electricity = education, health, and economic growth"
  },
  {
    id: 23,
    name: "Restore wetlands to prevent flooding",
    cost: 1500000,
    category: "regional",
    emoji: "🦆",
    description: "Nature's flood control system",
    totalNeed: "87% of the world's wetlands have been lost",
    impactPerPurchase: "Protects 100,000 people from floods, restores biodiversity",
    funFact: "Wetlands absorb water like giant sponges"
  },
  {
    id: 24,
    name: "Build a small hospital",
    cost: 3000000,
    category: "regional",
    emoji: "🏥",
    description: "Advanced care for underserved regions",
    totalNeed: "400 million people lack basic healthcare",
    impactPerPurchase: "Serves 100,000 people, performs 5,000 surgeries/year",
    funFact: "Hospitals save lives and create jobs"
  },
  {
    id: 25,
    name: "Provide clean water access to an entire province",
    cost: 4000000,
    category: "regional",
    emoji: "💦",
    description: "Wells, pipes, and purification at scale",
    totalNeed: "2.2 billion people lack safe water",
    impactPerPurchase: "Provides water for 500,000 people",
    funFact: "Women walk 200M hours/year collecting water"
  },
  {
    id: 26,
    name: "Build 10 schools",
    cost: 2000000,
    category: "regional",
    emoji: "🏫",
    description: "Education infrastructure that lasts generations",
    totalNeed: "258 million children are out of school",
    impactPerPurchase: "Educates 5,000 students for 50+ years",
    funFact: "Every year of school increases income by 10%"
  },
  {
    id: 27,
    name: "Launch an ocean cleanup drone fleet",
    cost: 3000000,
    category: "regional",
    emoji: "🌊",
    description: "Remove plastic from the ocean",
    totalNeed: "8 million tons of plastic enter oceans yearly",
    impactPerPurchase: "Removes 50 tons of plastic per year",
    funFact: "There's a garbage patch twice the size of Texas"
  },
  {
    id: 28,
    name: "Train 10,000 teachers globally",
    cost: 2500000,
    category: "regional",
    emoji: "👩‍🏫",
    description: "Teachers multiply impact exponentially",
    totalNeed: "69 million more teachers needed by 2030",
    impactPerPurchase: "10,000 teachers educate 300,000+ students over careers",
    funFact: "Good teachers change lives forever"
  },
  {
    id: 29,
    name: "Expand affordable internet to 50 villages",
    cost: 1200000,
    category: "regional",
    emoji: "📡",
    description: "Connect remote communities to the world",
    totalNeed: "3.7 billion people are offline",
    impactPerPurchase: "Connects 25,000 people to knowledge and opportunity",
    funFact: "Internet access = 20% increase in employment"
  },
  {
    id: 30,
    name: "Launch a wildlife conservation area",
    cost: 2000000,
    category: "regional",
    emoji: "🐘",
    description: "Protect endangered species and habitats",
    totalNeed: "1 million species at risk of extinction",
    impactPerPurchase: "Protects 100,000 acres, saves dozens of species",
    funFact: "We're in the 6th mass extinction event"
  },

  // 🏙️ National-Scale Improvements ($5M – $100M)
  {
    id: 31,
    name: "Modernize a country's power grid",
    cost: 50000000,
    category: "national",
    emoji: "🔌",
    description: "Smart, efficient, renewable-ready infrastructure",
    totalNeed: "Most grids are 50+ years old and inefficient",
    impactPerPurchase: "Serves 5M people, enables renewable transition",
    funFact: "Modern grids reduce outages by 80%"
  },
  {
    id: 32,
    name: "Build a bullet train system in one country",
    cost: 80000000,
    category: "national",
    emoji: "🚄",
    description: "High-speed, zero-emission transportation",
    totalNeed: "Cars cause 20% of global CO₂ emissions",
    impactPerPurchase: "Connects 10 cities, reduces CO₂ by 100,000 tons/year",
    funFact: "Trains are 10x more efficient than cars"
  },
  {
    id: 33,
    name: "Fund a universal basic income pilot",
    cost: 30000000,
    category: "national",
    emoji: "💵",
    description: "Test unconditional cash for all citizens",
    totalNeed: "Poverty affects 700 million people globally",
    impactPerPurchase: "Provides $500/month to 5,000 people for 1 year",
    funFact: "UBI trials show improved health and entrepreneurship"
  },
  {
    id: 34,
    name: "Reforest 1 million acres",
    cost: 60000000,
    category: "national",
    emoji: "🌲",
    description: "Plant millions of trees to fight climate change",
    totalNeed: "10 billion acres of forest have been lost historically",
    impactPerPurchase: "Sequesters 5M tons of CO₂, restores ecosystems",
    funFact: "Trees are the best carbon capture technology"
  },
  {
    id: 35,
    name: "Build a new city designed for climate resilience",
    cost: 100000000,
    category: "national",
    emoji: "🏙️",
    description: "Flood-proof, heat-resistant, sustainable urban design",
    totalNeed: "1 billion people live in climate-vulnerable areas",
    impactPerPurchase: "Houses 50,000 people safely for 100+ years",
    funFact: "By 2050, 200M people will be climate refugees"
  },
  {
    id: 36,
    name: "Modernize school infrastructure nationwide",
    cost: 75000000,
    category: "national",
    emoji: "🎒",
    description: "Safe, modern schools with technology",
    totalNeed: "$500B backlog in US school repairs alone",
    impactPerPurchase: "Upgrades 500 schools, impacts 250,000 students",
    funFact: "School quality directly affects learning outcomes"
  },
  {
    id: 37,
    name: "Provide nationwide clean water systems",
    cost: 40000000,
    category: "national",
    emoji: "🚿",
    description: "Pipes, treatment, and infrastructure for all",
    totalNeed: "785M people lack clean water",
    impactPerPurchase: "Gives 2M people access to safe water",
    funFact: "Every $1 in water/sanitation returns $4 in productivity"
  },
  {
    id: 38,
    name: "Eradicate malaria from a country",
    cost: 90000000,
    category: "national",
    emoji: "🦟",
    description: "Eliminate one of humanity's oldest killers",
    totalNeed: "229 million malaria cases in 2019",
    impactPerPurchase: "Saves 50,000+ lives, billions in economic productivity",
    funFact: "Malaria has killed more humans than anything else"
  },
  {
    id: 39,
    name: "Fully solarize a medium-sized nation",
    cost: 60000000,
    category: "national",
    emoji: "🌞",
    description: "100% solar energy for entire country",
    totalNeed: "81% of energy still comes from fossil fuels",
    impactPerPurchase: "Powers 10M people cleanly forever",
    funFact: "Solar could power Earth 100x over"
  },
  {
    id: 40,
    name: "Build affordable housing for 50,000 people",
    cost: 50000000,
    category: "national",
    emoji: "🏘️",
    description: "Safe, decent homes for families",
    totalNeed: "1.6 billion people lack adequate housing",
    impactPerPurchase: "10,000 families get homes",
    funFact: "Housing is the foundation of stability"
  },

  // 🧬 Global Health & Innovation ($100M – $1B)
  {
    id: 41,
    name: "Cure one major disease (e.g., malaria)",
    cost: 500000000,
    category: "global_health",
    emoji: "💊",
    description: "Develop and distribute cure worldwide",
    totalNeed: "Millions die from preventable diseases yearly",
    impactPerPurchase: "Saves 500,000+ lives per year forever",
    funFact: "Disease eradication is humanity's superpower"
  },
  {
    id: 42,
    name: "Launch a pandemic prevention global fund",
    cost: 300000000,
    category: "global_health",
    emoji: "🛡️",
    description: "Early warning systems and rapid response",
    totalNeed: "COVID-19 cost $16 trillion",
    impactPerPurchase: "Prevents the next pandemic, saves millions of lives",
    funFact: "Prevention is 1000x cheaper than response"
  },
  {
    id: 43,
    name: "Develop a universal flu vaccine",
    cost: 700000000,
    category: "global_health",
    emoji: "💉",
    description: "One shot to protect against all flu strains",
    totalNeed: "Flu kills 650,000 people per year",
    impactPerPurchase: "Saves 500,000 lives annually",
    funFact: "Flu evolves constantly, we need a permanent solution"
  },
  {
    id: 44,
    name: "Fund global mental health programs",
    cost: 200000000,
    category: "global_health",
    emoji: "🧠",
    description: "Therapy, support, and treatment worldwide",
    totalNeed: "1 in 8 people have a mental health condition",
    impactPerPurchase: "Helps 10M people access mental healthcare",
    funFact: "Mental health is as important as physical health"
  },
  {
    id: 45,
    name: "Create a global ocean desalination network",
    cost: 1000000000,
    category: "global_health",
    emoji: "🌊",
    description: "Turn seawater into drinking water at scale",
    totalNeed: "4 billion people face water scarcity monthly",
    impactPerPurchase: "Provides water for 100M people",
    funFact: "97% of Earth's water is in the ocean"
  },
  {
    id: 46,
    name: "Build AI systems for early disease detection",
    cost: 300000000,
    category: "global_health",
    emoji: "🤖",
    description: "AI that predicts and catches diseases early",
    totalNeed: "Early detection can prevent 90% of deaths",
    impactPerPurchase: "Saves 1M lives per year through early intervention",
    funFact: "AI can spot cancer better than doctors"
  },
  {
    id: 47,
    name: "Eliminate polio worldwide",
    cost: 400000000,
    category: "global_health",
    emoji: "🦠",
    description: "Finish what we started with vaccines",
    totalNeed: "Only 2 countries still have polio",
    impactPerPurchase: "Eradicates polio forever, joins smallpox",
    funFact: "We're 99.9% done, let's finish it"
  },
  {
    id: 48,
    name: "Fund a 10-year clean cooking fuel initiative",
    cost: 500000000,
    category: "global_health",
    emoji: "🍳",
    description: "Replace deadly indoor cooking fires",
    totalNeed: "3 billion people cook with wood/coal",
    impactPerPurchase: "Prevents 4M deaths from indoor air pollution",
    funFact: "Indoor smoke kills more than malaria"
  },
  {
    id: 49,
    name: "Create an open-source medicine fund",
    cost: 250000000,
    category: "global_health",
    emoji: "💊",
    description: "Make life-saving drugs affordable for all",
    totalNeed: "2 billion people can't afford medicine",
    impactPerPurchase: "Provides medicine to 50M people",
    funFact: "Patent monopolies kill millions"
  },
  {
    id: 50,
    name: "Build a global network of 1,000 hospitals",
    cost: 900000000,
    category: "global_health",
    emoji: "🏥",
    description: "Healthcare access for underserved regions",
    totalNeed: "Half of the world lacks healthcare",
    impactPerPurchase: "Serves 100M patients per year",
    funFact: "Healthcare is a human right, not a luxury"
  },

  // 🌎 Mega-Projects ($1B – $25B)
  {
    id: 51,
    name: "Achieve 100% renewable energy in the U.S.",
    cost: 10000000000,
    category: "mega",
    emoji: "⚡",
    description: "Solar, wind, and batteries for America",
    totalNeed: "US produces 15% of global emissions",
    impactPerPurchase: "Eliminates 5 billion tons of CO₂ per year",
    funFact: "This would be the single biggest climate action ever"
  },
  {
    id: 52,
    name: "Launch a Mars colony",
    cost: 25000000000,
    category: "mega",
    emoji: "🚀",
    description: "Make humanity a multi-planetary species",
    totalNeed: "Earth is fragile, we need a backup",
    impactPerPurchase: "Establishes self-sustaining base for 1,000 people",
    funFact: "Insurance policy for human extinction"
  },
  {
    id: 53,
    name: "Clean the entire Pacific Garbage Patch",
    cost: 5000000000,
    category: "mega",
    emoji: "🌊",
    description: "Remove 80,000 tons of floating plastic",
    totalNeed: "5 major ocean garbage patches exist",
    impactPerPurchase: "Cleans 1.6M km² of ocean, saves marine life",
    funFact: "The patch is twice the size of Texas"
  },
  {
    id: 54,
    name: "End global hunger for one year",
    cost: 15000000000,
    category: "mega",
    emoji: "🍞",
    description: "Feed every hungry person on Earth",
    totalNeed: "828 million people are undernourished",
    impactPerPurchase: "Zero hunger for 12 months",
    funFact: "We produce enough food, distribution is the problem"
  },
  {
    id: 55,
    name: "Build desalination plants for all of Africa",
    cost: 12000000000,
    category: "mega",
    emoji: "💧",
    description: "Solve water scarcity continent-wide",
    totalNeed: "400M Africans lack clean water",
    impactPerPurchase: "Provides unlimited water for 1 billion people",
    funFact: "Water scarcity costs Africa $5B annually"
  },
  {
    id: 56,
    name: "Eradicate global illiteracy",
    cost: 10000000000,
    category: "mega",
    emoji: "📖",
    description: "Teach every adult to read and write",
    totalNeed: "773 million adults are illiterate",
    impactPerPurchase: "Educates 773M people, unlocks human potential",
    funFact: "Literacy is the foundation of everything"
  },
  {
    id: 57,
    name: "Develop cheap fusion energy",
    cost: 20000000000,
    category: "mega",
    emoji: "⚛️",
    description: "Unlimited clean energy from fusion reactions",
    totalNeed: "Humanity needs 10x more clean energy",
    impactPerPurchase: "Solves energy forever, ends climate crisis",
    funFact: "Fusion is the power source of stars"
  },
  {
    id: 58,
    name: "Build a climate-proof megacity for climate refugees",
    cost: 15000000000,
    category: "mega",
    emoji: "🏙️",
    description: "Sustainable city for displaced populations",
    totalNeed: "200M climate refugees expected by 2050",
    impactPerPurchase: "Houses 1M people safely",
    funFact: "Climate migration will dwarf all other migration"
  },
  {
    id: 59,
    name: "Protect all remaining rainforests",
    cost: 12000000000,
    category: "mega",
    emoji: "🌴",
    description: "Save the lungs of the planet",
    totalNeed: "17% of Amazon has been destroyed",
    impactPerPurchase: "Protects 1B acres, prevents 5B tons CO₂ release",
    funFact: "Rainforests create 20% of the world's oxygen"
  },
  {
    id: 60,
    name: "Fully automate recycling worldwide",
    cost: 10000000000,
    category: "mega",
    emoji: "♻️",
    description: "AI-powered sorting and processing",
    totalNeed: "Only 9% of plastic is recycled",
    impactPerPurchase: "Recycles 90% of all waste globally",
    funFact: "Current recycling is embarrassingly inefficient"
  },

  // 🛰️ Global Tech & Exploration ($25B – $150B)
  {
    id: 61,
    name: "Colonize Mars (NASA style)",
    cost: 100000000000,
    category: "space",
    emoji: "🪐",
    description: "Full-scale Mars settlement with infrastructure",
    totalNeed: "Humanity needs to become interplanetary",
    impactPerPurchase: "Permanent base for 10,000 people",
    funFact: "Backup plan for Earth extinction events"
  },
  {
    id: 62,
    name: "Build a Dyson swarm (solar satellite array)",
    cost: 120000000000,
    category: "space",
    emoji: "🛰️",
    description: "Capture energy directly from the sun",
    totalNeed: "Earth gets 1 billionth of the sun's energy",
    impactPerPurchase: "Infinite clean energy for civilization",
    funFact: "Could power Earth's energy needs 1 billion times over"
  },
  {
    id: 63,
    name: "Create a global quantum internet",
    cost: 50000000000,
    category: "space",
    emoji: "🔐",
    description: "Unhackable communication network",
    totalNeed: "Current internet is vulnerable to quantum hacking",
    impactPerPurchase: "Perfectly secure communication for everyone",
    funFact: "Quantum encryption is mathematically unbreakable"
  },
  {
    id: 64,
    name: "Terraform deserts into forests",
    cost: 80000000000,
    category: "space",
    emoji: "🌵",
    description: "Turn barren land into thriving ecosystems",
    totalNeed: "33% of Earth is desert",
    impactPerPurchase: "Converts 100M acres, sequesters 50B tons CO₂",
    funFact: "Sahara was green 6,000 years ago"
  },
  {
    id: 65,
    name: "Construct a worldwide high-speed rail network",
    cost: 150000000000,
    category: "space",
    emoji: "🚅",
    description: "Connect all major cities with bullet trains",
    totalNeed: "Aviation produces 2.5% of global CO₂",
    impactPerPurchase: "Reduces transport emissions by 80%",
    funFact: "Trains are 10x more efficient than planes"
  },
  {
    id: 66,
    name: "Launch a lunar base",
    cost: 90000000000,
    category: "space",
    emoji: "🌕",
    description: "Permanent research station on the Moon",
    totalNeed: "Moon has water, metals, and strategic value",
    impactPerPurchase: "Base for 100 people, helium-3 mining",
    funFact: "Moon's helium-3 could power Earth for 10,000 years"
  },
  {
    id: 67,
    name: "Develop global AI for disaster prediction",
    cost: 40000000000,
    category: "space",
    emoji: "🌪️",
    description: "Predict earthquakes, floods, hurricanes",
    totalNeed: "Natural disasters kill 60,000+ per year",
    impactPerPurchase: "Saves 50,000 lives annually through early warning",
    funFact: "AI can see patterns humans can't"
  },
  {
    id: 68,
    name: "Create 100 carbon capture plants",
    cost: 25000000000,
    category: "space",
    emoji: "🏭",
    description: "Remove CO₂ directly from the atmosphere",
    totalNeed: "Need to remove 10B tons CO₂/year by 2050",
    impactPerPurchase: "Captures 100M tons of CO₂ per year",
    funFact: "We need both emission cuts AND carbon removal"
  },
  {
    id: 69,
    name: "Build a space elevator prototype",
    cost: 80000000000,
    category: "space",
    emoji: "🛗",
    description: "Cable to space, no rockets needed",
    totalNeed: "Rocket launches cost $10,000 per kg",
    impactPerPurchase: "Reduces space launch cost by 99%",
    funFact: "Would make space accessible to everyone"
  },
  {
    id: 70,
    name: "Reverse-engineer asteroid mining",
    cost: 60000000000,
    category: "space",
    emoji: "☄️",
    description: "Mine metals from asteroids",
    totalNeed: "Earth's metals are limited",
    impactPerPurchase: "Unlocks $700 quintillion in asteroid resources",
    funFact: "One asteroid contains more gold than all of Earth"
  },

  // 💵 Societal Redesign ($150B – $1T)
  {
    id: 71,
    name: "Universal basic income for the planet (1 year)",
    cost: 500000000000,
    category: "society",
    emoji: "💰",
    description: "Give every human $500/month for a year",
    totalNeed: "Half of humanity lives on less than $5.50/day",
    impactPerPurchase: "Lifts billions out of poverty temporarily",
    funFact: "UBI could end poverty overnight"
  },
  {
    id: 72,
    name: "End poverty in all low-income nations",
    cost: 400000000000,
    category: "society",
    emoji: "🌍",
    description: "Bring everyone above poverty line permanently",
    totalNeed: "700M people live in extreme poverty",
    impactPerPurchase: "Ends extreme poverty for 700M people",
    funFact: "Cost is 0.5% of global GDP"
  },
  {
    id: 73,
    name: "Decarbonize global transportation",
    cost: 700000000000,
    category: "society",
    emoji: "🚗",
    description: "EVs, trains, and sustainable infrastructure",
    totalNeed: "Transport is 24% of global emissions",
    impactPerPurchase: "Eliminates 8 billion tons of CO₂ per year",
    funFact: "Would prevent 2°C of warming"
  },
  {
    id: 74,
    name: "Build clean energy for every household on Earth",
    cost: 600000000000,
    category: "society",
    emoji: "🏠",
    description: "Solar panels and batteries for all",
    totalNeed: "Residential energy is 20% of emissions",
    impactPerPurchase: "Powers 2 billion homes cleanly forever",
    funFact: "After 10 years, energy would be free"
  },
  {
    id: 75,
    name: "Pay off all student debt in the U.S.",
    cost: 1000000000000,
    category: "society",
    emoji: "🎓",
    description: "Forgive all education loans",
    totalNeed: "$1.7T in student debt crushes 45M Americans",
    impactPerPurchase: "Frees 45M people to buy homes, start businesses",
    funFact: "Student debt delays life milestones by 10 years"
  },
  {
    id: 76,
    name: "Replace all fossil fuel power plants",
    cost: 500000000000,
    category: "society",
    emoji: "⚡",
    description: "Shut down coal and gas, build solar and wind",
    totalNeed: "Electricity is 25% of global emissions",
    impactPerPurchase: "Eliminates 10 billion tons of CO₂ per year",
    funFact: "Would prevent 50% of climate change"
  },
  {
    id: 77,
    name: "Global pandemic prevention infrastructure",
    cost: 300000000000,
    category: "society",
    emoji: "🛡️",
    description: "Stop pandemics before they start",
    totalNeed: "COVID-19 cost $16 trillion",
    impactPerPurchase: "Prevents next 10 pandemics",
    funFact: "Prevention is 50x cheaper than response"
  },
  {
    id: 78,
    name: "Digitize and modernize every school globally",
    cost: 400000000000,
    category: "society",
    emoji: "💻",
    description: "Internet, devices, and modern curriculum worldwide",
    totalNeed: "617M youth lack basic skills",
    impactPerPurchase: "Educates 1.5 billion students properly",
    funFact: "Education is the most powerful investment"
  },
  {
    id: 79,
    name: "Fund complete cancer cure research",
    cost: 350000000000,
    category: "society",
    emoji: "🎗️",
    description: "Cure all forms of cancer permanently",
    totalNeed: "Cancer kills 10M people per year",
    impactPerPurchase: "Saves 10M lives annually",
    funFact: "Cancer will affect 1 in 2 people in their lifetime"
  },
  {
    id: 80,
    name: "Terraform Mars atmosphere",
    cost: 800000000000,
    category: "society",
    emoji: "🪐",
    description: "Make Mars breathable over 100 years",
    totalNeed: "Mars has 1% of Earth's atmosphere",
    impactPerPurchase: "Creates a second home for humanity",
    funFact: "Would take 100+ years but save species from extinction"
  },

  // 🧠 Weird / Fun / Absurd ($1M – $500B)
  {
    id: 81,
    name: "Buy Twitter (again)",
    cost: 44000000000,
    category: "absurd",
    emoji: "🐦",
    description: "Social media for the people",
    totalNeed: "Debatable if anyone needs this",
    impactPerPurchase: "You own a chaos machine",
    funFact: "Elon paid $44B for unlimited shitposting rights"
  },
  {
    id: 82,
    name: "Build a real-life Jurassic Park",
    cost: 150000000000,
    category: "absurd",
    emoji: "🦕",
    description: "Clone dinosaurs (if possible)",
    totalNeed: "Zero, but would be cool",
    impactPerPurchase: "Extinct species brought back, possible human extinction",
    funFact: "Life, uh, finds a way"
  },
  {
    id: 83,
    name: "Clone a woolly mammoth herd",
    cost: 5000000000,
    category: "absurd",
    emoji: "🦣",
    description: "De-extinction through genetic engineering",
    totalNeed: "Could restore Arctic ecosystems",
    impactPerPurchase: "100 mammoths roaming Siberia again",
    funFact: "We have intact mammoth DNA"
  },
  {
    id: 84,
    name: "Create a robot army for peacekeeping",
    cost: 80000000000,
    category: "absurd",
    emoji: "🤖",
    description: "AI-powered robots for conflict zones",
    totalNeed: "Armed conflict affects 1.8B people",
    impactPerPurchase: "100,000 peacekeeping robots deployed",
    funFact: "What could possibly go wrong?"
  },
  {
    id: 85,
    name: "Buy everyone on Earth a coffee",
    cost: 30000000000,
    category: "absurd",
    emoji: "☕",
    description: "One $4 coffee for all 8 billion humans",
    totalNeed: "Everyone deserves caffeine",
    impactPerPurchase: "8 billion smiles and jitters",
    funFact: "Massive global mood boost"
  },
  {
    id: 86,
    name: "Build an underwater city",
    cost: 90000000000,
    category: "absurd",
    emoji: "🌊",
    description: "Atlantis, but real this time",
    totalNeed: "Ocean is 70% of Earth's surface",
    impactPerPurchase: "City for 50,000 people under the sea",
    funFact: "We know more about space than the ocean"
  },
  {
    id: 87,
    name: "Create global free WiFi satellites",
    cost: 20000000000,
    category: "absurd",
    emoji: "📡",
    description: "Free internet for everyone, everywhere",
    totalNeed: "3.7B people are offline",
    impactPerPurchase: "Connects entire planet for free",
    funFact: "Knowledge should be free"
  },
  {
    id: 88,
    name: "Replace all plastic straws with paper",
    cost: 10000000000,
    category: "absurd",
    emoji: "🥤",
    description: "Save the turtles",
    totalNeed: "500M plastic straws used daily in US alone",
    impactPerPurchase: "Prevents 200M tons of plastic waste",
    funFact: "Straws are <1% of ocean plastic, but it's symbolic"
  },
  {
    id: 89,
    name: "Send cheese to the Moon",
    cost: 1000000,
    category: "absurd",
    emoji: "🧀",
    description: "Because why not",
    totalNeed: "The Moon needs cheese",
    impactPerPurchase: "1 ton of cheese on the Moon",
    funFact: "Finally proves the Moon is made of cheese"
  },
  {
    id: 90,
    name: "Fund a 1:1 scale Death Star",
    cost: 500000000000,
    category: "absurd",
    emoji: "⭐",
    description: "For peaceful purposes only",
    totalNeed: "None, please don't",
    impactPerPurchase: "A planet-destroying space station (decorative)",
    funFact: "Actual estimate: $852 quadrillion, so this is a steal"
  },
  {
    id: 91,
    name: "Turn the Sahara into a solar farm",
    cost: 200000000000,
    category: "absurd",
    emoji: "🌞",
    description: "Cover the desert in solar panels",
    totalNeed: "Sahara gets more sun than anywhere",
    impactPerPurchase: "Powers the entire world 4 times over",
    funFact: "Would solve energy forever"
  },
  {
    id: 92,
    name: "Build the world's largest roller coaster",
    cost: 3000000000,
    category: "absurd",
    emoji: "🎢",
    description: "Circumnavigate a continent",
    totalNeed: "For fun",
    impactPerPurchase: "500 miles of pure adrenaline",
    funFact: "Would take 3 hours to ride"
  },
  {
    id: 93,
    name: "Buy everyone an EV",
    cost: 400000000000,
    category: "absurd",
    emoji: "🚗",
    description: "Electric vehicle for every US adult",
    totalNeed: "Transport emissions must go to zero",
    impactPerPurchase: "100M EVs, eliminates 1.5B tons CO₂/year",
    funFact: "Would crash the used car market"
  },
  {
    id: 94,
    name: "Pay for world peace via UN programs",
    cost: 100000000000,
    category: "absurd",
    emoji: "☮️",
    description: "Fund peacekeeping and conflict resolution",
    totalNeed: "50 active conflicts worldwide",
    impactPerPurchase: "Ends multiple wars, saves millions of lives",
    funFact: "Peace is cheaper than war"
  },
  {
    id: 95,
    name: "Buy every Super Bowl ad slot for 10 years",
    cost: 20000000000,
    category: "absurd",
    emoji: "🏈",
    description: "All ads are yours",
    totalNeed: "For maximum influence",
    impactPerPurchase: "1,000 ad slots, 1 billion viewers per year",
    funFact: "You could broadcast anything to America"
  },
  {
    id: 96,
    name: "Make tuition free worldwide",
    cost: 300000000000,
    category: "absurd",
    emoji: "🎓",
    description: "Free college for everyone",
    totalNeed: "Education debt is $1.7T in US alone",
    impactPerPurchase: "Educates 200M students per year",
    funFact: "ROI on education is infinite"
  },
  {
    id: 97,
    name: "Create global universal healthcare",
    cost: 600000000000,
    category: "absurd",
    emoji: "🏥",
    description: "Free healthcare for all humans",
    totalNeed: "Half the world lacks healthcare access",
    impactPerPurchase: "Healthcare for 4 billion people",
    funFact: "US spends more per capita than countries with universal care"
  },
  {
    id: 98,
    name: "Turn Mars into a theme park",
    cost: 250000000000,
    category: "absurd",
    emoji: "🎡",
    description: "The ultimate tourist destination",
    totalNeed: "Space tourism is the future",
    impactPerPurchase: "Disney World... on Mars",
    funFact: "Low gravity rides would be insane"
  },
  {
    id: 99,
    name: "Build a time machine (research budget)",
    cost: 10000000000,
    category: "absurd",
    emoji: "⏰",
    description: "Fund theoretical physics research",
    totalNeed: "Time travel is theoretically possible",
    impactPerPurchase: "Maybe we crack time travel, maybe not",
    funFact: "Worth a shot, right?"
  },
  {
    id: 100,
    name: "Make yourself immortal (nanotech, AI, cryo)",
    cost: 150000000000,
    category: "absurd",
    emoji: "💀",
    description: "Cheat death with technology",
    totalNeed: "Everyone dies eventually... or do they?",
    impactPerPurchase: "You live forever (in theory)",
    funFact: "Some billionaires are already trying this"
  }
];

// Total budget
const TOTAL_BUDGET = 1000000000000; // $1 trillion

// Category definitions
const CATEGORIES = {
  micro: { name: "Micro Actions", emoji: "🌱", color: "#10b981" },
  community: { name: "Community Projects", emoji: "💧", color: "#3b82f6" },
  regional: { name: "Regional Development", emoji: "🌾", color: "#8b5cf6" },
  national: { name: "National Scale", emoji: "🏙️", color: "#f59e0b" },
  global_health: { name: "Global Health & Innovation", emoji: "🧬", color: "#ec4899" },
  mega: { name: "Mega-Projects", emoji: "🌎", color: "#ef4444" },
  space: { name: "Global Tech & Exploration", emoji: "🛰️", color: "#6366f1" },
  society: { name: "Societal Redesign", emoji: "💵", color: "#14b8a6" },
  absurd: { name: "Weird / Fun / Absurd", emoji: "🧠", color: "#f97316" }
};
