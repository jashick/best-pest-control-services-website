// One entry per service landing page, rendered by src/pages/[service].astro at /<slug>/.
// Structure map (CLAUDE.md): primary category Pest control service = homepage; secondary Animal control
// service = /wildlife-removal/. Every page is written for B.E.S.T. from their old site, GBP and Jeremy's notes.
// Unconfirmed details are listed in CLAUDE.md under "Unconfirmed claims".

export type Service = {
  slug: string;
  kind: 'category' | 'service' | 'situation';
  parent?: string;
  gbpCategory?: string;
  navName: string;
  title: string;
  description: string;
  h1: string;
  sub: string;
  blurb: string;
  answer: string;
  intro: string[];
  includes: string[];
  signs: string[];
  why: { t: string; d: string }[];
  sections?: { id?: string; h: string; p: string[]; list?: string[] }[];
  photos: { src: string; alt: string }[];
  faqs: { q: string; a: string }[];
  emergency?: boolean;
};

export const services: Service[] = [
  {
    slug: 'general-pest-control',
    kind: 'service',
    navName: 'General Pest Control',
    title: 'General Pest Control in Sheboygan Falls, WI | B.E.S.T.',
    description: 'Home and business pest control in Sheboygan Falls and Sheboygan County: spiders, ants, beetles, earwigs and more. Family-owned. Call (920) 698-9933.',
    h1: 'General Pest Control in Sheboygan Falls, WI',
    sub: 'One-time treatments and ongoing plans that stop insects outside, before they get in.',
    blurb: 'Spiders, beetles, earwigs, silverfish and the rest of the bugs that show up every Wisconsin season.',
    answer: 'B.E.S.T. Pest Control Services provides general pest control for homes and businesses in Sheboygan Falls, Sheboygan, Plymouth, Kohler and the surrounding counties. Each visit starts with an inspection of the areas that attract pests and the gaps they use to get in, then a targeted treatment, mostly around the outside of the building, plus advice on keeping pests out.',
    intro: [
      'Most bugs that end up in a Sheboygan County basement or kitchen started outside: spiders along the foundation, boxelder bugs on the sunny side of the house, earwigs and millipedes under mulch, silverfish where it stays damp. That is why our programs focus on the outside of your home first. We build a barrier around the perimeter so insects have a much harder time getting in, and we treat inside when they already have.',
      'We do not believe in one broad spray for everything. We identify what you actually have, find out why it is there, and pick the method that fits your home, your kids and your pets. If something else around the house is inviting pests in, like firewood stacked against the siding or shrubs touching the deck, we will point it out.',
      'Pests change with the Wisconsin seasons, so many customers choose ongoing service instead of waiting for the next surprise. If you only need a one-time treatment, that is fine too.',
    ],
    includes: [
      'Inspection of the foundation, entry points and the spots that attract pests',
      'Exterior perimeter treatment to stop insects before they get inside',
      'Interior treatment when pests are already in the living space',
      'Spiders, including cellar spiders and wolf spiders',
      'Beetles, boxelder bugs, earwigs, silverfish, springtails and millipedes',
      'Pantry pests, small flies and other household insects',
      'Ongoing seasonal treatment plans or one-time service',
    ],
    signs: [
      'You keep finding spiders or webs in the basement, garage or window corners',
      'Beetles or boxelder bugs gather on the house every fall',
      'Tiny jumping insects show up in a bathroom or damp basement',
      'Moths or beetles turn up in flour, cereal or pet food',
      'Store-bought sprays work for a week and then the bugs are back',
    ],
    why: [
      { t: 'Targeted, not broad-spectrum', d: 'We treat for the pest you have, where it lives, instead of spraying everything and hoping.' },
      { t: 'Outside first', d: 'A perimeter barrier keeps most insects from ever reaching the inside of your home.' },
      { t: 'Family-owned', d: 'You deal with Trish, Jason and a small local team, not a call center.' },
    ],
    sections: [
      {
        h: 'Why our service focuses on the outside of your home',
        p: [
          'Customers often ask why we spend most of a visit outside when the bugs are inside. The answer is simple: the goal is to stop pests before they get into your home. A barrier around the perimeter cuts down on what makes it through the foundation, windows and doors. If pests have already moved in, we have interior treatments that take care of them.',
          'In most cases you do not need to be home for an exterior treatment, as long as we have clear access to the perimeter of the property.',
        ],
      },
      {
        h: 'How you can help the treatment work',
        p: ['A few simple maintenance tasks make a big difference between visits:'],
        list: [
          'Store firewood 10 to 20 feet from the house and off the ground',
          'Trim shrubs and branches so they do not touch the house or deck',
          'Replace loose or missing weather stripping around doors',
          'Keep gutters and drains clear and fix leaky pipes',
          'Store items in plastic or metal bins instead of cardboard',
        ],
      },
    ],
    photos: [
      { src: 'technician-treating-eaves-brick-home', alt: 'B.E.S.T. Pest Control technician treating the eaves of a brick home' },
      { src: 'best-pest-control-truck-sheboygan-falls', alt: 'B.E.S.T. Pest Control Services service truck' },
    ],
    faqs: [
      { q: 'Why do you treat the outside of my house when the bugs are inside?', a: 'Our programs are designed to stop pests before they get in. We create a barrier around the perimeter of your home so insects have a harder time getting inside, and we treat the inside too when pests are already there.' },
      { q: 'Is pest control safe for my kids and pets?', a: 'Safety is our first priority, and our technicians are trained on industry safety rules. Most of our products go on wet and dry over a few hours. Keep kids and pets off treated areas until they are dry; after that it is safe to let them back. In most cases you do not need to leave your home during a treatment.' },
      { q: 'How soon will I see results?', a: 'It depends on the pest, how big the problem is, the time of year and the products used. In most cases you will notice a clear drop in activity within one to two days, and it can take a few days for the treatment to get ahead of the pests’ breeding.' },
      { q: 'When can I clean after a pest control treatment?', a: 'We usually recommend waiting 3 to 5 days before a deep clean. If baits were placed, you can clean around them as long as you leave the bait alone. The best time for a thorough cleaning is right before your appointment.' },
    ],
  },
  {
    slug: 'ant-control',
    kind: 'service',
    parent: 'general-pest-control',
    navName: 'Ant Control',
    title: 'Ant Control in Sheboygan Falls, WI | B.E.S.T. Pest',
    description: 'Carpenter ants, pavement ants and odorous house ants removed from Sheboygan County homes. We find the colony, not just the trail. Call (920) 698-9933.',
    h1: 'Ant Control in Sheboygan Falls, WI',
    sub: 'We track the trail back to the colony and treat where the ants actually live.',
    blurb: 'Carpenter ants, pavement ants and the tiny sugar ants that march across the kitchen.',
    answer: 'B.E.S.T. Pest Control Services treats ants in homes and businesses throughout Sheboygan County and nearby counties, including carpenter ants, pavement ants and odorous house ants. The team identifies the species, finds where the colony is nesting and where the ants are getting in, then treats the source and helps you remove what is attracting them.',
    intro: [
      'Wisconsin has well over a hundred ant species, but only a few cause most of the calls we get. Carpenter ants are the big black ants that nest in damp or decaying wood and can weaken the wood they tunnel through. Pavement ants nest in cracks along foundations, driveways and sidewalks and come in after crumbs and spills. Odorous house ants are tiny, smell a little like coconut when crushed, and love sweets and grease.',
      'Spraying the trail on your counter kills the ants you can see and leaves the colony untouched. We figure out which ant you have first, because each one is handled differently, then go after the nest and the way in.',
    ],
    includes: [
      'Species identification (carpenter, pavement, odorous house and others)',
      'Finding the colony and the entry points, inside and out',
      'Targeted treatment of nests, trails and the foundation',
      'Carpenter ant checks of damp wood, window frames, decks and sill plates',
      'Advice on moisture, food sources and landscaping that draw ants in',
      'Follow-up or ongoing service when a colony is large or keeps coming back',
    ],
    signs: [
      'Trails of small ants along the counter, sink or baseboards',
      'Large black ants inside, especially in spring',
      'Little piles of sawdust-like material near wood trim or in the basement',
      'Winged ants coming out of a wall or window frame',
      'Little mounds of sand along the driveway or foundation',
    ],
    why: [
      { t: 'We treat the colony', d: 'Killing the trail is temporary. Getting the nest is what ends the problem.' },
      { t: 'Carpenter ant know-how', d: 'Jason’s building background helps us spot the damp wood and gaps carpenter ants use.' },
      { t: 'Safe around family', d: 'We use environmentally responsible methods whenever possible.' },
    ],
    sections: [
      {
        h: 'Carpenter ants deserve a closer look',
        p: [
          'Carpenter ants do not eat wood, but they hollow it out to nest, and they are drawn to wood that has been softened by moisture. In older homes around Sheboygan Falls and along the lakeshore that often means window sills, porch posts, roof leaks or a sill plate that stays damp. If you see large black ants indoors in late winter or early spring, there is a good chance a nest is in the structure itself.',
          'Treating carpenter ants well means finding the satellite nests and the moisture problem behind them. We will tell you what we found so you can fix the wet wood, too.',
        ],
      },
    ],
    photos: [
      { src: 'ant-trail-kitchen-counter', alt: 'Trail of black ants on a kitchen countertop heading for spilled sugar' },
    ],
    faqs: [
      { q: 'Are carpenter ants dangerous to my house?', a: 'They can be. Carpenter ants hollow out wood to build nests, usually wood that is already damp or decaying. Over time that can weaken window frames, decks and other wooden parts of a house, so it is worth having a large black ant problem checked.' },
      { q: 'Why do ant baits and sprays from the store not work?', a: 'Over-the-counter products usually kill the ants you can see without reaching the colony. Different ants also need different approaches, so treating the wrong species can make little difference or even split a colony into new nests.' },
      { q: 'How do I keep ants out after treatment?', a: 'Wipe up sugary spills and crumbs, store food in sealed containers, fix leaks, and keep mulch, shrubs and firewood away from the foundation. We will point out anything specific we saw at your home.' },
    ],
  },
  {
    slug: 'cockroach-control',
    kind: 'service',
    parent: 'general-pest-control',
    navName: 'Cockroach Control',
    title: 'Cockroach Control in Sheboygan Falls, WI | B.E.S.T.',
    description: 'Cockroach control for homes, apartments, restaurants and bars in Sheboygan County and nearby. Customized treatment and prevention. Call (920) 698-9933.',
    h1: 'Cockroach Control in Sheboygan Falls, WI',
    sub: 'Customized treatment that eliminates the roaches you have and keeps new ones from settling in.',
    blurb: 'Discreet, thorough roach treatment for homes, apartments, restaurants and bars.',
    answer: 'B.E.S.T. Pest Control Services eliminates cockroaches in homes, apartment buildings, restaurants and bars across Sheboygan County and nearby counties. Treatment is tailored to the size of the infestation and includes prevention steps so the roaches do not come back.',
    intro: [
      'Wisconsin winters keep a lot of pests quiet, but not cockroaches. Inside a warm building they breed all year, and they hide in the tightest spots they can find: behind appliances, under sinks, inside cabinets and wall voids. Seeing one in daylight usually means there are many more you do not see.',
      'Roaches are more than gross. They carry bacteria and allergens that can trigger asthma, and they contaminate food and surfaces. We size up the infestation, treat where the roaches live and breed, and give you a plan to keep them from returning. For businesses we keep things confidential and professional.',
    ],
    includes: [
      'Inspection of kitchens, bathrooms, appliances and other hiding spots',
      'Treatment customized to the size and severity of the infestation',
      'Follow-up visits when an infestation needs more than one treatment',
      'Apartment buildings and multi-unit properties',
      'Restaurants, bars and other commercial kitchens',
      'Prevention advice on sanitation, clutter and moisture',
    ],
    signs: [
      'Roaches running when you turn on a kitchen or bathroom light',
      'Small dark droppings, like pepper, in drawers or cabinets',
      'Egg cases behind appliances or under sinks',
      'A musty, oily odor in a cabinet or closet',
      'Roaches seen during the day, a sign of a larger population',
    ],
    why: [
      { t: 'Customized plans', d: 'A few roaches and a building-wide problem need very different treatment. We size it first.' },
      { t: 'Confidential & professional', d: 'Homes and businesses get discreet service that respects your privacy and reputation.' },
      { t: 'Prevention built in', d: 'We go beyond a quick fix so the problem stays solved.' },
    ],
    photos: [
      { src: 'cockroach-by-baseboard', alt: 'Cockroach on a kitchen floor next to the baseboard and cabinet' },
    ],
    faqs: [
      { q: 'Can cockroaches live through a Wisconsin winter?', a: 'Outdoors they struggle, but inside a heated home, apartment or restaurant they live and breed all year. That is why roach problems do not go away on their own in the winter.' },
      { q: 'Do you treat cockroaches in restaurants and bars?', a: 'Yes. We serve homeowners, apartment complexes, restaurants, bars and other commercial properties, and we keep commercial service confidential.' },
      { q: 'Will one treatment get rid of cockroaches?', a: 'Small problems can clear up quickly, but established infestations usually need follow-up because eggs hatch after the first treatment. We will tell you what to expect after we see the size of the problem.' },
    ],
  },
  {
    slug: 'bed-bug-treatment',
    kind: 'service',
    parent: 'general-pest-control',
    navName: 'Bed Bug Treatment',
    title: 'Bed Bug Treatment in Sheboygan Falls, WI | B.E.S.T.',
    description: 'Bed bug inspection and treatment for homes, apartments and businesses in Sheboygan County and nearby. Discreet, thorough service. Call (920) 698-9933.',
    h1: 'Bed Bug Treatment in Sheboygan Falls, WI',
    sub: 'A careful inspection, a thorough treatment plan and discreet service from start to finish.',
    blurb: 'Discreet bed bug inspections and treatment so you can sleep through the night again.',
    answer: 'B.E.S.T. Pest Control Services inspects for and treats bed bugs in homes, apartments and businesses throughout Sheboygan County and nearby counties. Because bed bugs hide in the smallest cracks and lay eggs quickly, the team starts with a careful inspection and builds a treatment plan that covers the bugs and their eggs.',
    intro: [
      'Bed bugs are about the size of an apple seed before they feed, and that small, flat body lets them hide in mattress seams, box springs, bed frames, outlets and furniture. They come out at night to feed, and the bites show up differently on different people, which is why they are easy to miss at first.',
      'A single female can lay a few eggs a day and hundreds over her life, so a small problem does not stay small. Store-bought sprays tend to scatter bed bugs into new rooms. Professional treatment that reaches the hiding spots and the eggs is the way to actually end it.',
    ],
    includes: [
      'Detailed inspection of beds, furniture and the rooms around them',
      'A treatment plan that targets live bugs and their eggs',
      'Follow-up to confirm the bed bugs are gone',
      'Instructions to prepare your home before treatment',
      'Apartments, multi-unit buildings and commercial properties',
      'Discreet service and confidential scheduling',
    ],
    signs: [
      'Itchy red bites, often in a line or cluster, that appear overnight',
      'Small rust-colored spots on sheets or the mattress',
      'Tiny reddish-brown bugs or pale shed skins in mattress seams',
      'A sweet, musty smell in the bedroom',
      'You recently traveled or brought home used furniture',
    ],
    why: [
      { t: 'Thorough inspection', d: 'Bed bugs are masters of hide-and-seek. Finding every hiding spot is what makes treatment work.' },
      { t: 'Discreet service', d: 'Confidential and professional for homes, apartments and businesses.' },
      { t: 'Trish answers the phone', d: 'Customers tell us Trish made them feel heard and explained everything clearly.' },
    ],
    photos: [
      { src: 'bed-bugs-mattress-seam', alt: 'Bed bugs and eggs along the seam of a mattress' },
    ],
    faqs: [
      { q: 'How do I know if I have bed bugs?', a: 'Look for itchy bites that appear overnight, small rust-colored spots on sheets, tiny reddish-brown bugs or shed skins in mattress seams and bed frames, and sometimes a musty smell. If you are not sure, call us for an inspection.' },
      { q: 'Should I throw out my mattress?', a: 'Usually not. Bed bugs hide in many places besides the mattress, so throwing it out rarely solves the problem and can spread bugs through the house. Wait until we inspect and give you a plan.' },
      { q: 'Can I treat bed bugs myself?', a: 'Over-the-counter sprays often miss the eggs and drive bed bugs into new rooms or neighboring units. Because they reproduce quickly, professional treatment is the most reliable way to get rid of them.' },
    ],
  },
  {
    slug: 'flea-control',
    kind: 'service',
    parent: 'general-pest-control',
    navName: 'Flea Control',
    title: 'Flea Control in Sheboygan Falls, WI | B.E.S.T. Pest',
    description: 'Flea treatment for homes and yards in Sheboygan Falls, Sheboygan and nearby towns. We treat the house so fleas stop coming back. Call (920) 698-9933.',
    h1: 'Flea Control in Sheboygan Falls, WI',
    sub: 'Treating your pet is step one. We take care of the fleas and eggs living in your home.',
    blurb: 'Home and yard flea treatment that works alongside your vet’s pet treatment.',
    answer: 'B.E.S.T. Pest Control Services treats flea infestations in homes across Sheboygan County and nearby counties. Fleas spend most of their life cycle as eggs and larvae in carpets, bedding and furniture, so the team treats the home itself and works alongside the treatment your veterinarian gives your pets.',
    intro: [
      'Most flea problems start with a dog or cat, but sometimes they come in with wildlife living under a porch or in a garage. By the time you see adult fleas, there are usually eggs, larvae and pupae hidden in carpet, rugs, pet beds and furniture. That hidden part of the life cycle is why fleas keep coming back after you treat the pet.',
      'We treat the areas where fleas develop, tell you how to prepare and what to do afterward, and help you time things with your vet’s pet treatment so the cycle breaks for good. If an animal living under the house is the source, our wildlife team can deal with that, too.',
    ],
    includes: [
      'Inspection to find where fleas are breeding in the home',
      'Treatment of carpets, rugs, furniture and pet areas',
      'Yard and outdoor resting areas when needed',
      'Prep and aftercare instructions (vacuuming, washing bedding)',
      'Checking for wildlife under decks or porches that may be the source',
    ],
    signs: [
      'Your pet is scratching, biting or licking more than usual',
      'Small itchy bites around your ankles and lower legs',
      'Tiny dark insects jumping on carpet, socks or pet bedding',
      'Specks of “flea dirt” on your pet or in its bedding',
      'Fleas came back after you treated your pet',
    ],
    why: [
      { t: 'We break the cycle', d: 'Treating where eggs and larvae live is what stops the next wave.' },
      { t: 'Pet-conscious methods', d: 'Safety for your family and pets comes first, every visit.' },
      { t: 'Wildlife covered too', d: 'If a raccoon or opossum is bringing fleas in, we can remove it and seal the gap.' },
    ],
    photos: [
      { src: 'fleas-in-carpet', alt: 'Fleas in carpet fibers next to a dog’s paw' },
    ],
    faqs: [
      { q: 'If I treat my pet, why do I still have fleas?', a: 'Adult fleas on your pet are only a small part of the population. Eggs, larvae and pupae live in carpet, bedding and furniture and keep hatching for weeks. Treating the home along with your pet is what ends the cycle.' },
      { q: 'How do I get ready for a flea treatment?', a: 'We will give you instructions for your home, but it usually means vacuuming carpets and furniture, washing pet bedding and picking items up off the floor so we can reach the areas fleas live in.' },
      { q: 'Can I have fleas without pets?', a: 'Yes. Wildlife such as raccoons, opossums or stray animals living under a porch, deck or in a garage can bring fleas close to a home. If that is the source, the animal needs to be dealt with too.' },
    ],
  },
  {
    slug: 'stinging-insect-removal',
    kind: 'service',
    parent: 'general-pest-control',
    navName: 'Wasp & Hornet Removal',
    title: 'Wasp & Hornet Removal in Sheboygan Falls, WI | B.E.S.T.',
    description: 'Wasp, hornet and yellow jacket nest removal in Sheboygan County and nearby. Safe treatment of hidden and hard-to-reach nests. Call (920) 698-9933.',
    h1: 'Wasp, Hornet & Yellow Jacket Removal in Sheboygan Falls',
    sub: 'Safe treatment of nests in eaves, wall voids, the ground and trees, so you can enjoy your yard again.',
    blurb: 'Yellow jackets, bald-faced hornets and paper wasps, including nests hidden in walls.',
    answer: 'B.E.S.T. Pest Control Services removes wasp, hornet and yellow jacket nests for homes and businesses throughout Sheboygan County and nearby counties. Trained, certified technicians identify the insect, find hidden nests in wall voids, attics, eaves and the ground, and treat them safely, then help seal the openings they used.',
    intro: [
      'Stinging insects are the reason for a lot of our summer and fall calls. Yellow jackets nest in the ground, in wall voids and attics, and they get aggressive late in the season. Bald-faced hornets, which are actually a kind of yellow jacket, build the big gray paper nests you see hanging in trees and on eaves. Paper wasps and mud daubers build smaller nests under overhangs, decks and soffits.',
      'Knocking down a nest yourself can set off a swarm, and a nest inside a wall can push wasps into the house if the opening is blocked first. We bring the equipment and training to treat nests safely, explain what the wasps are doing, and tell you how to fix the opening once the nest is dead.',
    ],
    includes: [
      'Yellow jacket nests in the ground, walls, soffits and attics',
      'Bald-faced hornet and European hornet nests in trees, shrubs and eaves',
      'Paper wasp and mud dauber nests under decks, overhangs and playsets',
      'Identification of bees versus wasps before any treatment',
      'Advice on sealing the entry point once the nest is dead',
      'Preventive treatment for homes that get nests every year',
    ],
    signs: [
      'Wasps flying in and out of a gap in siding, soffit or a vent',
      'A gray paper nest in a tree, bush or under the eaves',
      'Yellow jackets coming up out of a hole in the lawn',
      'Wasps showing up inside the house, a sign of a nest in the wall',
      'Someone in the home is allergic to stings',
    ],
    why: [
      { t: 'Hidden nests handled', d: 'Reviewers mention yellow jackets in two places and nests in tricky spots, found and treated.' },
      { t: 'Explained clearly', d: 'Customers say Trish explained how the wasps behave and what to do once the nest is gone.' },
      { t: 'Safe for your family', d: 'Never attempt to remove a nest yourself, especially if anyone in the home is allergic.' },
    ],
    sections: [
      {
        h: 'Wasps, hornets, yellow jackets and bees: what is the difference?',
        p: [
          'Paper wasps are slender with long legs and build open, honeycomb-style nests that hang from overhangs. Hornets are larger; European hornets look like giant yellow jackets, and bald-faced hornets have black-and-white markings and build large enclosed paper nests. Yellow jackets are smaller with bright yellow markings, love sugary drinks and garbage, and nest in the ground, in walls and in attics.',
          'Bees are different. Honey bees and bumble bees are valuable pollinators and usually gentle unless provoked. Carpenter bees are solitary, shiny-black bees that bore holes in wood. Tell us what you are seeing and we will help sort out what it is before anything is treated.',
        ],
      },
    ],
    photos: [
      { src: 'bald-faced-hornet-nest-removed', alt: 'Large bald-faced hornet nest removed from a property' },
      { src: 'hornet-nest-in-tree', alt: 'Hornet nest hanging in a tree' },
      { src: 'technician-bee-suit-stinging-insects', alt: 'B.E.S.T. technician in a protective bee suit next to the service truck' },
    ],
    faqs: [
      { q: 'Should I plug the hole yellow jackets are using?', a: 'Not before the nest is treated. Blocking the opening of a nest in a wall can force the yellow jackets to chew their way into the house. Once the nest is dead, we will tell you how to seal the spot.' },
      { q: 'Are bald-faced hornets really hornets?', a: 'No. Bald-faced hornets are part of the yellow jacket and wasp family. They got the name because of their larger size and aggressive behavior around their big gray paper nests.' },
      { q: 'Do you remove honey bees?', a: 'Honey bees and bumble bees are important pollinators and are usually gentle. Call us and describe what you are seeing; we will help identify it and talk through the right option for your situation.' },
      { q: 'How fast can you come out for a wasp nest?', a: 'Call (920) 698-9933 and we will give you a time frame. Our crews are often in your area, and many customers mention how quickly we were able to get out.' },
    ],
  },
  {
    slug: 'rodent-control',
    kind: 'service',
    navName: 'Rodent Control',
    title: 'Rodent Control in Sheboygan Falls, WI | B.E.S.T. Pest',
    description: 'Mice, rats, voles and shrews removed from Sheboygan County homes and businesses with traps, baits and exclusion. Call (920) 698-9933 to schedule an inspection.',
    h1: 'Rodent Control in Sheboygan Falls, WI',
    sub: 'Inspection, removal and prevention for mice, rats and other rodents getting into your home.',
    blurb: 'Mice, Norway rats, voles and shrews: trapped, baited and kept out.',
    answer: 'B.E.S.T. Pest Control Services removes mice, rats, voles and shrews from homes and businesses across Sheboygan County and nearby counties. Service starts with a professional inspection to identify the rodent and how far the problem has spread, followed by a combination of traps, baits and exclusion to remove them and keep them from getting back in.',
    intro: [
      'Scratching in the walls at night, droppings in the pantry, chewed food packaging: rodents are one of the most stubborn pests a Wisconsin home can get, and fall is when they push indoors. House mice can squeeze through the smallest gaps and climb walls and pipes. Norway rats are bigger and bolder. Deer mice and white-footed mice nest in attics and walls, and voles and shrews come in from the yard.',
      'Rodents are more than a nuisance. They can carry diseases such as hantavirus and leptospirosis, and they gnaw on wires, pipes and insulation. A single mouse you see usually means more you do not. Our goal is to remove the rodents you have and close up the way they got in.',
    ],
    includes: [
      'Inspection to identify the rodent and the extent of the problem',
      'Traps and bait placed where rodents travel, away from kids and pets',
      'House mice, deer mice, field mice and white-footed mice',
      'Norway rats and roof rats',
      'Voles and shrews',
      'Sealing entry points and prevention tips',
      'Long-term rodent exclusion for homes that keep getting mice',
    ],
    signs: [
      'Small dark droppings in drawers, cabinets or along baseboards',
      'Scratching or scurrying in walls or ceilings, especially at night',
      'Chewed wires, insulation, furniture or food packaging',
      'A musky odor that will not go away',
      'Nesting material (shredded paper or insulation) in storage areas',
    ],
    why: [
      { t: 'We find how they get in', d: 'Trapping without sealing just makes room for the next mouse. We do both.' },
      { t: 'Rodent specialist on staff', d: 'Co-owner Jason is the team’s rodent and wildlife expert.' },
      { t: 'Clear pricing up front', d: 'An inspection fee applies, and we go over the cost when you call.' },
    ],
    sections: [
      {
        h: 'Why mice move in every fall in Sheboygan County',
        p: [
          'When the nights get cold, mice and other rodents look for warmth and food, and a house with a gap at the foundation, garage door or utility line is an easy target. Fields, woodlots and farmland around towns like Sheboygan Falls, Plymouth and Kiel mean there is no shortage of rodents nearby. Fall is the best time to have a home checked and sealed before they settle in for the winter.',
        ],
      },
    ],
    photos: [
      { src: 'technician-crawlspace-inspection', alt: 'B.E.S.T. technician inspecting a crawlspace for rodent activity' },
      { src: 'crawlspace-inspection-dark', alt: 'Technician checking under a home for rodent entry points' },
    ],
    faqs: [
      { q: 'How much does rodent control cost?', a: 'An inspection fee applies for rodent service, and we will go over the cost when you call. After the inspection we will explain what we found and what it will take to remove the rodents and keep them out.' },
      { q: 'I only saw one mouse. Do I really need help?', a: 'A single rodent sighting is usually a sign of more that you have not seen. Mice breed quickly and travel inside walls, so it is worth acting early.' },
      { q: 'How do mice get into my house?', a: 'Through very small gaps around the foundation, utility lines, garage doors, vents and siding. Mice can climb walls and pipes, so entry points are not always near the ground.' },
    ],
  },
  {
    slug: 'rodent-exclusion',
    kind: 'service',
    parent: 'rodent-control',
    navName: 'Rodent Exclusion',
    title: 'Rodent Exclusion in Sheboygan Falls, WI | B.E.S.T. Pest',
    description: 'Long-term rodent exclusion: a full inside-and-out inspection and a plan to seal the gaps mice use. Sheboygan County and nearby. Call (920) 698-9933.',
    h1: 'Rodent Exclusion in Sheboygan Falls, WI',
    sub: 'Find every way in, seal it the right way, and stop the cycle of trapping mice every fall.',
    blurb: 'A full inspection and sealing plan to keep mice and other rodents out for the long haul.',
    answer: 'B.E.S.T. Pest Control Services offers long-term rodent exclusion for homes and businesses in Sheboygan County and nearby counties. A certified specialist inspects the building inside and out, finds the gaps rodents use to get in, and provides a detailed prevention plan, drawing on more than 27 years of maintenance, construction and facilities management experience.',
    intro: [
      'Trapping mice every fall treats the symptom. Exclusion treats the cause. Our exclusion service starts with a full inspection of your home, inside and out, to find the gaps and weak points rodents use: foundation cracks, gaps around pipes and wires, garage door seals, vents, rooflines and exposed foam board insulation along the foundation.',
      'Jason brings a journeyman millwright background and decades of hands-on experience in maintenance, construction and facilities work, so we look at a building the way a builder does. We work out the most effective and cost-effective way to seal each opening, then give you a detailed rodent prevention plan.',
    ],
    includes: [
      'Full interior and exterior inspection by a certified specialist',
      'A detailed rodent prevention plan for your home or business',
      'Sealing gaps around the foundation, pipes, wires and vents',
      'Garage door, sill and siding gaps',
      'Roofline and ridge vent openings (Jason is a certified Ridge-Guard installer)',
      'Advice on landscaping and exposed foam insulation at the foundation',
    ],
    signs: [
      'You trap mice every fall and they keep coming back',
      'You have already had rodents removed and want them to stay gone',
      'There are visible gaps around pipes, the foundation or garage door',
      'Exposed foam board insulation along the foundation has holes chewed in it',
      'You hear animals in the attic or along the roofline',
    ],
    why: [
      { t: 'A builder’s eye', d: 'More than 27 years in maintenance, construction and facilities management goes into every inspection.' },
      { t: 'Done to last', d: 'We seal openings with materials rodents cannot chew through, not a can of foam alone.' },
      { t: 'Prevention plan in writing', d: 'You get a detailed plan so you know what was found and what was done.' },
    ],
    sections: [
      {
        h: 'Common rodent entry points we find',
        p: ['Every building is different, but these are the spots we check on nearly every exclusion inspection:'],
        list: [
          'Where pipes, wires and the air conditioning line go through the wall',
          'Gaps under garage doors and worn door sweeps',
          'Foundation cracks and the joint between foundation and siding',
          'Exposed foam board insulation along the foundation',
          'Dryer, bath and attic vents',
          'Roof ridge vents, soffits and fascia gaps',
        ],
      },
    ],
    photos: [
      { src: 'technician-sealing-foundation-exclusion', alt: 'Technician sealing a gap along a home’s foundation during rodent exclusion' },
      { src: 'jason-yost-owner-best-pest', alt: 'Jason Yost, co-owner and rodent and wildlife expert at B.E.S.T. Pest Control' },
    ],
    faqs: [
      { q: 'What is rodent exclusion?', a: 'Exclusion means finding and sealing the openings rodents use to get into a building, so they cannot get back in once the current ones are removed. It is the long-term fix, compared with trapping mice every season.' },
      { q: 'Can I just use spray foam to seal the holes?', a: 'Foam on its own is easy for rodents to chew through. Lasting exclusion uses materials rodents cannot gnaw, applied in the right places. We work out the most effective and cost-effective option for each opening.' },
      { q: 'Do you do exclusion for businesses?', a: 'Yes. We work with homes, apartment complexes, restaurants, bars and industrial and commercial properties.' },
    ],
  },
  {
    slug: 'wildlife-removal',
    kind: 'category',
    gbpCategory: 'Animal control service',
    navName: 'Wildlife Removal',
    title: 'Wildlife Removal in Sheboygan Falls, WI | B.E.S.T. Pest',
    description: 'Raccoon, squirrel, bat, skunk and opossum removal in Sheboygan County and nearby. Humane removal, exclusion and repair. Call (920) 698-9933.',
    h1: 'Wildlife Removal in Sheboygan Falls, WI',
    sub: 'Humane removal of raccoons, squirrels, bats and other animals, then we seal them out for good.',
    blurb: 'Raccoons, squirrels, bats, skunks, opossums and more, removed humanely and sealed out.',
    answer: 'B.E.S.T. Pest Control Services provides wildlife removal and exclusion for homes and businesses across Sheboygan County and nearby counties, including raccoons, squirrels, chipmunks, bats, skunks, opossums, woodchucks, moles, gophers and muskrats. The team identifies the animal and its entry points, removes it humanely, seals the openings and can repair the damage.',
    intro: [
      'Living near the Sheboygan River, Lake Michigan and all the woods and farmland of eastern Wisconsin means wildlife is never far away, and sometimes it moves in. Raccoons get into attics, sheds and garages. Squirrels nest in attics and walls and chew wood and wiring. Bats roost in attics and walls. Skunks, opossums and woodchucks dig in under decks, porches and sheds.',
      'Different animals need different methods, and handling wildlife yourself can be dangerous because they may be aggressive or carry diseases like rabies. We identify the animal and how it got in, remove it as humanely as possible, seal the entry points and deal with what attracted it. All of our removal and exclusion work follows Wisconsin wildlife regulations and building codes.',
    ],
    includes: [
      'Raccoons in attics, chimneys, sheds and garages',
      'Squirrels and chipmunks in attics, walls and under porches',
      'Bat exclusion, timed around Wisconsin’s bat maternity season',
      'Skunks, opossums and woodchucks under decks, porches and sheds',
      'Moles, gophers, muskrats and other yard and shoreline animals',
      'Sealing entry points and addressing attractants',
      'Damage repair to restore the area the animal got into',
    ],
    signs: [
      'Thumping, scratching or chirping in the attic or walls',
      'Torn soffit, chewed fascia or a hole near the roofline',
      'Droppings or a strong smell in the attic or garage',
      'Digging under the deck, porch, shed or foundation',
      'Bats flying out of a roofline or chimney at dusk',
    ],
    why: [
      { t: 'Wildlife expert on the team', d: 'Co-owner Jason leads our rodent and wildlife work and is a Wisconsin certified contractor.' },
      { t: 'Humane and legal', d: 'Removal and exclusion methods follow Wisconsin wildlife regulations and building codes.' },
      { t: 'We fix the way in', d: 'Sealing entry points and repairing damage is what keeps the next animal out.' },
    ],
    sections: [
      {
        h: 'Bats: timing matters in Wisconsin',
        p: [
          'Wisconsin protects its bats, and the state DNR sets a no-exclusion period each summer while mothers are raising flightless pups. The DNR’s current guidance puts that window at June 1 through July 31, unless the bats pose a health or safety risk to people in the home. If we find bats during that time, we will plan the exclusion for when it can be done safely and legally, and seal the entry points once the bats are out.',
        ],
      },
    ],
    photos: [
      { src: 'raccoon-in-soffit', alt: 'Raccoon peeking out of a torn soffit at a home’s roofline' },
    ],
    faqs: [
      { q: 'How much does wildlife removal cost?', a: 'An inspection fee applies, and we will go over the cost when you call. Every animal and building is different, so after the inspection we explain what we found and what removal, exclusion and any repair will involve.' },
      { q: 'Can you remove bats in the summer?', a: 'Wisconsin does not allow bat exclusion during the maternity season, which the DNR currently lists as June 1 through July 31, except when bats are a health or safety risk to people. We will schedule the work for the right time and seal the openings once the bats are out.' },
      { q: 'Is it safe to remove a raccoon or squirrel myself?', a: 'It can be risky. Wildlife may bite or scratch, can carry diseases like rabies, and different animals need different methods. Misidentifying the animal or sealing a hole with babies inside can make things worse.' },
      { q: 'Will you repair the damage?', a: 'Yes. We offer repair services to restore your property after wildlife damage, along with sealing the entry points.' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;
export const categories = services.filter((s) => s.kind === 'category');
export const childrenOf = (slug: string) => services.filter((s) => s.parent === slug);
