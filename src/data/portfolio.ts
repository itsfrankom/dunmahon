// ─────────────────────────────────────────────────────────────
// YOUR PORTFOLIO
// To add a new piece, copy one block below, paste it at the top
// of the list, and change the details. Order here = order on the page.
//
// image:  a file in public/images/ (e.g. "/images/my-thumb.webp"),
//         or leave it out for a text-only card.
// piece:  use this instead of a link when the work lives on your own
//         site (a Markdown file in src/content/pieces/).
// ─────────────────────────────────────────────────────────────

export type Category =
  | "Thought leadership"
  | "Case studies"
  | "Blogs"
  | "Real estate"
  | "Campaigns & PR"
  | "Columns & essays";

export interface PortfolioItem {
  title: string;
  client: string;
  category: Category;
  description?: string;
  image?: string;
  logo?: boolean; // show the whole image (for logos) instead of cropping
  links?: { label: string; url: string }[];
  piece?: string;
  featured?: boolean;
}

export const portfolio: PortfolioItem[] = [
  {
    title: "My Weekend with Claude",
    client: "The Next Stage (Substack)",
    category: "Columns & essays",
    description:
      "How Santa Fe Pulse, a daily local newsletter, came together in a weekend of building with Claude and GitHub.",
    links: [{ label: "Read on Substack", url: "https://substack.com/home/post/p-210677332" }],
    featured: true,
  },
  {
    title: "Maureen's Minute",
    client: "Maureen McCarthy, Boulder Realtor",
    category: "Real estate",
    description:
      "Sample short-form videos for a top 2% Boulder agent, built to attract both buyers and sellers.",
    links: [{ label: "Maureen McCarthy Homes", url: "https://maureenmccarthyhomes.com" }],
    featured: true,
  },
  {
    title: "Agent-focused blogs",
    client: "Realtor.com",
    category: "Real estate",
    description: "B2B articles helping agents grow and run their business.",
    links: [
      { label: "Breaking up is hard: when to part ways with a client", url: "https://www.realtor.com/marketing/resources/breaking-up-is-hard-to-do/" },
      { label: "Referrals make money while you sleep", url: "https://www.realtor.com/marketing/resources/referrals-drive-business-while-you-sleep/" },
      { label: "Ace your listing presentation", url: "https://www.realtor.com/marketing/resources/how-to-ace-your-real-estate-listings/" },
      { label: "Tips for staging", url: "https://www.realtor.com/marketing/resources/tips-for-staging-a-home-to-sell/" },
    ],
    featured: true,
  },
  {
    title: "2021 Annual Report",
    client: "Spire Healthcare",
    category: "Campaigns & PR",
    description:
      "Project management across internal and external resources: approvals, photography and copy editing.",
    links: [{ label: "View the report (PDF)", url: "https://www.investors.spirehealthcare.com/media/cx0nbjuz/full-annual-report-2021.pdf" }],
  },
  {
    title: "How Culture Evolves: The Johnnie Librarian View",
    client: "St. John's College",
    category: "Thought leadership",
    description: "Professional profile.",
    links: [{ label: "Read the profile", url: "https://www.sjc.edu/news/how-culture-evolves-johnnie-librarian-view" }],
  },
  {
    title: "Storytelling on a Box",
    client: "Colab Packaging",
    category: "Blogs",
    description: "Application story on what digital printing makes possible for packaging.",
    image: "/images/storytelling-on-a-box.webp",
    links: [{ label: "Read the story", url: "https://colabpackaging.com/blog/storytelling-on-a-box-the-opportunity-of-digital-printing" }],
  },
  {
    title: "Digital vs Offset",
    client: "Colab Packaging",
    category: "Blogs",
    description: "Why the old rule of offset for long runs and digital for short ones no longer holds.",
    image: "/images/digital-vs-offset.webp",
    links: [{ label: "Read the story", url: "https://colabpackaging.com/blog/digital-printing-versus-offset" }],
  },
  {
    title: "Client case studies",
    client: "Filta",
    category: "Case studies",
    description: "Interview-based case studies for an Australian outsourcing and recruiting firm.",
    image: "/images/filta-logo.webp",
    logo: true,
    links: [{ label: "View case studies", url: "https://filtaglobal.com/case-studies/" }],
  },
  {
    title: "Customer Story: Entain",
    client: "LiveTiles",
    category: "Case studies",
    links: [{ label: "Read the story", url: "https://livetilesglobal.com/customer-stories/entain-bets-big-on-a-winning-culture/" }],
  },
  {
    title: "Customer Story: Mentholatum",
    client: "LiveTiles",
    category: "Case studies",
    image: "/images/livetiles-mentholatum.webp",
    links: [{ label: "Read the story", url: "https://livetilesglobal.com/customer-stories/mentholatum/" }],
  },
  {
    title: "Customer Story: Engie",
    client: "LiveTiles",
    category: "Case studies",
    image: "/images/livetiles-engie.webp",
    links: [{ label: "Read the story", url: "https://livetilesglobal.com/customer-stories/engie/" }],
  },
  {
    title: "Customer Story: Creditsafe",
    client: "LiveTiles",
    category: "Case studies",
    image: "/images/livetiles-creditsafe.webp",
    links: [{ label: "Read the story", url: "https://livetilesglobal.com/customer-stories/creditsafe/" }],
  },
  {
    title: "Customer Story: Jardine Motors",
    client: "LiveTiles",
    category: "Case studies",
    links: [{ label: "Read the story", url: "https://livetilesglobal.com/customer-stories/jardine/" }],
  },
  {
    title: "Corporate Brochure",
    client: "Gibbs Hybrid",
    category: "Campaigns & PR",
    links: [{ label: "View the brochure", url: "http://bit.ly/gibbscorporate" }],
  },
  {
    title: "Building the Diverse Workforce, Brick by Brick",
    client: "Gibbs Hybrid",
    category: "Thought leadership",
    image: "/images/gibbs-hybrid-logo.webp",
    logo: true,
    links: [{ label: "Read the article", url: "https://www.gibbshybrid.com/articles-insights/thought/building-the-diverse-workforce-brick-by-brick/" }],
  },
  {
    title: "Case Study: KYC/AML Consulting",
    client: "Gibbs Hybrid",
    category: "Case studies",
    image: "/images/luxembourg.webp",
    links: [{ label: "View the case study (PDF)", url: "https://www.gibbshybrid.com/wp-content/uploads/2019/01/Case-Study-Luxembourg-1.pdf" }],
  },
  {
    title: "Social Values Can Drive Pocketbook Decisions",
    client: "SurveyMonkey",
    category: "Blogs",
    image: "/images/surveymonkey-social-values.webp",
    piece: "social-values-can-drive-pocket-book-decisions",
  },
  {
    title: "Americans Are Ready to Travel",
    client: "SurveyMonkey",
    category: "Blogs",
    image: "/images/surveymonkey-travel.webp",
    piece: "business-travel-research",
  },
  {
    title: "3 Reasons IT Cloud Investments Will Take Center Stage",
    client: "SurveyMonkey",
    category: "Blogs",
    image: "/images/surveymonkey-cloud.webp",
    links: [{ label: "Read the post", url: "https://www.surveymonkey.com/curiosity/3-reasons-why-it-cloud-investments-will-take-center-stage-in-2021/" }],
  },
  {
    title: "So Long, Silicon Valley",
    client: "The Irish Times",
    description: "A 2002 farewell to the Valley after ten years of Apple, Excite, PayPal and the dot-com ride, from my 'Letter from Silicon Valley' column.",
    category: "Columns & essays",
    image: "/images/silicon-valley-map.webp",
    piece: "irish-times-silicon-valley",
  },
  {
    title: "Planning for an IPO: The Decision to Float",
    client: "Invigorate",
    category: "Thought leadership",
    image: "/images/ipo.webp",
    links: [{ label: "Read the article", url: "https://www.invigorateplatform.com/insights/planning-for-an-ipo-part-1-the-decision-to-float" }],
  },
  {
    title: "Blog post",
    client: "Lokalise",
    category: "Blogs",
    image: "/images/lokalise.webp",
    logo: true,
    piece: "lokalise-blogpost-231120",
  },
  {
    title: "Press release draft",
    client: "Totara",
    category: "Campaigns & PR",
    piece: "totara-press",
  },
  {
    title: "Direct mail campaign",
    client: "PLEX Canada (via Spear)",
    category: "Campaigns & PR",
    image: "/images/plex-direct-mail.webp",
    logo: true,
    links: [{ label: "View the campaign (PDF)", url: "https://media.clippings.me/cuttingpdfs/961367/3532e5bc633507bdc6bdca84cadaee0d.pdf" }],
  },
  {
    title: "Event invite copywriting",
    client: "Shell (via Spear)",
    category: "Campaigns & PR",
    image: "/images/shell-lubricants.webp",
    logo: true,
    links: [{ label: "View the invite", url: "https://drive.google.com/file/d/1l_X7pqGsYM0WYFaH0eVyH0Nnlg_cANFC/view?usp=sharing" }],
  },
];
