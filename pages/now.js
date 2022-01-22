import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

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
            Now (Jan 2022)
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

            <h2>Svelte</h2>
            <p>
              During my job research, I had the chance to take a LiveCoding session in one of the
              stages in the interview process with{' '}
              <a href="https://twitter.com/pichfl">Florian Pichler</a> for{' '}
              <a href="https://simplabs.com">simplabs</a> and the statement was: "Let's build a
              TO-DO list app together, and the condition is to use a component framework none of us
              have used before".
            </p>
            <p>
              The election was <a href="https://svelte.dev/">Svelte</a> and, after checking their
              docs and playing around I really got in love with it. I mainly like the way it solves
              classic Component problems for web development:
              <ul>
                <li>
                  <a href="https://svelte.dev/blog/write-less-code">Less code</a>
                </li>
                <li>
                  <a href="https://svelte.dev/blog/virtual-dom-is-pure-overhead">No virtual DOM</a>
                </li>
                <li>
                  <a href="https://svelte.dev/blog/svelte-3-rethinking-reactivity">
                    Truly reactive
                  </a>
                </li>
              </ul>
            </p>
            <p>
              The course I've chosen to do so is{' '}
              <a href="https://epicreact.dev/">Svelte (Frontend Masters)</a> by its creator{' '}
              <a href="https://twitter.com/Rich_Harris">Rich Harris</a>.
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
            <h2>This website</h2>
            <p>
              This website you are visiting right now is still under construction. New features,
              creation of content, small adjustments, changes in the UI are part of my main focus
              right now.
            </p>
            <p>
              You can take a look into the code <a href="https://github.com/oscard0m/web">here</a>.
            </p>
            <h2>What's coming next?</h2>
            <p>
              You can find the next contributions or personal projects I'm planning in my{' '}
              <a href="https://github.com/users/oscard0m/projects/1">GitHub Project Board</a>
            </p>
            <br />
            <h1>Now I’m reading</h1>
            <h2>Sports</h2>
            <ul>
              <li>
                <span role="img" aria-label="book">
                  📚
                </span>{' '}
                <a href="https://www.goodreads.com/book/show/23199435-herr-pep">Herr Pep</a> by{' '}
                <a href="https://www.goodreads.com/author/show/18740681.Mart_Perarnau_Grau">
                  Martí Perarnau
                </a>
              </li>
            </ul>
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
