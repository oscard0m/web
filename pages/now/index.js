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
            <p>My recent contributions to the project are the following ones:</p>
            <h3>@octokit/auth-token.js</h3>
            <p>
              <Link href="https://github.com/octokit/auth-token.js">@octokit/auth-token.js</Link> is
              the GitHub API token authentication for browsers and Node.js
            </p>
            <ul>
              <li>
                [<Link href="https://github.com/octokit/auth-token.js/issues/216">Issue</Link>] [
                <Link href="https://github.com/octokit/auth-token.js/pull/217">Pull Request</Link>]
                fixed a <code>CI</code> problem when running a <code>CodeQL</code> workflow in Pull
                Requests opened by <code>dependabot</code>
              </li>
              <li>
                [<Link href="https://github.com/octokit/auth-token.js/issues/218">Issue</Link>] [
                <Link href="https://github.com/octokit/auth-token.js/pull/219">Pull Request</Link>]
                remove unnecessary step to <code>checkout HEAD~2</code> in CI from PRs
              </li>
            </ul>
            <h2>GitHub Actions</h2>
            <p>
              <Link href="https://github.com/actions">GitHub Actions</Link> is CI tool provided by
              GitHub to automate your GitHub workflows.
            </p>
            <p>My recent contributions to the project are the following ones:</p>
            <h3>actions/setup-python</h3>
            <p>
              <Link href="https://github.com/actions/setup-python">actions/setup-python</Link> is
              the repository for setting up your GitHub Actions workflow with a specific version of
              python.
            </p>
            <ul>
              <li>
                [<Link href="https://github.com/actions/setup-python/pull/223">Issue</Link>] [
                <Link href="https://github.com/actions/setup-python/pull/379">Pull Request</Link>]
                Added <code>cache</code> to workflows using <code>actions/setup-node</code>
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
