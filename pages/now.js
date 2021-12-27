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
            Now (Dec 2021)
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
            <h1>Courses</h1>
            <h2>React</h2>
            <p>
              In my daily job I did not have the chance to learn and play with{' '}
              <a href="https://reactjs.org">React</a> so I decided it's time to start learning the
              fundamentals and expertise it.
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
            <h1>What I’m reading about</h1>
            <h2>Psychology</h2>
            <ul>
              <li>
                <a hred="https://www.goodreads.com/book/show/48725742-one-life">
                  One Life: How we forgot to live meaningful lives
                </a>{' '}
                by <a href="https://en.wikipedia.org/wiki/Morten_Alb%C3%A6k">Morten Albæk</a>
              </li>
            </ul>
            <h2>Comics</h2>
            <ul>
              <li>
                <a href="https://www.goodreads.com/book/show/138397.The_Walking_Dead_Vol_4?ac=1&from_search=true&qid=44AFMXtmsq&rank=4">
                  The Walking Dead, Vol 4: The Heart's Desire
                </a>{' '}
                by <a href="https://en.wikipedia.org/wiki/Robert_Kirkman">Robert Kirkman</a>,{' '}
                <a href="https://en.wikipedia.org/wiki/Charlie_Adlard">Charlie Adlard</a> &{' '}
                <a href="https://en.wikipedia.org/wiki/Cliff_Rathburn">Cliff Rathburn</a>
              </li>
            </ul>
            <br></br>
            <h1>What I'm watching</h1>
            <h2>Movies</h2>
            <ul>
              <li>
                <a href="https://www.imdb.com/title/tt4080728/?ref_=fn_al_tt_1">
                  En man som heter Ove
                </a>{' '}
                🇸🇪
              </li>
              <li>
                <a href="https://www.imdb.com/title/tt7660850/?ref_=fn_al_tt_1">Dune</a> 🇺🇸
              </li>
              <li>
                <a href="https://www.imdb.com/title/tt7660850/?ref_=fn_al_tt_1">Kill Bill: Vol 1</a>{' '}
                (re-watched) 🇺🇸
              </li>
            </ul>
            <h2>TV Series</h2>
            <ul>
              <li>
                <a href="https://www.imdb.com/title/tt7660850/?ref_=fn_al_tt_1">Succession</a>{' '}
                (Season 3) 🇺🇸
              </li>
              <li>
                <a href="https://www.imdb.com/title/tt10883660/?ref_=fn_al_tt_1">Antidisturbios</a>{' '}
                (Miniseries) 🇪🇸
              </li>
              <li>
                <a href="https://www.imdb.com/title/tt7661390/?ref_=fn_al_tt_1">Gangs of London</a>{' '}
                (Season 1) 🇬🇧
              </li>
              <li>
                <a href="https://www.imdb.com/title/tt7263154/?ref_=fn_al_tt_1">Undercover</a>{' '}
                (Season 1) 🇧🇪
              </li>
              <li>
                <a href="https://www.imdb.com/title/tt0386676/?ref_=fn_al_tt_1">The Office</a>{' '}
                (Season 1) 🇺🇸
              </li>
              <li>
                <a href="https://www.imdb.com/title/tt5753856/?ref_=fn_al_tt_1">Dark</a>{' '}
                (re-watching) (Season 1) 🇩🇪
              </li>
              <li>
                <a href="https://www.imdb.com/title/tt14113324/?ref_=fn_al_tt_1">
                  All or Nothing: Juventus
                </a>{' '}
                (Season 1) 🇬🇧
              </li>
              <li>
                <a href="https://www.imdb.com/title/tt3655448/?ref_=fn_al_tt_1">The Young Pope</a>{' '}
                (Season 1) 🇮🇹
              </li>
              <li>
                <a href="https://www.imdb.com/title/tt0381733/?ref_=fn_al_tt_1">
                  Aquí no hay quien viva
                </a>{' '}
                (Season 1) 🇪🇸
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
