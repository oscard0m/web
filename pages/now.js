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
            Now
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              This page was inspired by{' '}
              <a href="https://blog.pragmaticengineer.com/now/">Gergely Orosz</a> and{' '}
              <a href="https://sive.rs/nowff">Derek Sivers</a> now pages.
            </p>
            <p>Here's what I'm doing now.</p>
            <br />
            <h1>Courses</h1>
            <h2> Epic React</h2>
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
            <br />
            <h1>Personal Projects</h1>
            <p></p>
            <br />
            <h1>Open Source</h1>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}
