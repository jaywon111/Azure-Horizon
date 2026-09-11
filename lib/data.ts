export const rooms = [
  {
    slug: "ocean-suite",
    name: "Ocean Suite",
    price: 1200,
    size: "820 sq ft",
    occupancy: 2,
    view: "Pacific Ocean",
    desc: "The signature suite. A private balcony cantilevers over the Pacific, with a walnut-and-linen interior, freestanding soaking tub, and a hand-tuned Steinway.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    amenities: ["Private balcony", "Marble ensuite", "Steinway piano", "Nespresso", "Butler service"],
  },
  {
    slug: "garden-villa",
    name: "Garden Villa",
    price: 1850,
    size: "1,400 sq ft",
    occupancy: 3,
    view: "Botanical garden",
    desc: "A secluded villa hidden behind olive trees, with a private plunge pool, outdoor shower, and a wood-burning fireplace that we light for you at dusk.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    amenities: ["Private plunge pool", "Outdoor shower", "Fireplace", "Personal chef option", "Bicycles"],
  },
  {
    slug: "cliff-house",
    name: "The Cliff House",
    price: 4200,
    size: "2,600 sq ft",
    occupancy: 4,
    view: "Panoramic coastline",
    desc: "Our most private residence. Two bedrooms, a wraparound terrace, an infinity pool that meets the horizon, and a dedicated house manager.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    amenities: ["Infinity pool", "Two bedrooms", "House manager", "Private chef", "Helipad access"],
  },
];

export const dining = [
  { name: "Tide", desc: "A chef's table that changes with the tide. Seven courses, caught that morning, cooked over open fire.", hours: "18:00 – 22:30, Wed–Sun", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80" },
  { name: "Salt", desc: "All-day coastal kitchen. Wood-fired bread, oysters, chilled wine on the terrace.", hours: "07:00 – 23:00, Daily", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80" },
  { name: "The Listening Room", desc: "A thirty-seat vinyl bar. Cocktails built around vintage records. No reservations.", hours: "19:00 – 01:00, Thu–Sat", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80" },
];

export const spa = [
  { name: "Oceanic Ritual", duration: "90 min", price: 420, desc: "Warm seashell massage, seaweed wrap, and a soak in a copper tub overlooking the Pacific.", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80" },
  { name: "Thermal Circuit", duration: "120 min", price: 280, desc: "Geothermal pools, cedar sauna, cold plunge, and a volcanic-clay steam room.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80" },
  { name: "Facial Rituals", duration: "60 min", price: 340, desc: "Organic seaweed and hyaluronic treatments, tailored by our in-house aesthetician.", image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1600&q=80" },
];

export const experiences = [
  { title: "Sunrise Sail", desc: "Private 42-ft sloop, departing at first light, with a bottle of Ruinart and a captain who knows the local waters.", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80" },
  { title: "Chef's Table", desc: "Cook alongside our chef at the morning market in Malibu, then prepare lunch together at the pass.", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80" },
  { title: "Hollywood Hills Hike", desc: "A guided 7-mile hike through the Santa Monica Mountains, ending with a picnic we pack for you.", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=80" },
];

export const offers = [
  { name: "The Quiet Escape", nights: 3, from: 3400, desc: "Three nights in an Ocean Suite, a bottle of Ruinart on arrival, daily breakfast on the terrace, and one 90-min spa treatment each.", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80" },
  { name: "The Chef's Journey", nights: 2, from: 4200, desc: "Two nights, a seven-course tasting at Tide with wine pairing, and a private cooking class with our chef.", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80" },
  { name: "The Wellness Reset", nights: 5, from: 7200, desc: "Five nights, daily treatments, a nutrition consultation, and a personalized movement program.", image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1600&q=80" },
];

export const events = [
  { name: "The Terrace", capacity: "120 seated · 200 standing", desc: "An open-air terrace on the cliff edge, with ocean views and a retractable canopy.", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80" },
  { name: "The Cellar", capacity: "24 seated", desc: "A private dining room in the wine cellar, with 1,200 bottles and a sommelier-hosted tasting menu.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80" },
  { name: "The Boardroom", capacity: "18 seated", desc: "A quiet, tech-equipped space with a private entrance and a dedicated coordinator.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" },
];

export const gallery = [
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
];

export const reviews = [
  { quote: "The most quietly confident hotel I've stayed in. Nothing is loud — everything is right.", author: "Condé Nast Traveler" },
  { quote: "A masterclass in restraint. The service feels invisible until the exact moment you need it.", author: "Sarah & Mark T." },
  { quote: "We came for three nights and stayed for seven. The chef's table alone is worth the flight.", author: "James L." },
  { quote: "The kind of place that ruins every other hotel for you. We're already planning our return.", author: "Elena R." },
  { quote: "Every detail — from the linen to the lighting — feels considered. A rare thing.", author: "Monocle" },
];

export const faqs = [
  { q: "What time is check-in and check-out?", a: "Check-in from 15:00, check-out by 11:00. Early arrival and late departure are available on request." },
  { q: "Do you welcome children?", a: "Yes. We are a family-friendly house, with a dedicated children's program and a private nanny service on request." },
  { q: "Do you accept pets?", a: "Small dogs up to 20 kg are welcome in Garden Villas and Cliff House, with a one-time fee of $150." },
  { q: "Is airport transfer included?", a: "Complimentary transfers from LAX are included for suites and villas. Sedan or helicopter — your choice." },
  { q: "What is the cancellation policy?", a: "Free cancellation up to 72 hours before arrival. Within 72 hours, one night is charged." },
];

export const local = [
  { name: "Getty Villa", desc: "Roman antiquities in a seaside villa, 20 min south." },
  { name: "Malibu Pier", desc: "A quiet, working pier with a perfect breakfast counter." },
  { name: "El Matador Beach", desc: "Sea stacks and coves — best at golden hour." },
  { name: "Neptune's Net", desc: "A roadside seafood counter, unchanged since 1958." },
];
