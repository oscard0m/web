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
            <h2>React</h2>
            <p>
              In my previous job at <Link href="https://www.marfeel.com/">Marfeel</Link> I did not
              have the chance to learn and play with <Link href="https://reactjs.org">React</Link>{' '}
              as much as I would have liked. In my current job at{' '}
              <Link href="https://www.mainmatter.com">Mainmatter</Link> I'm working on a project
              built in React.
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
            <h2>Biography</h2>
            <ul>
              <li>
                <span role="img" aria-label="book">
                  📚
                </span>{' '}
                <Link href="https://www.goodreads.com/book/show/55682280-el-hijo-del-ch-fer">
                  El hijo del chofer
                </Link>{' '}
                <small>
                  by{' '}
                  <Link href="https://www.goodreads.com/author/show/4039103.Jordi_Amat">
                    Jordi Amat
                  </Link>
                </small>
              </li>
            </ul>
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
            <h2>Programming</h2>
            <ul>
              <li>
                <span role="img" aria-label="book">
                  📚
                </span>{' '}
                <Link href="https://www.goodreads.com/book/show/54140556-working-in-public">
                  Working in Public: The Making and Maintenance of Open Source Software
                </Link>{' '}
                <small>
                  by <Link href="https://nadia.xyz/">Nadia Eghbal</Link>
                </small>
              </li>
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
                <Link href="https://www.filmaffinity.com/es/film948192.html">The Bear</Link> (Season
                1) 🇺🇸
              </li>
            </ul>
            <h2>Comedy</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film393232.html">
                  Aquí no hay quien viva
                </Link>{' '}
                (Season 2) 🇪🇸
              </li>
            </ul>
            <h2>Documentary</h2>
            <ul>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film537182.html">The Playbook</Link>{' '}
                (Mini-series TV) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="movie">
                  🎥
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film815791.html">
                  El silencio de otros
                </Link>{' '}
                (2018) 🇪🇸
              </li>
              <li>
                <span role="img" aria-label="movie">
                  🎥
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film789231.html">Patria</Link> (2019) 🇪🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film238008.html">
                  We Need to Talk About Cosby
                </Link>{' '}
                (Mini-series TV) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film253982.html">
                  Secrets of Playboy
                </Link>{' '}
                (Mini-series TV) 🇺🇸
              </li>
              <li>
                <span role="img" aria-label="tv series">
                  📺
                </span>{' '}
                <Link href="https://www.filmaffinity.com/es/film452389.html">
                  Die Wahrheit Uber Franco - Spaniens vergessene Diktatur
                </Link>{' '}
                (Mini-series TV) 🇩🇪
              </li>
            </ul>
            <br></br>
            <h1 id="now-im-playing">
              <span role="img" aria-label="popcorn">
                🎮
              </span>{' '}
              Now I'm playing
            </h1>
            <h2>Action/Adventure</h2>
            <ul>
              <li>
                <span role="img" aria-label="video game">
                  🦊
                </span>{' '}
                <Link href="https://www.imdb.com/title/tt12546328/?ref_=nv_sr_srsg_0">
                  Crash Bandicoot 4: It's About Time
                </Link>{' '}
                (2020) 🇺🇸
              </li>
            </ul>
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
