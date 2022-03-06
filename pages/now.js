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
            Now (Feb 2022)
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              This page was inspired by{' '}
              <a href="https://blog.pragmaticengineer.com/now/">Gergely Orosz</a> and{' '}
              <a href="https://sive.rs/nowff">Derek Sivers</a> now pages
              <sup>*</sup>.
            </p>
            <p>Here's what I'm doing now.</p>
            <br />
            <h1>Now I'm learning</h1>
            <h2>React</h2>
            <p>
              In my previous job at <a href="https://www.marfeel.com/">Marfeel</a> I did not have
              the chance to learn and play with <a href="https://reactjs.org">React</a> as much as I
              would have liked. In my current job at <a href="https://www.simplabs.com">simplabs</a>{' '}
              I'm working on a project built in React.
            </p>
            <p>
              It's good to learn by doing but when we cross that with delivering value in a certain
              amount of time is when some of the foundations can be left a part so that's why I've
              decided it's time to start learning the fundamentals and become a React expert.
            </p>
            <p>
              The course I've chosen to do so is <a href="https://epicreact.dev/">Epic React</a> by{' '}
              <a href="https://twitter.com/kentcdodds">Kent C Dodds</a>.
            </p>
            <p>
              You can read about this journey in my <a href="/blog">blog</a>
            </p>
            <h2>Rust</h2>
            <p>
              <a href="https://rust-lang.org">Rust</a> is here to stay. A lot of interesting
              projects are going on, the community is huge and{' '}
              <a href="https://insights.stackoverflow.com/survey/2021?utm_source=twitter&utm_medium=social&utm_campaign=dev-survey-2020#technology-most-loved-dreaded-and-wanted">
                loves it
              </a>
              , and I'm excited to learn more about it.
            </p>
            <p>
              Due to <a href="/about">my interest</a> in web development, software automation and
              the opportunity to learn and use Rust with <a href="https://simplabs.com">simplabs</a>
              , I decided to start doing my first steps with it.
            </p>
            <p>
              The course I've chosen to do so is{' '}
              <a href="https://exercism.org/tracks/rust">Exercism.io's Rust track</a>.
            </p>
            <p>
              If you are curious about my progress and submitted solutions to the exercises, you can
              see them{' '}
              <a href="https://exercism.org/profiles/dominguezcelada/solutions?track_slug=rust">
                here
              </a>
            </p>
            <br />
            <h1>Open Source and Personal Projects</h1>
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
            <p>My recent contributions to the project are the following ones:</p>
            <h3>octokit.js</h3>
            <p>
              <Link href="https://github.com/octokit/octokit.js">octokit.js</Link> is the repository
              in Octokit ecosystem corresponding to the all-batteries-included GitHub SDK for
              Browsers, Node.js, and Deno.
            </p>
            <ul>
              <li>
                [<Link href="https://github.com/octokit/octokit.js/pull/2206">PR #2206</Link>]
                Improved Octokit Docs for contributors adding an explanation on what to do if a Pull
                Request is merged and the message used for it is not{' '}
                <Link href="https://github.com/semantic-release/semantic-release">
                  semantic-release
                </Link>{' '}
                compliant.
              </li>
              <li>
                [<Link href="https://github.com/octokit/octokit.js/pull/2205">PR #2205</Link>]
                Improved Octokit Docs replacing <code>@octokit/auth-oauth-user-client</code> in the
                examples with a more generic one
              </li>
              <li>
                [
                <Link href="https://github.com/octokit/octokit.js/discussions/2204">
                  Discussion 2204
                </Link>
                ] Created a new discussion to encourage contributors to use{' '}
                <code>octokit.log.*</code> instead of <code>console.*</code>
              </li>
            </ul>
            <h3>@octokit/core.js</h3>
            <p>
              <Link href="https://github.com/octokit/core.js">@octokit/core.js</Link> is the
              extendable client for GitHub's REST & GraphQL APIs
            </p>
            <ul>
              <li>
                [<Link href="https://github.com/octokit/core.js/issues/449">Issue #449</Link>][
                <Link href="https://github.com/octokit/core.js/pull/450">PR #450</Link>] Improved
                Octokit typing in TypeScript by converting <code>type OctokitOptions</code> into{' '}
                <code>interface OctokitOptions</code>.
              </li>
            </ul>
            <h3>@octokit/plugin-throttling.js</h3>
            <p>
              <Link href="https://github.com/octokit/plugin-throttling.js">
                @octokit/plugin-throttling.js
              </Link>{' '}
              is the Octokit plugin for GitHub’s recommended request throttling
            </p>
            <ul>
              <li>
                [
                <Link href="https://github.com/octokit/plugin-throttling.js/pull/459">PR #459</Link>
                ] Replace the usage of <code>console.warn</code> in this plugin to use the more
                generic <code>octokit.log.warn</code>
              </li>
              <li>
                [
                <Link href="https://github.com/octokit/plugin-throttling.js/pull/457">PR #457</Link>
                ] Improve types for <code>ThrottlingOctokitOptions</code>.
              </li>
              <li>
                [
                <Link href="https://github.com/octokit/plugin-throttling.js/pull/455">PR #455</Link>
                ] Replace 'abuse limit' with 'secondary limit' due to a change in GitHub's API.
              </li>
              <li>
                [
                <Link href="https://github.com/octokit/plugin-throttling.js/pull/456">PR #456</Link>
                ] Reach 100% test coverage in the repository.
              </li>
            </ul>
            <h2>What's coming next?</h2>
            <p>
              You can find the next contributions or personal projects I'm planning in my{' '}
              <a href="https://github.com/users/oscard0m/projects/1">GitHub Project Board</a>
            </p>
            <br />
            <h1>Now I’m reading</h1>
            <h2>Psychology</h2>
            <ul>
              <li>
                <span role="img" aria-label="book">
                  📚
                </span>{' '}
                <a href="https://www.goodreads.com/book/show/48725742-one-life">
                  One Life: How we forgot to live meaningful lives
                </a>{' '}
                by <a href="https://en.wikipedia.org/wiki/Morten_Alb%C3%A6k">Morten Albæk</a>
              </li>
            </ul>
            <h2>Fiction</h2>
            <ul>
              <li>
                <span role="img" aria-label="comic">
                  🗯
                </span>{' '}
                <a href="https://www.goodreads.com/book/show/138398.The_Walking_Dead_Vol_1">
                  The Walking Dead
                </a>{' '}
                by <a href="https://en.wikipedia.org/wiki/Robert_Kirkman">Robert Kirkman</a>,{' '}
                <a href="https://en.wikipedia.org/wiki/Charlie_Adlard">Charlie Adlard</a> &{' '}
                <a href="https://en.wikipedia.org/wiki/Cliff_Rathburn">Cliff Rathburn</a>
                <ul>
                  <li>
                    <a href="https://www.goodreads.com/book/show/138398.The_Walking_Dead_Vol_1">
                      Vol 1: Days Gone Bye
                    </a>
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/book/show/138396.The_Walking_Dead_Vol_2">
                      Vol 2: Miles Behind Us
                    </a>
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/book/show/30069.The_Walking_Dead_Vol_3">
                      Vol 3: Safety Behind Bars
                    </a>
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/book/show/138397.The_Walking_Dead_Vol_4">
                      Vol 4: The Heart's Desire
                    </a>
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/book/show/30065.The_Walking_Dead_Vol_5">
                      Vol 5: The Best Defense
                    </a>
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/book/show/138395.The_Walking_Dead_Vol_6">
                      Vol 6: This Sorrowful Life
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <br></br>
            <h1>Now I'm watching</h1>
            <h2>Drama</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <a href="https://www.imdb.com/title/tt7660850/?ref_=fn_al_tt_1">Succession</a>{' '}
                (Season 3) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <a href="https://www.filmaffinity.com/es/film310747.html">Mare of Easttown</a> (Mini
                TV Show) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <a href="https://www.filmaffinity.com/es/film310747.html">Borgen</a> (Season 3) 🇩🇰
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <a href="https://www.filmaffinity.com/uk/film664726.html">Time</a> (Mini TV Show) 🇬🇧
              </li>
            </ul>
            <h2>Fiction</h2>
            <ul>
              <li>
                <span role="img" aria-label="movie  ">
                  🎥
                </span>{' '}
                <a href="https://www.filmaffinity.com/es/film491812.html">
                  Spider-Man: No Way Home
                </a>{' '}
                🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series  ">
                  📺
                </span>{' '}
                <a href="https://www.imdb.com/title/tt13668894/">The Book of Boba Fett</a> (Season
                1) 🇺🇸
              </li>
            </ul>
            <h2>Comedy</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <a href="https://www.imdb.com/title/tt0381733/?ref_=fn_al_tt_1">
                  Aquí no hay quien viva
                </a>{' '}
                (Season 2) 🇪🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <a href="https://www.imdb.com/title/tt6524350/?ref_=fn_al_tt_1">Big Mouth</a>{' '}
                (Season 4) 🇺🇸
              </li>
            </ul>
            <h2>Thriller</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <a href="https://www.imdb.com/title/tt10883660/?ref_=fn_al_tt_1">Antidisturbios</a>{' '}
                (Mini TV Series) 🇪🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <a href="https://www.filmaffinity.com/es/film310747.html">The Tourist</a> (Mini TV
                Series) 🇦🇺{' '}
              </li>
            </ul>
            <h2>Documental</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <a href="https://www.imdb.com/title/tt14818454/?ref_=fn_al_tt_3">Cat People</a>{' '}
                (Mini TV Show) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="movies">
                  🎥
                </span>{' '}
                <a href="https://www.filmaffinity.com/es/film176083.html">Fake Famous</a> 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <a href="https://www.filmaffinity.com/es/film673343.html">
                  Neymar: The Perfect Chaos
                </a>{' '}
                🇺🇸
              </li>
            </ul>
            <hr></hr>
            <p>
              <small>
                <sup>*</sup>
                Do you want to know more about now pages? Take a look into{' '}
                <a href="https://nownownow.com/about">nownownow.com/about</a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
