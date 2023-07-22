import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/layout/social-icons'
import { PageSeo } from '@/components/layout/SEO'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={siteMetadata.image}
              alt="avatar"
              width="192"
              height="192"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{siteMetadata.profession}</div>
            <div className="text-gray-500 dark:text-gray-400">{siteMetadata.location}</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              I'm a Software Engineer who started his journey as a web developer and fell in love
              with:
            </p>
            <ul>
              <li>
                <span role="img" aria-label="robot emoji">
                  🤖
                </span>{' '}
                Software Automation
              </li>
              <li>
                <span role="img" aria-label="spider web emoji">
                  🕸
                </span>{' '}
                Web Development
              </li>
              <li>
                <span role="img" aria-label="glob with meridians emoji">
                  🌐
                </span>{' '}
                Open Source
              </li>
              <li>
                <span role="img" aria-label="mortar board emoji">
                  🎓
                </span>{' '}
                Leadership and Mentoring in Software Development
              </li>
            </ul>
            <h3>Do you want to know more about me?</h3>
            <p>
              You can read more about my software developer career in my{' '}
              <Link href="/blog">blog</Link> and my social networks.
            </p>
            <h3>Personal Projects and Open Source</h3>
            <p>
              You can read about them <Link href="/projects">here</Link>.
            </p>
            <h3>What am I doing right now?</h3>
            <p>
              You can find it <Link href="/now">here</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
