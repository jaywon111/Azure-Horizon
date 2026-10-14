export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "the-tide-comes-in",
    title: "The tide comes in at 04:12",
    excerpt:
      "Our chef doesn't write menus. He writes tides. A morning in the kitchen at Tide with Elias Moreau.",
    category: "Kitchen",
    author: "Mira Adeyemi",
    authorRole: "Editor at large",
    date: "August 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Elias Moreau has been cooking on this coast for twenty-two years. He does not carry a notebook. He does not write down a menu. He walks down to the rocks at 04:00, stands very still, and waits for the boats.",
      "\"The tide brings what it brings,\" he told me, in a kitchen that was still dark. \"Some mornings it's amberjack. Some mornings it's nothing but anchovies and a good story. Either way, the menu is decided by 05:30.\"",
      "By the time the first guests arrive for breakfast on the Salt terrace, Elias has been working for five hours. What appears on the seven-course tasting at Tide that evening was, as recently as sunrise, an idea.",
      "He is not precious about ingredients. He is precious about time. \"A tomato that was picked an hour ago tastes different from a tomato that was picked yesterday. This is not a philosophy. It is a fact.\"",
      "The morning I spent with him, the boats brought in four kilos of spot prawns, a single turbot, and — unexpectedly — a box of sea urchins that a fisherman had been keeping alive in a bucket on his own time. Elias looked at the urchins the way another man might look at a lottery ticket.",
      "That evening's fifth course was urchin, chilled, over warm brioche, with a single drop of olive oil pressed from trees on the property next door. It was not on the menu two hours before service. It will not be on the menu tomorrow. This is the entire point.",
    ],
  },
  {
    slug: "why-we-built-twelve",
    title: "Why we built twelve rooms",
    excerpt:
      "A hotel with twelve rooms is not a smaller hotel. It is a different thing entirely. On the arithmetic of attention.",
    category: "House",
    author: "Jonah Reyes",
    authorRole: "Co-founder",
    date: "July 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
    body: [
      "The number twelve was not a business decision. It was a mathematical one — the maximum number of guests we could look after without diluting what we mean by looking after.",
      "At twelve rooms, we can remember every guest's name. We can remember what they drank last time. We can remember that they don't like fennel, and that they do like to be left alone until 10am.",
      "At twenty rooms, all of that becomes approximation. You hire more staff, but you cannot hire more memory. The best hotels in the world have a distinct ceiling, and then they build a second property somewhere else.",
      "We are not interested in a second property.",
      "The staff count is thirty-four. That is roughly three people per room. It is not lean. It is deliberately over-provisioned, and the entire business model is built around the assumption that the guest will not notice how over-provisioned it is.",
      "Good service, we've learned, is not service that impresses. It is service that disappears. The guest should never feel that they are being managed. They should feel that they are at home, in a house where every detail happened to already be correct before they arrived.",
      "Twelve rooms is the number at which this becomes possible. Any more, and the illusion breaks.",
    ],
  },
  {
    slug: "the-stonemason",
    title: "The stonemason who took four years",
    excerpt:
      "Forty-one workers walked off the site. One stayed. A profile of Ravi Chandra, who cut every stone in this house by hand.",
    category: "Craft",
    author: "Mira Adeyemi",
    authorRole: "Editor at large",
    date: "June 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Ravi Chandra arrived at The Azure Horizon on a Tuesday morning in March 2021, carrying a bag of chisels. He stayed for four years.",
      "The brief to our architect was one page: build something that looks like it has always been here. The brief to Ravi was more specific: the cliff is unstable, the salt eats everything, and no two stones should look machine-cut.",
      "The other contractors left. Forty-one of them, over the course of the build. The cliff kept shifting. The budget kept changing. The deadlines were absurd. Ravi stayed.",
      "\"A stone tells you what it wants to be,\" he told me, running a hand along the corner of the fireplace in the Ocean Suite. \"If you force it, it looks like a brick. If you listen, it looks like it grew here.\"",
      "He is not being poetic. The stones in this house were sourced from a quarry two hours north of Malibu, trucked down in irregular slabs, and every single one was cut, shaped, and finished by hand. It is one of the reasons the build took four years.",
      "The result is quiet. Guests walk past the fireplace and think nothing of it. That is the point. Good stonework, like good service, is invisible until it isn't.",
      "Ravi lives in Ventura now. He still takes commissions, but only one at a time. \"I am not fast,\" he said, when I asked if he'd take another hotel. \"But I am finished when I am finished.\"",
    ],
  },
  {
    slug: "a-note-on-noise",
    title: "A note on noise",
    excerpt:
      "We chose silence over music. On the design decision that was the hardest of the entire project.",
    category: "Design",
    author: "Jonah Reyes",
    authorRole: "Co-founder",
    date: "May 2026",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=80",
    body: [
      "The single most contested decision in the design of this house was whether to play music in the lobby. We do not have a lobby, but the question is the same.",
      "Half the team wanted a house soundtrack. Something low, something curated, something that would make the space feel alive.",
      "The other half wanted nothing. Silence.",
      "We tested it. For three weeks, before opening, we played music. Ambient playlists, curated by a specialist in LA. We invited friends, writers, and two hotel critics to sit in the space and tell us what they felt.",
      "The feedback was unanimous, and it surprised us. Every single person said some version of the same thing: the music made the place feel smaller.",
      "The ocean is loud. The wind through the eucalyptus is loud. The silence between these sounds is what makes the house feel like it belongs to the cliff.",
      "We removed the speakers the following week. They are still in storage. If you are ever here and you hear music, it is coming from The Listening Room, and it is coming from vinyl, and someone chose it on purpose.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
