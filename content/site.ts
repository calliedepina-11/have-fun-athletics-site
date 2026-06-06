// ─────────────────────────────────────────────────────────────
// CONTENT CONFIG — edit copy, images, and data here.
// No need to touch component files for routine updates.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Have Fun Athletics",
  tagline: "Train Hard. Have Fun.",
  location: "Winthrop, MA",
  year: "2026",
  email: "hello@havefunathletics.com",
  venmo: "@HaveFunAthletics",
  copyright: `© 2026 Have Fun Athletics · Winthrop, MA`,
};

export const nav = {
  links: [
    { label: "Programs", href: "/programs" },
    { label: "About", href: "/about" },
  ],
  cta: { label: "Summer Sign Up", href: "/register" },
};

export const home = {
  hero: {
    label: "Have Fun Athletics",
    headline: "Train Hard.\nHave Fun.",
    body: "We don't just train athletes. We build athletes who love to train.",
    sub: "Performance Training program launching Summer 2026 · Grades 5–12 · Winthrop, MA",
    cta: { label: "See Our Programs →", href: "/programs" },
    image: "/home_hero.jpg",
  },
  building: {
    label: "What We're Building",
    headline: "More Than Better Athletes.",
    pillars: [
      {
        title: "Stronger Athletes",
        body: "Speed, strength, agility, and conditioning — built progressively, trained consistently.",
      },
      {
        title: "Confident Competitors",
        body: "Athletes who show up ready, handle pressure, and trust their preparation.",
      },
      {
        title: "Resilient People",
        body: "The habits built here carry well beyond any single sport or season.",
      },
    ],
  },
  program: {
    label: "Performance Training · Summer 2026",
    headline: "Winthrop, MA.\nOutdoors.\nReal work.",
    sub: "Grades 5–12. A program built to push athletes and make them want to come back.",
    cta: { label: "Sign Up →", href: "/register" },
    image: "/home_02.jpeg", // placeholder — swap with a real photo, this has an iStock watermark
  },
  philosophy: {
    label: "How We Think About It",
    headline: "The Standard.",
    beliefs: [
      {
        number: "01",
        title: "Show Up.",
        body: "Growth requires participation. The only guaranteed failure is never trying.",
      },
      {
        number: "02",
        title: "Keep Going.",
        body: "Things get hard. Learn from it, adjust, and keep moving. Never, ever give up.",
      },
      {
        number: "03",
        title: "Enjoy It.",
        body: "You get to do this. Work hard — and actually have fun while you're at it.",
      },
    ],
    cta: { label: "The full story →", href: "/about" },
  },
  register: {
    label: "Performance Training · Summer 2026",
    headline: "Ready To Get Started?",
    body: "Spots are limited. We'll be in touch with everything you need to know.",
    cta: { label: "Sign Up →", href: "/register" },
  },
};

export const programs = {
  header: {
    label: "Have Fun Athletics",
    headline: "Programs.",
    body: "Everything we offer is built on the same foundation — hard work, real coaching, and actually enjoying the process.",
  },
  list: [
    {
      label: "Summer 2026",
      name: "Performance Training",
      description: `
Our inaugural program. Outdoor athletic training for athletes in grades 5–12 built to make them faster, stronger, and more confident — and make them want to come back.

We train the whole athlete. Speed, agility, strength, conditioning, and the mental habits that separate good athletes from great ones.
      `,
      schedule: "Thursdays · Grades 5–8: 5:00–5:45pm / Grades 9–12: 6:00–7:00pm",
      location: "Coughlin Park · Winthrop, MA",
      pricing: "$20/session · First class free · Pay by Venmo on site",
      tags: ["Grades 5–12", "Winthrop, MA", "Outdoor Sessions", "Summer 2026"],
      cta: { label: "Sign Up →", href: "/register", style: "coral" as const },
    },
    {
      label: "Specialty Coaching",
      name: "Baseball Coaching",
      description: `
Serious development for serious baseball players. No gimmicks, no shortcuts — just discipline, consistency, and the mental toughness it takes to compete at the next level.

Pitching, hitting, fielding, strength, mindset. Whether you're staying sharp through the summer or pushing to get to the next level, we'll build a plan around where you are and where you're going.
      `,
      schedule: "",
      pricing: "",
      tags: ["All Ages", "Winthrop, MA", "Individual & Group"],
      cta: { label: "Contact Us →", href: "mailto:hello@havefunathletics.com", style: "outline" as const },
    },
    {
      label: "All Ages · All Levels",
      name: "Personal Training & Small Groups",
      description: `
Not everyone trains the same way. For athletes and adults who want focused, personalized coaching — one-on-one or in a small group — we've got you.

General fitness, athletic development, strength and conditioning. Whatever the goal, we'll build around it.
      `,
      schedule: "",
      pricing: "",
      tags: ["All Ages", "1-on-1 & Small Group", "Year Round"],
      cta: { label: "Contact Us →", href: "mailto:hello@havefunathletics.com", style: "outline" as const },
    },
  ],
  comingSoon: {
    label: "We're Just Getting Started",
    headline: "More Is Coming.",
    body: "Performance training is where we're starting — but it's not where we're stopping. Have Fun Athletics is built to grow into a full athletic community.",
    items: [
      {
        title: "Classes for Younger Athletes",
        body: "Programming built for younger kids who are ready to move, learn, and have fun doing it.",
      },
      {
        title: "Adult Fitness Classes",
        body: "Group training for adults who want to work hard without taking themselves too seriously.",
      },
      {
        title: "Free Running Club",
        body: "Community first. No registration, no cost — just show up and run.",
      },
      {
        title: "Run Coaching",
        body: "Structured training for runners chasing a goal — first 5K to a PR.",
      },
    ],
    cta: { label: "Stay In The Loop →", href: "/newsletter" },
  },
};

