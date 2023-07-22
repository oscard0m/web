import '@/css/tailwind.css'

import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

import { SEO } from '@/components/layout/SEO'
import LayoutWrapper from '@/components/layout/LayoutWrapper'
import MDXComponents from '@/components/mdx/MDXComponents'

import PlausibleProvider from 'next-plausible'

export default function App({ Component, pageProps }) {
  return (
    <PlausibleProvider enabled domain="oscardom.dev" trackOutboundLinks>
      <ThemeProvider attribute="class">
        <MDXProvider components={MDXComponents}>
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
          </Head>
          <DefaultSeo {...SEO} />
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </MDXProvider>
      </ThemeProvider>
    </PlausibleProvider>
  )
}
