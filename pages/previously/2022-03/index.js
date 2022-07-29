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
            Now (March 2022)
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
              You can see what I was doing previously <Link href="/now/previously">here</Link>.
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
            <h2>MSW</h2>
            <p>
              <Link href="https://github.com/mswjs/msw">Mock Service Worker (MSW)</Link> is an API
              mocking library for browser and Node.js.
            </p>
            <p>My recent contributions to the project are the following ones:</p>
            <h3>mswjs/msw</h3>
            <ul>
              <li>
                <p>
                  [<Link href="https://github.com/mswjs/msw/pull/1170">Pull Request</Link>]{' '}
                  ci(workflows): upgrade <code>actions/checkout</code> and{' '}
                  <code>actions/setup-node</code> to <code>v3</code>
                </p>
              </li>
              <li>
                [<Link href="https://github.com/mswjs/msw/discussions/1174">Discussion</Link>] Let's
                explore existing ways to monitor our GitHub Actions!
              </li>
              <li>
                [<Link href="https://github.com/mswjs/msw/discussions/1173">Discussion</Link>]{' '}
                Automated Releases with <code>semantic-release</code> fails to push
              </li>
            </ul>
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
                [<Link href="https://github.com/octokit/octokit.js/pull/2206">Pull Request</Link>]
                Improved Octokit Docs for contributors adding an explanation on what to do if a Pull
                Request is merged and the message used for it is not{' '}
                <Link href="https://github.com/semantic-release/semantic-release">
                  semantic-release
                </Link>{' '}
                compliant.
              </li>
              <li>
                [<Link href="https://github.com/octokit/octokit.js/pull/2205">Pull Request</Link>]
                Improved Octokit Docs replacing <code>@octokit/auth-oauth-user-client</code> in the
                examples with a more generic one
              </li>
              <li>
                [
                <Link href="https://github.com/octokit/octokit.js/discussions/2204">
                  Discussion
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
                [<Link href="https://github.com/octokit/core.js/issues/449">Issue</Link>] [
                <Link href="https://github.com/octokit/core.js/pull/450">Pull Request</Link>]
                Improved Octokit typing in TypeScript by converting <code>type OctokitOptions</code>{' '}
                into <code>interface OctokitOptions</code>.
              </li>
              <li>
                [<Link href="https://github.com/octokit/core.js/issues/451">Issue</Link>] [
                <Link href="https://github.com/octokit/core.js/pull/454">Pull Request</Link>] Fix
                automatic release workflow by replacing the command <code>pika</code> used in the
                build step with <code>pika-pack</code>.
              </li>
            </ul>
            <h3>@octokit/plugin-rest-endpoint-methods.js</h3>
            <p>
              <Link href="https://github.com/octokit/plugin-rest-endpoint-methods.js">
                @octokit/plugin-rest-endpoint-methods.js
              </Link>{' '}
              is the Octokit plugin adding one method for all of api.github.com REST API endpoints
            </p>
            <ul>
              <li>
                [
                <Link href="https://github.com/octokit/plugin-rest-endpoint-methods.js/issues/476">
                  Issue
                </Link>
                ] [
                <Link href="https://github.com/octokit/plugin-rest-endpoint-methods.js/pull/479">
                  Pull Request
                </Link>
                ] fixed a <code>CI</code> problem when running a <code>CodeQL</code> workflow in
                Pull Requests opened by <code>dependabot</code>
              </li>
              <li>
                [
                <Link href="https://github.com/octokit/plugin-rest-endpoint-methods.js/issues/477">
                  Issue
                </Link>
                ] [
                <Link href="https://github.com/octokit/plugin-rest-endpoint-methods.js/pull/478">
                  Pull Request
                </Link>
                ] remove unnecessary step to <code>checkout HEAD~2</code> in CI from PRs
              </li>
            </ul>
            <h3>@octokit/plugin-retry.js</h3>
            <p>
              <Link href="https://github.com/octokit/plugin-retry.js">
                @octokit/plugin-retry.js
              </Link>{' '}
              is the Octokit plugin for GitHub’s recommended request retries
            </p>
            <ul>
              <li>
                [<Link href="https://github.com/octokit/plugin-retry.js/issues/155">Issue</Link>] [
                <Link href="https://github.com/octokit/plugin-retry.js/pull/303">Pull Request</Link>
                ] Add <code>@octokit/core</code> as <code>peerDependency</code> to the project.
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
                <Link href="https://github.com/octokit/plugin-throttling.js/pull/459">
                  Pull Request
                </Link>
                ] Replace the usage of <code>console.warn</code> in this plugin to use the more
                generic <code>octokit.log.warn</code>
              </li>
              <li>
                [
                <Link href="https://github.com/octokit/plugin-throttling.js/pull/457">
                  Pull Request
                </Link>
                ] Improve types for <code>ThrottlingOctokitOptions</code>.
              </li>
              <li>
                [
                <Link href="https://github.com/octokit/plugin-throttling.js/pull/455">
                  Pull Request
                </Link>
                ] Replace 'abuse limit' with 'secondary limit' due to a change in GitHub's API.
              </li>
              <li>
                [
                <Link href="https://github.com/octokit/plugin-throttling.js/pull/456">
                  Pull Request
                </Link>
                ] Reach 100% test coverage in the repository.
              </li>
            </ul>
            <h2>Octoherd</h2>
            <p>
              <Link href="https://github.com/octoherd">Octoherd</Link> is a tool to manage multiple
              repository updates all at once.
            </p>
            <p>My recent contributions to the project are the following ones:</p>
            <h3>octoherd/cli</h3>
            <p>
              <Link href="https://github.com/octoherd/cli">octoherd/cli</Link> is the repository in
              charge of implementing the cli of Octoherd tool. It's core is implemented with
              Octokit.
            </p>
            <ul>
              <li>
                [<Link href="https://github.com/octoherd/cli/issues/69">Issue</Link>] Reported a
                'Release Job' failed due to an issue with <code>semantic-release</code>
              </li>
            </ul>
            <h3>robvanderleek/awesome-octoherd-scripts</h3>
            <p>
              <Link href="https://github.com/robvanderleek/awesome-octoherd-scripts">
                robvanderleek/awesome-octoherd-scripts
              </Link>{' '}
              is a carefully curated list of awesome Octoherd scripts for GitHub automation
            </p>
            <ul>
              <li>
                [
                <Link href="https://github.com/robvanderleek/awesome-octoherd-scripts/issues/1">
                  Issue
                </Link>
                ] Reported a proposal for auto-maintain the list of scripts
              </li>
            </ul>
            <h3>facio-ergo-sum/repo-meister-issues</h3>
            <p>
              <Link href="https://github.com/facio-ergo-sum/repo-meister-issues/">
                facio-ergo-sum/repo-meister-issues
              </Link>{' '}
              is a repository to collect feature requests ✨, bugs 🐛, and general discussion for
              Repo Meister
            </p>
            <ul>
              <li>
                [
                <Link href="https://github.com/facio-ergo-sum/repo-meister-issues/issues/1">
                  Issue
                </Link>
                ] Reported suggestion for UI permitting to run to public repositories outside my
                user/org
              </li>
            </ul>
            <h2>semantic-release</h2>
            <p>
              <Link href="https://github.com/semantic-release/semantic-release">
                semantic-release
              </Link>{' '}
              is a fully automated version management and package publishing
            </p>
            <p>My recent contributions to the project are the following ones:</p>
            <h3>semantic-release/github</h3>
            <ul>
              <li>
                <p>
                  [<Link href="https://github.com/semantic-release/github/issues/299">Issue</Link>]
                  [
                  <Link href="https://github.com/semantic-release/github/pull/480">
                    Draft Pull Request
                  </Link>
                  ] use Octokit's plugin-throttling instead of a custom implementation
                </p>
              </li>
            </ul>
            <h2>MDN: Mozilla Developer Network</h2>
            <p>
              <Link href="https://github.com/mdn/">Mozilla Developer Network (MDN)</Link>: Data and
              tools related to MDN Web Docs (formerly Mozilla Developer Network, formerly Mozilla
              Developer Center...)
            </p>
            <p>My recent contributions to the project are the following ones:</p>
            <h3>mdn/content</h3>
            <p>
              <Link href="https://github.com/mdn/content">mdn/content</Link> is the repository for
              managing the content behind MDN Web Docs
            </p>
            <ul>
              <li>
                <p>
                  [<Link href="https://github.com/mdn/content/pull/13649">Pull Request</Link>] Add
                  missing default value for <code>'rows'</code> attribute for{' '}
                  <code>{'<textarea>'}</code>
                </p>
              </li>
            </ul>
            <h2>GitHub</h2>
            <p>
              <Link href="https://github.com/github/">GitHub</Link>: Millions of developers and
              companies build, ship, and maintain their software on GitHub—the largest and most
              advanced development platform in the world.
            </p>
            <p>My recent contributions to the project are the following ones:</p>
            <h3>github/feedback</h3>
            <p>
              <Link href="https://github.com/github/feedback">github/feedback</Link> is the
              repository for public feedback discussions for: GitHub for Mobile, GitHub Discussions,
              GitHub Codespaces, GitHub Sponsors, GitHub Issues and more!
            </p>
            <ul>
              <li>
                <p>
                  [
                  <Link href="https://github.com/github/feedback/discussions/13071">
                    Discussion
                  </Link>
                  ] Add a detailed monitor option to track GitHub Actions stats
                </p>
              </li>
            </ul>
            <h2>ESLint</h2>
            <p>
              <Link href="https://github.com/eslint/">ESLint</Link>: helps finding and fixing
              problems in your JavaScript code.
            </p>
            <p>My recent contributions to the project are the following ones:</p>
            <h3>yannickcr/eslint-plugin-react</h3>
            <p>
              <Link href="https://github.com/yannickcr/eslint-plugin-react">
                yannickcr/eslint-plugin-react
              </Link>{' '}
              is the React specific linting rules for ESLint
            </p>
            <ul>
              <li>
                <p>
                  [
                  <Link href="https://github.com/yannickcr/eslint-plugin-react/issues/3242">
                    Issue
                  </Link>
                  ] Is there an ESLint rule to error/warn to avoid "Mirroring props in state"?
                </p>
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
            <h2>Psychology</h2>
            <ul>
              <li>
                <span role="img" aria-label="book">
                  📚
                </span>{' '}
                <Link href="https://www.goodreads.com/book/show/48725742-one-life">
                  One Life: How we forgot to live meaningful lives
                </Link>{' '}
                by <Link href="https://en.wikipedia.org/wiki/Morten_Alb%C3%A6k">Morten Albæk</Link>
              </li>
            </ul>
            <h2>Fiction</h2>
            <ul>
              <li>
                <span role="img" aria-label="comic">
                  🗯
                </span>{' '}
                <Link href="https://www.goodreads.com/book/show/138398.The_Walking_Dead_Vol_1">
                  The Walking Dead
                </Link>{' '}
                by <Link href="https://en.wikipedia.org/wiki/Robert_Kirkman">Robert Kirkman</Link>,{' '}
                <Link href="https://en.wikipedia.org/wiki/Charlie_Adlard">Charlie Adlard</Link> &{' '}
                <Link href="https://en.wikipedia.org/wiki/Cliff_Rathburn">Cliff Rathburn</Link>
                <ul>
                  <li>
                    <Link href="https://www.goodreads.com/book/show/138398.The_Walking_Dead_Vol_1">
                      Vol 1: Days Gone Bye
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.goodreads.com/book/show/138396.The_Walking_Dead_Vol_2">
                      Vol 2: Miles Behind Us
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.goodreads.com/book/show/30069.The_Walking_Dead_Vol_3">
                      Vol 3: Safety Behind Bars
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.goodreads.com/book/show/138397.The_Walking_Dead_Vol_4">
                      Vol 4: The Heart's Desire
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.goodreads.com/book/show/30065.The_Walking_Dead_Vol_5">
                      Vol 5: The Best Defense
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.goodreads.com/book/show/138395.The_Walking_Dead_Vol_6">
                      Vol 6: This Sorrowful Life
                    </Link>
                  </li>
                </ul>
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
                <Link href="https://www.filmaffinity.com/es/film310747.html">Borgen</Link> (Season
                3) 🇩🇰
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film241711.html">Severance</Link>{' '}
                (Season 1) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film976626.html">
                  Super Pumped: The Battle of Uber
                </Link>{' '}
                (Season 1) 🇺🇸
              </li>
            </ul>
            <h2>Comedy</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film650372.html">
                  The Cuphead Show!
                </Link>{' '}
                (Season 1) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film930636.html">
                  Winning Time: The rise of the Lakers Dynasty
                </Link>{' '}
                (Season 1) 🇺🇸
              </li>
            </ul>
            <h2>Documental</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film348887.html">
                  Simeone, vivir partido a partido
                </Link>{' '}
                (Mini TV Show) 🇪🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film742708.html">
                  All or nothing: Juventus
                </Link>{' '}
                (Mini TV Show) 🇬🇧
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film257290.html">Phoenix Rising</Link>{' '}
                (Mini TV Show) 🇺🇸
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
                <Link href="https://www.ign.com/games/fifa-22">Fifa 22</Link> (2021) 🇺🇸
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
