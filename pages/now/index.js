import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/layout/SEO'
import Link from 'next/link'

export default function Now() {
  return (
    <>
      <PageSeo
        title={`Now - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Now
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              This page was inspired by{' '}
              <Link href="https://blog.pragmaticengineer.com/now/">Gergely Orosz</Link> and{' '}
              <Link href="https://sive.rs/nowff">Derek Sivers</Link> now pages
              <sup>*</sup>.
            </p>
            <p>Here's what I'm doing now:</p>
            <ul>
              <li>
                <Link href="#now-im-learning">
                  <span role="img" aria-label="academy">
                    🎓
                  </span>{' '}
                  Now I'm learning
                </Link>
              </li>
              <li>
                <Link
                  href="#open-source-and-personal-pro
                ects"
                >
                  <span role="img" aria-label="academy">
                    👨🏽‍💻
                  </span>{' '}
                  Open Source and Personal Projects
                </Link>
              </li>
              <li>
                <Link href="#now-im-reading">
                  <span role="img" aria-label="books">
                    📚
                  </span>{' '}
                  Now I'm reading
                </Link>
              </li>
              <li>
                <Link href="#now-im-watching">
                  <span role="img" aria-label="popcorn">
                    🍿
                  </span>{' '}
                  Now I'm watching
                </Link>
              </li>
              <li>
                <Link href="#now-im-playing">
                  <span role="img" aria-label="popcorn">
                    🎮
                  </span>{' '}
                  Now I'm playing
                </Link>
              </li>
            </ul>
            <p>
              You can see what I was doing previously <Link href="/previously">here</Link>.
            </p>
            <br />
            <h1 id="now-im-learning">
              <span role="img" aria-label="academy">
                🎓
              </span>{' '}
              Now I'm learning
            </h1>
            <h2>Svelte</h2>
            <p>
              At <Link href="https://www.mainmatter.com">Mainmatter</Link>, I’m deep diving into{' '}
              <Link href="https://svelte.dev">Svelte</Link> while working on a client project.
              Despite its popularity, this is my first real exposure to the framework, and I'm
              thoroughly enjoying the process.
            </p>
            <p>
              Courses I'm tackling:
              <ul>
                <li>
                  <Link href="https://frontendmasters.com/courses/svelte-v2/">
                    Svelte Fundamentals
                  </Link>{' '}
                  by <Link href="https://twitter.com/Rich_Harris">Rich Harris</Link>.
                </li>
                <li>
                  <Link href="https://twitter.com/Rich_Harris">
                    Fullstack Svelte with SvelteKit
                  </Link>{' '}
                  by <Link href="https://twitter.com/Rich_Harris">Rich Harris</Link>.
                </li>
              </ul>
            </p>
            <h2>React</h2>
            <p>
              In my previous job at <Link href="https://www.marfeel.com/">Marfeel</Link> I did not
              have the chance to learn and play with <Link href="https://reactjs.org">React</Link>{' '}
              as much as I would have liked. In my current job at{' '}
              <Link href="https://www.mainmatter.com">Mainmatter</Link> I had the chance to work on
              a project built in React. Right now, I'm working on another internal project using{' '}
              <Link href="https://remix.run">Remix</Link>, a React framework.
            </p>
            <p>
              Courses I've handpicked:
              <ul>
                <li>
                  <Link href="https://epicreact.dev/">Epic React</Link> by{' '}
                  <Link href="https://twitter.com/kentcdodds">Kent C Dodds</Link>.
                </li>
                <li>
                  <Link href="https://www.joyofreact.com/">The Joy of React</Link> by{' '}
                  <Link href="https://twitter.com/JoshWComeau">Josh W. Comeau</Link>.
                </li>
              </ul>
            </p>
            <p>
              Balancing hands-on work with structured learning can be challenging, especially when
              project timelines are tight. Still, I believe it's essential to get the basics right.
              I've shared reflections and insights from this learning journey on my{' '}
              <Link href="/blog">blog</Link>.
            </p>
            <p>
              If you are curious about my progress and submitted solutions to the exercises, you can
              see them{' '}
              <Link href="https://exercism.org/profiles/dominguezcelada/solutions?track_slug=rust">
                here
              </Link>
            </p>
            <br />
            <h1 id="open-source-and-personal-projects">
              <span role="img" aria-label="academy">
                👨🏽‍💻
              </span>{' '}
              Open Source and Personal Projects
            </h1>
            <h2>Octokit</h2>
            <p>
              <Link href="https://github.com/octokit">Octokit</Link> is the official client that can
              be used to send requests to{' '}
              <Link href="https://docs.github.com/rest/">GitHub's REST API</Link> and queries to{' '}
              <Link href="https://docs.github.com/graphql">GitHub's GraphQL API</Link>.
            </p>
            <p>
              Its ecosystem is organized in multiple repositories under{' '}
              <Link href="https://github.com/octokit">GitHub</Link>, which includes a{' '}
              <i>plugin system</i> with different <i>plugins</i> you can plug to your Octokit
              instance.
            </p>
            <p>
              During this month, I've been working on some maintenance tasks for Octokit
              repositories regarding its CI system. You can find details on my contributions{' '}
              <Link href="https://github.com/oscard0m?tab=overview">here</Link>.
            </p>
            <h2>What's coming next?</h2>
            <p>
              You can find the next contributions or personal projects I'm planning in my{' '}
              <Link href="https://github.com/users/oscard0m/projects/1">GitHub Project Board</Link>
            </p>
            <br />
            <h1 id="now-im-reading">
              <span role="img" aria-label="books">
                📚
              </span>{' '}
              Now I’m reading
            </h1>
            <h2>Graphic Novel</h2>
            <ul>
              <li>
                <span role="img" aria-label="book">
                  📚
                </span>{' '}
                <Link href="https://www.goodreads.com/book/show/14744381-the-walking-dead">
                  The Walking Dead: Compendium Two
                </Link>{' '}
                <small>
                  by{' '}
                  <Link href="https://www.goodreads.com/author/show/12425.Robert_Kirkman">
                    Robert Kirkman
                  </Link>{' '}
                  and{' '}
                  <Link href="https://www.goodreads.com/author/show/16962.Charlie_Adlard">
                    Charlie Adlard
                  </Link>
                </small>
              </li>
            </ul>
            <h2>Personal Development</h2>
            <ul>
              <li>
                <span role="img" aria-label="book">
                  📚
                </span>{' '}
                <Link href="https://www.goodreads.com/book/show/40121378-atomic-habits">
                  Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones
                </Link>{' '}
                <small>
                  by{' '}
                  <Link href="https://www.goodreads.com/author/show/7327369.James_Clear">
                    James Clear
                  </Link>
                </small>
              </li>
            </ul>
            <h2>Programming</h2>
            <ul>
              <li>
                <span role="img" aria-label="book">
                  📚
                </span>{' '}
                <Link href="https://www.goodreads.com/book/show/59862682-learning-patterns">
                  Learning Patterns
                </Link>{' '}
                <small>
                  by <Link href="https://www.lydiahallie.io/">Lydia Hallie</Link> and{' '}
                  <Link href="https://addyosmani.com/">Addy Osmani</Link>
                </small>
              </li>
              <li>
                <span role="img" aria-label="book">
                  📚
                </span>{' '}
                <Link href="https://www.goodreads.com/book/show/55730109-zero-to-production-in-rust?from_search=true&from_srp=true&qid=g8t354PI8H&rank=1">
                  Zero To Production In Rust
                </Link>{' '}
                <small>
                  by{' '}
                  <Link href="https://www.goodreads.com/author/show/20826476.Luca_Palmieri">
                    Luca Palmieri
                  </Link>
                </small>
              </li>
            </ul>
            <br></br>
            <h1 id="now-im-watching">
              <span role="img" aria-label="popcorn">
                🍿
              </span>{' '}
              Now I'm watching
            </h1>
            <h2>Drama</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film159252.html">Arkitekten</Link>{' '}
                (Mini-Serie) 🇧🇻
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film853479.html">Succession</Link>{' '}
                (Season 4) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film295860.html">Kids in Crime</Link>{' '}
                (Season 1) 🇧🇻
              </li>
              <li>
                <span role="img" aria-label="movie">
                  🎥
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film801562.html">Dare mo shiranai</Link>{' '}
                (2004) 🇯🇵
              </li>
            </ul>
            <br></br>
            <h1 id="now-im-playing">
              <span role="img" aria-label="popcorn">
                🎮
              </span>{' '}
              Now I'm playing
            </h1>
            <h2>Sports</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  ⚽
                </span>{' '}
                <Link href="https://www.ign.com/games/fifa-23">Fifa 23</Link> (2022) 🇺🇸
              </li>
            </ul>
            <hr></hr>
            <p>
              <small>
                <sup>*</sup>
                Do you want to know more about now pages? Take a look into{' '}
                <Link href="https://nownownow.com/about">nownownow.com/about</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
