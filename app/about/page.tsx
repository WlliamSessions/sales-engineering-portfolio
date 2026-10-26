import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const imagePath = "/images/about";

const careerSteps = [
  {
    number: "01",
    title: "Professional poker",
    subtitle: "An unconventional beginning",
    description:
      "From a 17-cent freeroll to a six-figure bankroll before graduating high school, followed by professional play, coaching, and staking World Series of Poker participants.",
  },
  {
    number: "02",
    title: "Digital advertising",
    subtitle: "Doner & Amnet",
    description:
      "Putting my economics background and analytical skills to work in an industry built around data, technology, and business strategy.",
  },
  {
    number: "03",
    title: "Technical support & enablement",
    subtitle: "Innovid",
    description:
      "Developing deep platform expertise and helping lead the self-service offering through customer onboarding, documentation, training, and technical education.",
  },
  {
    number: "04",
    title: "Founding Sales Engineer",
    subtitle: "PulsePoint",
    description:
      "Combining technical discovery, solution design, demos, integrations, and enablement while helping establish a Sales Engineering function.",
  },
  {
    number: "05",
    title: "Building with AI",
    subtitle: "Today's experiments",
    description:
      "Exploring APIs, AI applications, automation, and modern development tools through working projects.",
  },
];

const pokerStats = [
  {
    value: "17¢",
    label: "The starting bankroll",
  },
  {
    value: "6 figures",
    label: "Before high school graduation",
  },
  {
    value: "$10/$20",
    label: "Highest stakes played",
  },
];

const workingPrinciples = [
  {
    title: "I like figuring things out.",
    description:
      "I don't need to know everything about a technology before getting started. I enjoy learning unfamiliar systems, asking questions, experimenting, and developing a practical understanding of what matters.",
  },
  {
    title: "I care about the customer's actual problem.",
    description:
      "The most interesting technical solution isn't always the right one. I like understanding what someone is trying to accomplish, identifying the constraints, and finding an approach that makes sense for their situation.",
  },
  {
    title: "I enjoy making complex things understandable.",
    description:
      "Whether I'm explaining an API integration, walking through an architecture diagram, or troubleshooting with a customer, technical depth is most valuable when you can communicate it clearly.",
  },
  {
    title: "I like building, not just talking about building.",
    description:
      "I'm not trying to position myself as a software engineer. But I enjoy getting hands-on with APIs, AI tools, and prototypes so I can better understand what I'm recommending and demonstrate how it works.",
  },
];

function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.22em] ${
        light ? "text-blue-300" : "text-blue-700"
      }`}
    >
      {children}
    </p>
  );
}

function Photo({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={`${imagePath}/${src}`}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover transition-transform duration-700 hover:scale-[1.035] ${imageClassName}`}
      />
    </div>
  );
}

function StoryCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
        {eyebrow}
      </p>

      <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
        {title}
      </h3>

      <div className="mt-4 space-y-4 text-[16px] leading-8 text-slate-600 md:text-[17px]">
        {children}
      </div>
    </aside>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-700"
          >
            <span>←</span> Back to home
          </Link>

          <div className="max-w-4xl">
            <SectionLabel>A little about me</SectionLabel>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.08] tracking-tight text-slate-950 md:text-7xl">
              Not exactly a{" "}
              <span className="text-blue-700">traditional</span> career path.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-600 md:text-2xl">
              From turning 17 cents into a six-figure online poker bankroll
              before graduating high school to helping customers solve
              complex technical challenges. My career has taken a few
              unexpected turns, but curiosity, strategy, and a love of
              solving problems have been constants.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#my-story"
                className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Read my story ↓
              </a>

              <Link
                href="/#projects"
                className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
              >
                Explore my projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 01: POKER */}
      <section id="my-story" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[250px_1fr] lg:gap-20">
            <div>
              <SectionLabel>Chapter 01</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                The poker years
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                An unlikely introduction to strategy, competition, and
                learning how to think.
              </p>
            </div>

            <div className="min-w-0">
              {/* POKER STATISTICS */}
              <div className="mb-10 overflow-hidden rounded-2xl bg-[#101d35] p-7 text-white md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  From humble beginnings
                </p>

                <div className="mt-7 grid grid-cols-3 gap-3 md:gap-6">
                  {pokerStats.map((stat) => (
                    <div key={stat.value} className="min-w-0">
                      <p className="text-2xl font-semibold tracking-tight md:text-4xl">
                        {stat.value}
                      </p>

                      <p className="mt-3 text-xs leading-5 text-slate-300">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* THE STORY */}
              <div className="space-y-6 text-[16px] leading-8 text-slate-600 md:text-[17px]">
                <p>
                  My introduction to poker wasn't particularly glamorous.
                  I was on a family vacation, bored in a hotel room,
                  when my brothers and a family friend introduced me
                  to the game. We didn't have poker chips, so we
                  improvised with Dixie cups and candy.
                </p>

                <p>
                  Something about the game immediately clicked with me.
                </p>

                <p>
                  Poker was also experiencing a huge surge in popularity.
                  Chris Moneymaker's victory in the 2003 World Series of
                  Poker Main Event, after qualifying through an online
                  tournament, helped spark an online poker boom. I
                  discovered the game around that same period.
                </p>

                <p>
                  Unlike most casino games, poker pits players against
                  one another rather than against the house. Luck plays
                  a role in individual hands, but over time, skill,
                  probability, strategy, and understanding your
                  opponents can make all the difference. That
                  combination fascinated me.
                </p>

                <p>
                  Every Friday after school, my friends would come
                  over to my house for $5 buy-in games. It was a
                  chance to hang out, compete, and enjoy the game
                  together.
                </p>

                <p>
                  But my interest went well beyond our weekly games.
                  I immersed myself in poker forums, strategy books,
                  and online video training sites. I spent countless
                  hours studying successful players and trying to
                  understand not just which decisions were correct,
                  but why.
                </p>

                {/* STORY CARD 1 */}
                <StoryCard
                  eyebrow="The obsession"
                  title="Poker strategy disguised as homework"
                >
                  <p>
                    I even printed out poker strategy articles to read
                    during study hall. To my teachers, it probably
                    looked like I was unusually dedicated to my
                    homework. In reality, I was studying poker.
                  </p>
                </StoryCard>

                <p>
                  There was one complication: my parents were strongly
                  opposed to gambling.
                </p>

                <p>
                  We eventually reached an agreement. I could pursue
                  my interest in online poker, but I wasn't allowed
                  to deposit any of my own money into a poker site.
                </p>

                <p>
                  I agreed, and went looking for another way in.
                </p>

                <p>
                  That's how I discovered freerolls, tournaments
                  that were free to enter but awarded small amounts
                  of real money to the winners.
                </p>

                <p>
                  My first freeroll winnings? Seventeen cents.
                </p>

                <p>
                  Not exactly life-changing money. But it was a
                  start, and more importantly, it was mine to
                  build on.
                </p>

                <p>
                  I kept playing, studying, and gradually moving
                  up in stakes as my bankroll grew. I started at
                  the smallest games available and worked my way
                  up until I was playing $5/$10 No-Limit Texas
                  Hold'em, the highest-stakes games offered on
                  the site where I'd started.
                </p>

                <p>
                  Eventually, I'd outgrown that original platform.
                  There weren't enough players at those stakes
                  to consistently find games, so I expanded to
                  the major online poker sites in search of
                  more competition.
                </p>

                {/* STORY CARD 2 */}
                <StoryCard
                  eyebrow="A memorable table"
                  title='Playing against Chris "Jesus" Ferguson'
                >
                  <p>
                    Moving to the bigger sites led to some pretty
                    surreal experiences. On one occasion, I found
                    myself playing heads-up $10/$20 No-Limit
                    Hold'em against Chris "Jesus" Ferguson, one
                    of the most recognizable professional poker
                    players of that era, on Full Tilt Poker.
                  </p>

                  <p>
                    I even managed to walk away with some
                    of his money.
                  </p>

                  <p className="italic text-slate-800">
                    Not something I would have imagined back
                    when I was playing for candy in a hotel room.
                  </p>
                </StoryCard>

                <p>
                  Somewhere along the way, those original
                  seventeen cents had grown into a six-figure
                  bankroll. And I'd accomplished that before
                  graduating high school.
                </p>

                <p>
                  What started as a way to pass the time on a
                  family vacation had turned into something I
                  never could have imagined. I was competing
                  against experienced players, studying the game
                  obsessively, and learning how to manage both
                  the financial and psychological sides of
                  playing professionally.
                </p>

                <p>
                  As I continued playing through college, poker
                  became more than just sitting at the tables.
                  I started coaching other players and even
                  staking competitors in the World Series of
                  Poker, putting up money for a share of their
                  potential winnings.
                </p>

                <p>
                  My dad's perspective had evolved a bit, too.
                  He'd occasionally walk into my room, catch me
                  playing video games, and jokingly ask why I
                  was wasting my time instead of playing poker.
                </p>

                <p>
                  Not a conversation I would have predicted
                  when we'd first agreed I wasn't allowed to
                  deposit a penny of my own money.
                </p>

                <p>
                  While studying economics at Albion College,
                  I continued playing professionally. It was
                  an unusual way to spend my college years,
                  but one that taught me a tremendous amount
                  about decision-making, discipline, and
                  adapting to changing circumstances.
                </p>

                {/* STORY CARD 3 */}
                <StoryCard
                  eyebrow="April 15, 2011"
                  title="Then came Black Friday"
                >
                  <p>
                    The U.S. government took action against
                    several major online poker operators,
                    abruptly disrupting access for American
                    players. Almost overnight, the career
                    I'd spent years building became much
                    less viable.
                  </p>

                  <p>
                    With graduation approaching, I decided
                    to pursue a more traditional, stable career.
                  </p>
                </StoryCard>

                <p>
                  Looking back, poker taught me much more
                  than how to play cards. It taught me to
                  think probabilistically, recognize patterns,
                  make decisions with incomplete information,
                  manage risk, and constantly challenge my
                  own assumptions.
                </p>

                <p>
                  Perhaps the most valuable lesson was
                  learning to separate the quality of a
                  decision from its outcome. You can make
                  the right decision and still lose a hand.
                  You can make the wrong decision and
                  get lucky.
                </p>

                <p className="font-medium text-slate-900">
                  That distinction has stayed with me
                  throughout my career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 02: CAREER - MATCHES CHAPTER 01 LAYOUT */}
      <section className="border-y border-slate-200 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[250px_1fr] lg:gap-20">
            {/* LEFT COLUMN */}
            <div>
              <SectionLabel>Chapter 02</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                Finding my way into Sales Engineering.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                An unexpected career path that brought together my
                analytical background, technical curiosity, and a
                passion for helping people master complex technology.
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="min-w-0">
              {/* CAREER TIMELINE */}
              <div className="mb-12 grid gap-4 sm:grid-cols-2">
                {careerSteps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 transition hover:border-blue-200 hover:shadow-sm"
                  >
                    <span className="text-xs font-bold tracking-[0.2em] text-blue-700">
                      {step.number}
                    </span>

                    <h3 className="mt-4 text-lg font-semibold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-blue-700">
                      {step.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CAREER STORY */}
              <div className="space-y-6 text-[16px] leading-8 text-slate-600 md:text-[17px]">
                <p>
                  I didn't graduate college with a plan to become a
                  Sales Engineer. I'm not even sure I knew the role existed.
                </p>

                <p>
                  After my poker career came to an end, I put my economics
                  degree and many of the skills I'd developed at the tables
                  to work in digital advertising, starting on the agency
                  side at Doner and Amnet. It was an industry where analyzing
                  data, recognizing patterns, and making strategic decisions
                  were just as important as they'd been in poker, only now
                  I was applying those skills to advertising campaigns
                  instead of card games.
                </p>

                <p>
                  What I discovered pretty quickly was that I was often
                  more interested in understanding how the technology worked
                  than simply using it. I wanted to know what was happening
                  behind the scenes. How did platforms communicate? Where
                  did the data come from? What actually caused something
                  to break?
                </p>

                <p>
                  That curiosity eventually led me to Innovid, where I had
                  the opportunity to transition into a client-facing
                  technical support role. As I developed a deep
                  understanding of the platform, I became someone customers
                  and colleagues could turn to for help navigating its more
                  complex capabilities.
                </p>

                <p>
                  But what I found most rewarding wasn't just solving
                  technical problems myself. It was helping other people
                  develop the knowledge and confidence to solve them
                  independently.
                </p>

                <p>
                  That became especially clear when I helped lead the
                  development of Innovid's self-service offering. Moving
                  customers toward self-service required much more than
                  giving them access to a platform and hoping they'd
                  figure it out. We needed to create an experience that
                  would actually set them up for success.
                </p>

                <p>
                  I loved that challenge. I helped build the onboarding
                  processes, documentation, training materials, and
                  educational resources customers needed to become
                  proficient with the technology. There was something
                  incredibly satisfying about taking a complicated
                  platform, breaking it down into understandable pieces,
                  and watching customers become confident users.
                </p>

                <p>
                  Looking back, that experience laid much of the
                  foundation for my eventual move into Sales Engineering.
                  The same skills I enjoyed developing at Innovid were
                  central to the role: understanding technical capabilities,
                  communicating them clearly, delivering effective
                  demonstrations, anticipating customer questions, and
                  helping people understand how technology could solve
                  their problems.
                </p>

                <p>
                  Becoming a Founding Sales Engineer at PulsePoint felt
                  like a natural next step. Instead of focusing primarily
                  on helping existing customers master a platform, I
                  could get involved earlier in the process. I could
                  participate in discovery, understand a prospective
                  customer's challenges, design solutions, and demonstrate
                  how the technology could meet their needs.
                </p>

                <p>
                  And that's ultimately what I enjoy about Sales
                  Engineering. It combines technical curiosity with
                  problem-solving, education, and working directly
                  with people. I get to understand how things work,
                  figure out how they can create value, and help
                  others see what's possible.
                </p>

                <p>
                  This portfolio is an extension of that same mindset.
                  Rather than simply listing technologies I've worked
                  with, I wanted to build functional projects that
                  demonstrate my ability to learn, experiment,
                  troubleshoot, and explain technical solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 03: WORKING STYLE */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <SectionLabel>Chapter 03</SectionLabel>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                How I'm wired.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                I'm naturally curious about how things work,
                especially when something doesn't behave
                the way it's supposed to.
              </p>
            </div>

            <div className="space-y-8">
              {workingPrinciples.map((item, index) => (
                <div
                  key={item.title}
                  className={
                    index > 0
                      ? "border-t border-slate-200 pt-8"
                      : ""
                  }
                >
                  <h3 className="text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 04: BEYOND WORK */}
      <section className="bg-[#101d35] py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel light>Chapter 04</SectionLabel>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Beyond the screen.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            There's more to life than APIs and customer meetings.
            Here are a few things that keep me busy when
            I'm not working.
          </p>

          {/* TENNIS AND MOUNTAIN BIKING */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05]">
              <Photo
                src="tennis.png"
                alt="Playing tennis and hitting a two-handed backhand"
                className="aspect-[4/3] w-full"
              />

              <div className="p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Still competing
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  Tennis
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  I'm a former collegiate tennis player,
                  and while my college playing days are
                  behind me, I'm still competing in USTA
                  leagues to keep my game sharp. These days,
                  I especially enjoy competitive doubles.
                  I love the strategy, the competition,
                  and the fact that there's always
                  something to improve.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05]">
              <Photo
                src="mountain-bike.png"
                alt="Turquoise mountain bike beside a wooded river"
                className="aspect-[4/3] w-full"
              />

              <div className="p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Usually covered in dirt
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  Mountain biking
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  I've gotten into mountain biking and
                  exploring singletrack trails. It's a
                  great excuse to get outside, learn
                  something new, and occasionally discover
                  that I chose the wrong line.
                </p>
              </div>
            </article>
          </div>

          {/* PIZZA FEATURE */}
          <article className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <Photo
                src="pizza-chef.png"
                alt="Making homemade pizza outdoors wearing a Detroit Lions apron and chef hat"
                className="aspect-[4/5] w-full lg:aspect-auto lg:min-h-[430px]"
              />

              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Self-appointed pizza chef
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Taking pizza night a little too seriously.
                </h3>

                <p className="mt-6 text-base leading-8 text-slate-300">
                  Somewhere along the way, making homemade
                  pizza turned into another hobby.
                  Experimenting with dough, dialing in
                  an outdoor pizza oven, and trying to
                  make the next pizza better than the last.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-300">
                  The chef hat is optional. The Detroit
                  Lions apron is not.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1 border-t border-white/10 bg-[#101d35] p-1">
              <Photo
                src="homemade-pizza.png"
                alt="Homemade pepperoni pizza"
                className="aspect-square w-full rounded-md"
              />

              <Photo
                src="detroit-pizza.png"
                alt="Several homemade Detroit-style pizzas"
                className="aspect-square w-full rounded-md"
              />

              <Photo
                src="outdoor-pizza.png"
                alt="Freshly made pepperoni pizza beside a river"
                className="aspect-square w-full rounded-md"
              />
            </div>
          </article>

          {/* MOUNTAIN BIKING SELFIE */}
          <div className="mt-6 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <Photo
              src="biking-selfie.png"
              alt="Mountain biking selfie wearing a helmet on a forest trail"
              className="aspect-[3/4] w-full rounded-2xl md:aspect-[4/5]"
              imageClassName="object-top"
            />

            <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.05] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Always curious
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                There's usually something new I'm trying.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Whether it's exploring a new trail,
                experimenting with a recipe, or falling
                down a technology rabbit hole, I enjoy
                learning by doing.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Sometimes that means building an AI
                application. Sometimes it means spending
                an unreasonable amount of time perfecting
                pizza dough.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionLabel>Thanks for reading</SectionLabel>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Now, want to see what I've built?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            The projects in this portfolio are practical
            examples of how I approach technical problems,
            learn new technologies, and turn ideas into
            working solutions.
          </p>

          <Link
            href="/#projects"
            className="mt-8 inline-flex rounded-lg bg-blue-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Explore the projects →
          </Link>
        </div>
      </section>
    </main>
  );
}