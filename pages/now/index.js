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
              <Link href="https://github.com/oscard0m?tab=overview&from=2022-06-01&to=2022-06-30">
                here
              </Link>
              .
            </p>
            <h2>MSW</h2>
            <p>
              <Link href="https://github.com/mswjs">MSW</Link> is Seamless REST/GraphQL API mocking
              for JavaScript applications.
            </p>
            <p>
              Its ecosystem is organized in multiple repositories under{' '}
              <Link href="https://github.com/mswjs">GitHub</Link>, which the <i>core</i> of the
              library and a other libraries related to the interception and mock of requests.
            </p>
            <p>
              During this month, I've been working on some maintenance tasks for MSW repositories
              regarding its CI system. You can find details on my contributions{' '}
              <Link href="https://github.com/oscard0m?tab=overview&from=2022-06-01&to=2022-06-30">
                here
              </Link>
              .
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
            <h2>Biography</h2>
            <ul>
              <li>
                <span role="img" aria-label="book">
                  📚
                </span>{' '}
                <Link href="https://www.goodreads.com/book/show/55682280-el-hijo-del-ch-fer">
                  El hijo del chofer
                </Link>{' '}
                by{' '}
                <Link href="https://www.goodreads.com/author/show/4039103.Jordi_Amat">
                  Jordi Amat
                </Link>
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
                <Link href="https://www.filmaffinity.com/es/film270244.html">WeCrashed</Link>{' '}
                (Season 1) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film471259.html">Borgen</Link> (Season
                3) 🇩🇰
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film801710.html">Vikings</Link> (Season
                1 & 2) 🇮🇪
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film512779.html">Black Bird</Link>{' '}
                (Mini-Series TV) 🇺🇸
              </li>
            </ul>
            <h2>Sci-Fi</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film983718.html">Obi-Wan Kenobi</Link>{' '}
                (Mini-series TV) 🇺🇸
              </li>
            </ul>
            <h2>Sci-Fi</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film115927.html">800 Metros</Link>{' '}
                (Mini-series TV) 🇪🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film537182.html">The Playbook</Link>{' '}
                (Mini-series TV) 🇺🇸
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
