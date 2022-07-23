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
            Previously
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
            <p>Here's what I was doing the previous months:</p>
            <ul>
              <li>
                <Link href="/previously/2022-06">
                  <span role="img" aria-label="academy">
                    📅
                  </span>{' '}
                  June 2022
                </Link>
              </li>
              <li>
                <Link href="/previously/2022-05">
                  <span role="img" aria-label="academy">
                    📅
                  </span>{' '}
                  May 2022
                </Link>
              </li>
              <li>
                <Link href="/previously/2022-04">
                  <span role="img" aria-label="academy">
                    📅
                  </span>{' '}
                  April 2022
                </Link>
              </li>
              <li>
                <Link href="/previously/2022-03">
                  <span role="img" aria-label="academy">
                    📅
                  </span>{' '}
                  March 2022
                </Link>
              </li>
            </ul>
            <p>
              You can see what <b>I'm doing now</b> <Link href="/now">here</Link>.
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}
