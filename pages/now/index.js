import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import Link from '@/components/Link'

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
                <Link href="#open-source-and-personal-projects">
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
            <h2>React</h2>
            <p>
              In my previous job at <Link href="https://www.marfeel.com/">Marfeel</Link> I did not
              have the chance to learn and play with <Link href="https://reactjs.org">React</Link>{' '}
              as much as I would have liked. In my current job at{' '}
              <Link href="https://www.simplabs.com">simplabs</Link> I'm working on a project built
              in React.
            </p>
            <p>
              It's good to learn by doing but when we cross that with delivering value in a certain
              amount of time is when some of the foundations can be left a part so that's why I've
              decided it's time to start learning the fundamentals and become a React expert.
            </p>
            <p>
              The course I've chosen to do so is{' '}
              <Link href="https://epicreact.dev/">Epic React</Link> by{' '}
              <Link href="https://twitter.com/kentcdodds">Kent C Dodds</Link>.
            </p>
            <p>
              You can read about this journey in my <Link href="/blog">blog</Link>
            </p>
            <h2>Rust</h2>
            <p>
              <Link href="https://rust-lang.org">Rust</Link> is here to stay. A lot of interesting
              projects are going on, the community is huge and{' '}
              <Link href="https://insights.stackoverflow.com/survey/2021?utm_source=twitter&utm_medium=social&utm_campaign=dev-survey-2020#technology-most-loved-dreaded-and-wanted">
                loves it
              </Link>
              , and I'm excited to learn more about it.
            </p>
            <p>
              Due to <Link href="/about">my interest</Link> in web development, software automation
              and the opportunity to learn and use Rust with{' '}
              <Link href="https://simplabs.com">simplabs</Link>, I decided to start doing my first
              steps with it.
            </p>
            <p>
              The course I've chosen to do so is{' '}
              <Link href="https://exercism.org/tracks/rust">Exercism.io's Rust track</Link>.
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
            <h2>Percy</h2>
            <p>
              <Link href="https://github.com/percy">Percy</Link> is an all-in-one visual review
              platform.
            </p>
            <p>My recent contributions to the project are the following ones:</p>
            <h3>percy/percy-storybook</h3>
            <p>
              <Link href="https://github.com/percy/percy-storybook">percy-storybook</Link> is
              Percy's Storybook SDK.
            </p>
            <ul>
              <li>
                [
                <Link href="https://github.com/percy/percy-storybook/discussions/560">
                  Discussion
                </Link>
                ] Improve documentation for <code>options</code>: <code>waitForTimeout</code> and{' '}
                <code>waitForSelector</code>
              </li>
              <li>
                [
                <Link href="https://github.com/percy/percy-storybook/discussions/561">
                  Discussion
                </Link>
                ] Is there a way to make Percy wait for Storybook Interactions to happen?
              </li>
            </ul>
            <h2>Renovate</h2>
            <p>
              <Link href="https://github.com/renovatebot">Renovate</Link> is a bot for automated
              dependency updates.
            </p>
            <p>My recent contributions to the project are the following ones:</p>
            <h3>renovatebot/renovate</h3>
            <p>
              <Link href="https://github.com/renovatebot/renovate">renovatebot/renovate</Link> is
              the Universal dependency update tool that fits into your workflows.
            </p>
            <ul>
              <li>
                [<Link href="https://github.com/renovatebot/renovate/issues/15370">Issue</Link>] [
                <Link href="https://github.com/renovatebot/renovate/pull/15377">Pull Request</Link>]
                Add support to presets ending with <code>.json5</code> or <code>.json</code>
              </li>
            </ul>
            <h2>Storybook</h2>
            <p>
              <Link href="https://github.com/storybookjs">Storybook</Link> is a project to build
              bulletproof user interfaces
            </p>
            <p>My recent contributions to the project are the following ones:</p>
            <h3>storybookjs/repro-templates</h3>
            <p>
              <Link href="https://github.com/storybookjs/repro-templates">
                storybookjs/repro-templates
              </Link>{' '}
              reproduces repositories of Storybook example projects online with Stackblitz.
            </p>
            <ul>
              <li>
                [<Link href="https://github.com/storybookjs/repro-templates/issues/2">Issue</Link>]
                Bug: When opening a Stackblitz link, it gets stuck forever
              </li>
            </ul>
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
            <h2>Mystery</h2>
            <ul>
              <li>
                <span role="img" aria-label="book">
                  📚
                </span>{' '}
                <Link href="https://www.goodreads.com/book/show/48725742-one-life">
                  The Last Thing He Told Me
                </Link>{' '}
                by{' '}
                <Link href="https://www.goodreads.com/author/show/2672.Laura_Dave">Lara Dave</Link>
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
                <Link href="https://www.filmaffinity.com/es/film976626.html">
                  Super Pumped: The Battle of Uber
                </Link>{' '}
                (Season 1) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film812588.html">Tokyo Vice</Link>{' '}
                (Season 1) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film270244.html">WeCrashed</Link>{' '}
                (Season 1) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film270244.html">Slow Horses</Link>{' '}
                (Season 1) 🇺🇸
              </li>
            </ul>
            <h2>Sci-Fi</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film983718.html">Obi-Wan Kenob</Link>{' '}
                (Mini TV Series) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.imdb.com/title/tt9561862/">Love, Death & Robots</Link>{' '}
                (Season 3) 🇺🇸
              </li>
            </ul>
            <h2>Comedy</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film930636.html">
                  Winning Time: The rise of the Lakers Dynasty
                </Link>{' '}
                (Season 1) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.imdb.com/title/tt5147074/">Ilustres Ignorantes</Link>{' '}
                (Season 15) 🇪🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.imdb.com/title/tt2861424/">Rick and Morty</Link> (Season 5)
                🇺🇸
              </li>
            </ul>
            <h2>Documental</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film822513.html">
                  They Call Me Magic
                </Link>{' '}
                (Mini TV Show) 🇺🇸
              </li>
            </ul>
            <br></br>
            <h1 id="now-im-watching">
              <span role="img" aria-label="videogame controller">
                🎮
              </span>{' '}
              Now I'm playing
            </h1>
            <h2>Adventure</h2>
            <ul>
              <li>
                <Link href="https://www.igdb.com/games/star-wars-jedi-fallen-order">
                  Star Wars Jedi: Fallen Order
                </Link>
              </li>
            </ul>
            <h2>Sports</h2>
            <ul>
              <li>
                <Link href="https://www.igdb.com/games/fifa-22">FIFA 22</Link>
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