export const about = {
  header: {
    label: "Have Fun Athletics",
    headline: "About Us.",
    body: "Where we come from, what we believe, and the people building this.",
  },
  jumpNav: [
    { label: "Our Story", href: "#story" },
    { label: "Meet The Team", href: "#team" },
  ],
  story: {
    label: "The Origin",
    headline: "Built On A Philosophy.",
    body: `
Have Fun Athletics is built on the philosophy of Hank Smith — known to almost everyone simply as Bobby, a nickname that started with his oldest grandchild as a baby and spread to everyone whose life he touched.

Bobby was the kind of person who showed up — fully — for everyone around him. In the moments that counted, he had a way of sending people off the same way. Two words. "Have fun!!"

Over time, those two words, and his iconic handwriting, became more than a sign-off. They became a family philosophy — passed from one generation to the next, shared with athletes, teammates, friends, and community.

Have Fun Athletics exists to carry that forward. Not as a slogan. As a standard.
    `,
    attribution: `Hank "Bobby" Smith`,
    noteImage: "/about_01.jpeg",
    beliefs: [
      {
        number: "01",
        title: "Show Up.",
        body: "Growth requires participation. The only guaranteed failure is never trying.",
      },
      {
        number: "02",
        title: "Keep Going.",
        body: "Things get hard. Learn from it, adjust, and keep moving. Never, ever give up.",
      },
      {
        number: "03",
        title: "Enjoy It.",
        body: "You get to do this. Work hard — and actually have fun while you're at it.",
      },
    ],
  },
  team: {
    label: "Meet The Team",
    headline: "The People Behind It.",
    sub: "",
    members: [
      {
        name: "John DePina",
        role: "Co-Founder · Performance Training · Personal Coaching",
        bio: `
John grew up in Cape Verde, where soccer was everything. He moved to the US at 14, earned All-Star and MVP honors his senior year, then played D1 soccer at West Virginia University and D3 at Massachusetts College of Liberal Arts, with time as a semi-professional player along the way.

Injuries from years of high-level play forced him to get intentional about his training — the right muscles, footwork, agility, mobility — which didn't happen until college. He believes that gap contributed to the injuries and that's a big part of why this work matters so much for younger athletes.
        `,
        cta: null,
        image: "/about_03.jpeg", // John DePina training
        objectPosition: "top",
      },
      {
        name: "Jordy Allard",
        role: "Co-Founder · Baseball Coaching · Performance Training",
        bio: `
Jordy grew up on a farm in Woodstock, Vermont and figured out early that creativity and hard work beat shortcuts every time. He pitched at every NCAA division, including Northeastern University, and played in the Cape Cod Baseball League in 2022. He also founded Primal Baseball, an online training program built on discipline, consistency, and mental toughness.

Jordy is Bobby's oldest grandchild — the one who gave him the nickname as a baby, and the one Bobby traveled across the country to watch play. Baseball was their bond. Coaching is how he carries that forward.
        `,
        cta: null,
        image: "/about_02.jpeg", // Jordy Allard pitching
        objectPosition: "top",
      },
      {
        name: "Callie DePina",
        role: "Co-Founder · Run Coaching · Strength Training",
        bio: `
Callie built Have Fun Athletics with her husband, John, and her nephew, Jordy. That's either a great business plan or a very good excuse to spend more time with her favorite people. Probably both.

Her own relationship with fitness has taken her everywhere. From India to practice yoga, to Berlin, Boston, and Barcelona (so far!) to run marathons. She doesn't dabble — she dives in, and that's what led her to find a running coach and discover what she's capable of with someone in her corner and guiding her. She aims to bring that same guidance to other young athletes with Have Fun.

This brand exists so other young athletes can discover what good training actually feels like. The note at the top of this page is one of many her dad Bobby left for her. She kept every one.
        `,
        cta: null,
        image: "/about_04.jpeg", // Callie DePina racing
        objectPosition: "center",
      },
    ],
    carousel: [
      "/about_05.jpeg", // Callie, Jordy and John in the rain
      "/about_06.jpeg", // Baby Jordy and Bobby
      "/about_07.jpeg", // John and Callie running Boston Marathon
      "/about_08.jpeg", // Jordy and Bobby hugging at a game
      "/about_09.jpeg", // Turkey Trot Woodstock VT
      "/about_10.jpeg", // Bobby and Jordy at Babson field
      "/about_11.jpeg", // Boston Marathon finish medals
      "/about_12.jpeg", // Callie and Jordy at covered bridge
      "/about_13.jpeg", // John and Callie at Boston arms out
      "/about_14.jpeg", // John playing soccer
    ],
  },
  cta: {
    label: "Summer 2026 · Winthrop, MA",
    headline: "Ready To Train?",
    body: "See what we're offering this season and get signed up.",
    cta: { label: "See Our Programs →", href: "/programs" },
  },
};
